import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Card from "../components/card"
import Pagination from "../components/pagination"

const IndexPage = ({ data }) => {
  const [page, setPage] = React.useState(1);
  const [line, setLine] = React.useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  
  const posts = data.allMdx.edges;

  return (
    <Layout>
      {
        posts
        .slice(offset, offset + limit)
        .map((edge) => (
          <Card
            key={edge.node.frontmatter.title}
            frontmatter={edge.node.frontmatter}
            size="200px"
          >
            {edge.node.body}
          </Card>
        ))
      }
      <Pagination
        total={posts.length}
        limit={limit}
        page={page}
        line={line}
        setPage={setPage}
        setLine={setLine}
      /> 
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
