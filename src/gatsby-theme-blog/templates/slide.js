import React from "react"
import { graphql } from "gatsby"

import Slide from "../components/slide"

export default ({ pageContext: { previous, next }, location, data }) => (
  <Slide data={data} location={location} previous={previous} next={next} />
)

//      date(formatString: "MMMM DD, YYYY")
export const pageQuery = graphql`
  query($id: String!) {
    slide: singleSlide(id: { eq: $id }) {
      id
      title
      excerpt
      body
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
