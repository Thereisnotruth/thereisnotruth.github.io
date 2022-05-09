import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
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
      <Seo title="네모장"/>
      {
        posts
        .slice(offset, offset + limit)
        .map((node) => (
          <Link className="link" to={node.slug}>
            <ListCard
              key={node.frontmatter.title}
              frontmatter={node.frontmatter}
              size="120px"
            >
              {node.rawBody}
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
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      slug
      frontmatter {
        date
        category
        title
      }
      rawBody
    }
  }
}

`
export default IndexPage
