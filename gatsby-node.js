const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const crypto = require(`crypto`)
const Debug = require(`debug`)
const { urlResolve } = require(`gatsby-core-utils`)

//const debug = Debug(`gatsby-theme-blog`)
const debug = Debug(`gatsby-theme-slides`)

// These are customizable theme options we only need to check once
let basePath
let contentPath
let assetPath

// These templates are simply data-fetching wrappers that import components
const SlideTemplate = require.resolve(`./src/gatsby-theme-blog/templates/slide`)
const SlidesTemplate = require.resolve(`./src/gatsby-theme-blog/templates/slides`)

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()

  basePath = themeOptions.basePath || `/`
  contentPath = themeOptions.contentPath || `content/slides`
  assetPath = themeOptions.assetPath || `content/assets`

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}
exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(
    schema.buildObjectType({
      name: `SingleSlide`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        number: {
          type: `Int!`,
        },
        tags: { type: `[String]!` },
        keywords: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 40,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
    })
  )
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      mdxPages: allSingleSlide(
        sort: { fields: [number, title], order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt
            slug
            title
            number
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  // Create Slides and Slide pages.
  const {
    mdxPages,
    site: { siteMetadata },
  } = result.data
  const slides = mdxPages.edges
  const { title: siteTitle } = siteMetadata

  // console.log(slides)

  // Create a page for each Slide
  slides.forEach(({ node: slide }, index) => {
    const next = index === slides.length - 1 ? null : slides[index + 1]
    const previous = index === 0 ? null : slides[index - 1]
    const { slug } = slide
    createPage({
      path: slug,
      component: SlideTemplate,
      context: {
        ...slide,
        siteTitle,
        previous,
        next,
      },
    })
  })

  // // Create the Slides page
  createPage({
    path: basePath,
    component: SlidesTemplate,
    context: {
      slides,
      siteTitle,
    },
  })
}

// Create fields for slide slugs and source
// This will change with schema customization with work
exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  const toSlidePath = node => {
    const { dir } = path.parse(node.relativePath)
    return urlResolve(basePath, dir, node.name)
  }

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    const slug = toSlidePath(fileNode)

//    date: node.frontmatter.date,
    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      number: node.frontmatter.number,
    }
    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> SingleSlide`),
      parent: node.id,
      children: [],
      internal: {
        type: `SingleSlide`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Single Slides`,
      },
    })
    createParentChildLink({ parent: fileNode, child: node })
  }
}
