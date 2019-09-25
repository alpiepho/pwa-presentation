module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: 'content/slides'
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Gatsby Starter Slides Theme`,
    author: `My Name`,
    description: `My site description...`,
  },
}
