import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Card from "../components/card"

import "../styles/indexpage.css"

const IndexPage = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(10);

  const nodes = data.allMdx.edges;
  const totalPosts = nodes.length;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)
  return (
    <Layout>
      {
        nodes.map((edge, key) => (
          <Card frontmatter={edge.node.frontmatter} size="200px">
            {edge.node.body}
          </Card>
        ))
      }
      <div className="pagination">
        {
          pageNumbers.map((number) => {
            <div key={number} className="page-item">
              <div onClick={() => setCurrentPage(number)} className="page-link">
              {number}
              </div>
            </div>
          })
        }
      </div>
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
