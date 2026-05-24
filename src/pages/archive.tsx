import * as React from "react"
import { Link, graphql } from "gatsby"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/card.css"
import "../styles/archive.css"

type ArchiveNode = {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    idx: string
  }
}

type ArchivePageData = {
  allMdx: {
    nodes: ArchiveNode[]
  }
}

type ArchiveDateMap = Record<string, Record<string, Record<string, ArchiveNode[]>>>

const sortDateKeysDesc = (keys: string[]) =>
  [...keys].sort((a, b) => Number(b) - Number(a))

const sortArchivePostsDesc = (posts: ArchiveNode[]) =>
  [...posts].sort((a, b) => {
    const dateCompare = b.frontmatter.date.localeCompare(a.frontmatter.date)

    if (dateCompare !== 0) {
      return dateCompare
    }

    return Number(b.frontmatter.idx) - Number(a.frontmatter.idx)
  })

const ArchivePage = ({ data }: PageProps<ArchivePageData>) => {
  const date: ArchiveDateMap = {}
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                  "Aug", "Sep", "Oct", "Nov", "Dec"]
  sortArchivePostsDesc(data.allMdx.nodes).forEach((node) => {
    const [year, month, day] = node.frontmatter.date.split(".")

    if (date[year] === undefined) {
      date[year] = {}
      date[year][month] = {}
      date[year][month][day] = [node]
    } else if (date[year][month] === undefined) {
      date[year][month] = {}
      date[year][month][day] = [node]
    } else if (date[year][month][day] === undefined) {
      date[year][month][day] = [node]
    } else {
      date[year][month][day].push(node)
    }
  })
  const showDate = () => {
    const ret: React.ReactNode[] = []

    for (const year of sortDateKeysDesc(Object.keys(date))) {
      ret.push(
        <div
          className="archive-year"
          key={year}
        >
          {year}
        </div>)

      for (const month of sortDateKeysDesc(Object.keys(date[year]))) {
        ret.push(
        <div
          className="archive-month"
          key={year.concat(month)}
        >
          {months[Number(month) - 1]}
        </div>)
        for (const day of sortDateKeysDesc(Object.keys(date[year][month]))) {
          ret.push(
          <div
            className="archive-day"
            key={year.concat(month).concat(day)}
          >
            {day}
          </div>)

          sortArchivePostsDesc(date[year][month][day]).forEach((node, index) => {
            if (index !== 0) {
              ret.push(
              <div
                className="archive-day"
                key={year.concat(month).concat(day).concat(String(index))}
              />)
            }
            ret.push(
              <Link
                key={year.concat(month).concat(day).concat(String(index)).concat(node.frontmatter.idx)}
                className="link"
                to={node.fields.slug}>
                <div
                  className="archive-title"
                >
                  {node.frontmatter.title}
                </div>
              </Link>)
          })
        }
      }
    }
    return ret
  }
  return (
    <Layout>
      <div className="card page-card">
        <h1>Archive</h1>
        <div className="archive">
          {showDate()}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          idx
        }
      }
    }
  }
`
export default ArchivePage

export const Head = () => <Seo title="Archive" />
