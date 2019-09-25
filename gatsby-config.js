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
    title: `Progressive Web Apps`,
    author: `Al Piepho`,
    description: `My site description...`,
  },
}
