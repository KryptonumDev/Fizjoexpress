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
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KSGXTL6',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://www-data.fizjoexpress.pl/graphql'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 80,
          backgroundColor: `transparent`
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/404/**', '/404.html/', '/404/*']
      }
    },
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify-redirect`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
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
}
