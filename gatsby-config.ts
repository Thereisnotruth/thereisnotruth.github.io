import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "단서",
    description: "생각과 기록을 이어가는 기술 블로그, 단서",
    author: "KoTaeJin",
    siteUrl: "https://thereisnotruth.github.io",
    socials: {
      emails: "thereisnotruth12@gmail.com",
      github: "thereisnotruth",
    }
  },
  plugins: [
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
        name: `단서`,
        short_name: `단서`,
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

export default config
