import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import "../styles/card.css"
import "../styles/archive.css"

const ArchivePage = ({ data }) => {
  const date = {};
  data.allMdx.nodes.map((node) => {
    const year = node.frontmatter.date.split('.')[0];
    const month = node.frontmatter.date.split('.')[1];
    const day = node.frontmatter.date.split('.')[2];
    if (date[year] === undefined) {
      date[year] = {};
      date[year][month] = {};
      date[year][month][day] = [node];
    } else if (date[year][month] == undefined) {
      date[year][month] = {};
      date[year][month][day] = [node];
    } else if (date[year][month][day] === undefined) {
      date[year][month][day] = [node];
    } else {
      date[year][month][day].push(node);
    }
  })
  console.log(date);
  const showDate = () => {
    const ret = [];
    
    for (let year in date) { 
      ret.push(
        <div
          className="archive-year"
          key={year}
        >
          {year}
        </div>);
      
      for (let month in date[year]) {
        ret.push(
        <div
          className="archive-month"
          key={month}
        >
          {month}
        </div>);
        
        for (let day in date[year][month]) {
          ret.push(<div
            className="archive-day"
            key={day}
          >
            {day}
          </div>)
          
          date[year][month][day].map((node) => {
            ret.push(
              <div
                className="archive-title"
                key={node.frontmatter.idx}
              >
                {node.frontmatter.title}
              </div>)
          });
        }
      }
    }
    return ret;
  }
  return (
    <Layout>
      <div className="card">
        <h2>Archive</h2>
        {showDate()}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___idx, order: DESC}) {
      nodes {
        id
        slug
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
