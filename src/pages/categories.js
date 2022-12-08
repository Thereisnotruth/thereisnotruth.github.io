import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import "../styles/list_card.css"

const CategoriesPage = ({ data }) => {
  const categories = []

  const directories = data.allDirectory.edges
  for (let i = 0; i < directories.length; i++) {
    if (
      directories[i].node.name[0] >= "0" &&
      directories[i].node.name[0] <= "9"
    ) {
      continue
    }
    categories.push(directories[i].node.name)
  }

  console.log(categories)
  const showCategories = () => {
    const ret = []
    for (let i = 0; i < categories.length; i++) {
      ret.push(
        <Link className="link" to={categories[i]} key={categories[i]}>
          <div className="list-card">
            <h2>{categories[i]}</h2>
          </div>
        </Link>
      )
    }
    return ret
  }

  return <Layout>{showCategories()}</Layout>
}

export const query = graphql`
  query CategoryQuery {
    allDirectory {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default CategoriesPage
