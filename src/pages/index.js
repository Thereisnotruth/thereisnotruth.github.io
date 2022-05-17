import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import ListCard from "../components/list_card"
import Pagination from "../components/pagination"

const IndexPage = ({ data }) => {
  const [page, setPage] = React.useState(1);
  const [line, setLine] = React.useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      {
        posts
        .slice(offset, offset + limit)
        .map((node, index) => (
          <Link className="link" to={node.slug} key={index}>
            <ListCard
              frontmatter={node.frontmatter}
            >
              {node.excerpt}
            </ListCard>
          </Link>
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
  allMdx(sort: {fields: frontmatter___idx, order: DESC}) {
    nodes {
      id
      slug
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        category
        title
      }
      excerpt(truncate: true)
    }
  }
}
`

export default IndexPage
