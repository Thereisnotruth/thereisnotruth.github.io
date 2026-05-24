import * as React from "react"
import { Link, graphql } from "gatsby"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/list_card.css"

type CategoriesPageData = {
  allMdx: {
    group: Array<{
      fieldValue: string
    }>
  }
}

const CategoriesPage = ({ data }: PageProps<CategoriesPageData>) => {
  const categories = data.allMdx.group.map((category) => category.fieldValue)

  const showCategories = () => {
    const ret: React.ReactNode[] = []
    for (let i = 0; i < categories.length; i++) {
      ret.push(
        <Link className="link" to={`/categories/${categories[i]}`} key={categories[i]}>
          <div className="list-card">
            <h2 className="list-card-title">{categories[i]}</h2>
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
    allMdx {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
  }
`

export default CategoriesPage

export const Head = () => <Seo title="Categories" />
