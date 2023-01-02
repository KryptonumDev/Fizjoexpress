/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fizjoexpress `,
    siteUrl: `https://fizjoexpress.pl`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "http://www-data.fizjoexpress.pl/graphql"
      }
    },
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 80,
          backgroundColor: `transparent`,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/logo.svg',
        name: `Fizjoexpress`,
        short_name: `Fizjoexpress`,
        start_url: `/`,
        background_color: `#F9F5F0`,
        theme_color: `#996D3E`,
        display: `standalone`
      }
    }
  ]
};