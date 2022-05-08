import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
import Layout from "../components/layout"
import ListCard from "../components/listcard"
import Pagination from "../components/pagination"

const PostTemplate = ({ data }) => {
  const [page, setPage] = React.useState(1);
  const [line, setLine] = React.useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  
  const posts = data.allMdx.edges;

  return (
    <>
    <Seo/>
    <Layout>
      {
        posts
        .slice(offset, offset + limit)
        .map((edge) => (
          <ListCard
            key={edge.node.frontmatter.title}
            frontmatter={edge.node.frontmatter}
            size="120px"
          >
            {edge.node.rawBody}
          </ListCard>
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
    </>
  )
}
export const query = graphql`
  query PostQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            date(formatString: "MM/DD/YYYY")
          }
          body
          rawBody
        }
      }
    }
  }
`
export default PostTemplate
