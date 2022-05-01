import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Card from "../components/card"

const IndexPage = ({ data }) => {
  const nodes = data.allMdx.edges;
  console.log(nodes)
  return (
    <Layout>
      {
        nodes.map((edge) => (
          <Card frontmatter={edge.node.frontmatter} size="200px">
            {edge.node.body}
          </Card>
        ))
      }
    </Layout>
  )
}
export const query = graphql`
  query IndexQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            date
          }
          body
        }
      }
    }
  }
`
export default IndexPage
