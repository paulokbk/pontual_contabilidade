require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // Usa .env.development ou .env.production
});

module.exports = {
  siteMetadata: {
    title: `Pontual Contabilidade`,
    description: `Serviços de contablidade`,
    author: `Carol Frazão`,
    siteUrl: `https://www.instagram.com/pontualcontabilidadecn`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo/logo-icon-pontual.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
