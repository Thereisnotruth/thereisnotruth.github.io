module.exports = {
  siteMetadata: {
    title: "네모장",
    description: "네모난 메모장, 네모장",
    author: "KoTaeJin",
    siteUrl: "https://thereisnotruth.github.io",
    socials: {
      emails: "thereisnotruth12@gmail.com",
      github: "thereisnotruth",
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `네모장`,
        short_name: `네모장`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
		extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
