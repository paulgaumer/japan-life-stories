require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Japan Life Stories`,
    description: `Insights and success stories from foreigners who built a life & career in Japan.`,
    author: `Paul Gaumer`,
    image: "/images/banner-seotags.png",
    siteUrl: `https://japanlifestories.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "q3a1b0pv",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
        // // a token with read permissions is required
        // // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1400766143415157",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Maven Pro`,
            weights: [`400`, `500`, `700`, `900`],
          },
          {
            family: `Open Sans`,
            weights: [`300`, `400`, `600`, `700`, `800`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/legal/*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sun-mic.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
