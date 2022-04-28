import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data.allFile.edges[0].node.name);
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allFile(filter: {relativeDirectory: {eq: "home"}}) {
      edges {
        node {
          id
          name
          relativeDirectory
        }
      }
    }
  }
`
export default IndexPage
