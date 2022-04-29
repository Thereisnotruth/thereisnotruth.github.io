import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const node = data.allMdx.edges[0].node;
  return (
    <Layout>
      <MDXRenderer>
        {node.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMdx(filter: {frontmatter: {category: {eq: "index"}}}) {
      edges {
        node {
          id
          body
          frontmatter {
            category
            date
            title
          }
        }
      }
    }
  }
`
export default IndexPage
