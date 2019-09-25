import React from "react"

import Slides from "../components/slides"

export default ({
  pageContext: { slides, siteTitle },
  location,
}) => (
  <Slides
    location={location}
    slides={slides}
    siteTitle={siteTitle}
  />
)
