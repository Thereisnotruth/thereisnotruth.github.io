import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const CategoriesPage = ({ data }) => {
  const categories = [];

  data.allMdx.nodes.map((node) => {
    if (categories.length === 0) {
      categories.push({
        category: node.frontmatter.category,
        posts: [node]
      });
    } else {
      categories.map((category) => {
        if (category.category === node.frontmatter.category) {
          category.posts.push(node);
        }
      })
    }
  });
  
  console.log(categories)
  return (
    <Layout>
      <h1>Categories</h1>
    </Layout>
  );
}

export const query = graphql`
query CategoryQuery {
  allMdx(sort: {fields: frontmatter___idx, order: DESC}) {
    nodes {
      id
      slug
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        category
        title
      }
      rawBody
    }
  }
}
`

export default CategoriesPage
