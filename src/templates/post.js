import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const PostTemplate = ({ data, pageContext, location }) => {
  console.log(data)
  return (
    <Layout>
      asdf
    </Layout>
  )
}
export const query = graphql`
query PostQuery($slug: String!) {
  site {
    siteMetadata {
      siteUrl
      description
    }
  }
  mdx( slug: { eq: $slug } ) {
    body
    excerpt(pruneLength: 150)
    frontmatter {
      title
      date(formatString: "YYYY.MM.DD")
      category
    }
  }
}
`
export default PostTemplate
