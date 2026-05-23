import * as React from "react"
import { Link, graphql } from "gatsby"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import ListCard from "../components/list-card"
import Pagination from "../components/pagination"
import Seo from "../components/seo"

import "../styles/home.css"

type IndexPageData = {
  allMdx: {
    nodes: Array<{
      id: string
      fields: {
        slug: string
      }
      frontmatter: {
        idx: string
        date: string
        category: string
        title: string
      }
      excerpt: string
    }>
  }
}

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  const [page, setPage] = React.useState(1);
  const [line, setLine] = React.useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  
  const posts = data.allMdx.nodes.sort((o1, o2) => {
	  if (Number(o1.frontmatter.idx) > Number(o2.frontmatter.idx)) {
		  return -1;
	  } else {
		  return 1;
	  }
  });
  
  return (
    <Layout>
      {
        posts
        .slice(offset, offset + limit)
        .map((node) => (
          <Link className="link" to={node.fields.slug} key={node.id}>
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
  allMdx(sort: {frontmatter: {idx: DESC}}) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
	  	idx
        date(formatString: "YYYY.MM.DD")
        category
        title
      }
      excerpt
    }
  }
}
`

export default IndexPage

export const Head = () => <Seo title="네모장" />
