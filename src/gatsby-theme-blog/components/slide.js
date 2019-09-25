import React from "react"
import { Styled, css } from "theme-ui"

import SlideFooter from "../../../node_modules/gatsby-theme-blog/src/components/slide-footer"
import Layout from "../components/layout"
import SEO from "../../../node_modules/gatsby-theme-blog/src/components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Slide = ({
  data: {
    slide,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={slide.title} description={slide.excerpt} />
    <main>
      <Styled.h1>{slide.title}</Styled.h1>
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3,
        })}
      >
      </Styled.p>
      <MDXRenderer>{slide.body}</MDXRenderer>
    </main>
    <SlideFooter {...{ previous, next }} />
  </Layout>
)

export default Slide
