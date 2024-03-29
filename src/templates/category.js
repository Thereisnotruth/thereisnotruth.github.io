import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
import Layout from "../components/layout"
import ListCard from "../components/list_card"
import Pagination from "../components/pagination"

const CategoryTemplate = ({ data, pageContext, location }) => {
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
  console.log(posts)
  return (
    <Layout>
      <Seo title="네모장"/>
      {
        posts
        .slice(offset, offset + limit)
        .map((node, index) => (
          <Link className="link" to={"/" + node.slug} key={index}>
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
  query ($category: String!) {
    allMdx(
      sort: {fields: frontmatter___idx, order: DESC}
      filter: {frontmatter: {category: {eq: $category}}}
    ) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          category
          title
          idx
        }
        excerpt(truncate: true)
      }
    }
  }
`
export default CategoryTemplate

