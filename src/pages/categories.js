import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import "../styles/card.css"

const CategoriesPage = ({ data }) => {
  const [curCategory, setCurCategory] = React.useState("none");
  const categories = {};

  data.allMdx.nodes.sort((a, b) => {
    if (a.frontmatter.category > b.frontmatter.category) {
      return 1;
    } else if (a.frontmatter.categroy < b.frontmatter.category) {
      return -1;
    } else {
      return 0;
    }
  });

  data.allMdx.nodes.map((node) => {
    if (categories[node.frontmatter.category] === undefined) {
      categories[node.frontmatter.category] = [node];
    } else {
      categories[node.frontmatter.category].push(node);
    }
  });

  const showCategories = () => {
    const ret = [];
    for (let category in categories) {
      ret.push(
        <Link className="link" to={category} key={category}>
          <div className="card">
            <h2>{category}</h2>
          </div>
        </Link>
      );
    }
    return ret;
  }

  return (
    <Layout>
      {showCategories()}
    </Layout>
  );
}

export const query = graphql`
  query CategoryQuery {
    allMdx(sort: {fields: frontmatter___idx, order: DESC}) {
      nodes {
        id
        frontmatter {
          category
        }
      }
    }
  }
`

export default CategoriesPage
