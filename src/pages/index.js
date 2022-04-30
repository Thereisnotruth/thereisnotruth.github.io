import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Card from "../components/card"

const IndexPage = ({ data }) => {
  const node = data.allMdx.edges[0].node;
  return (
    <Layout>
      <Card size={{
        width: "450px",
        height: "200px"
      }}>
        {node.body}
      </Card>
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
