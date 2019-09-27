module.exports = {
  pathPrefix: `pwa-presentation`,
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: 'content/slides'
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },


        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Progressive Web App Presentation`,
        short_name: `PWA Presentation`,
        start_url: `/pwa-presentation/`,  // specific to gh-pages?
        background_color: `#0d4e8c`,
        theme_color: `#2876C0`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Progressive Web Apps`,
    author: `Al Piepho`,
    description: `My site description...`,
  },
}
