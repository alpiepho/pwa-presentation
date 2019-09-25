import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "../../../node_modules/gatsby-theme-blog/src/components/layout"
import SEO from "../../../node_modules/gatsby-theme-blog/src/components/seo"

const Slides = ({ location, slides, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {slides.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={{
                    textDecoration: `none`,
                  }}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
  </Layout>
)

export default Slides
