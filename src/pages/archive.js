import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import "../styles/card.css"
import "../styles/archive.css"

const ArchivePage = ({ data }) => {
  const date = {};
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                  "Aug", "Sep", "Oct", "Nov", "Dec"];
  data.allMdx.nodes.map((node) => {
    
    const year = node.frontmatter.date.split('.')[0];
    const month = node.frontmatter.date.split('.')[1];
    const day = node.frontmatter.date.split('.')[2];
    if (date[year] === undefined) {
      date[year] = {};
      date[year][month] = {};
      date[year][month][day] = [node];
    } else if (date[year][month] === undefined) {
      date[year][month] = {};
      date[year][month][day] = [node];
    } else if (date[year][month][day] === undefined) {
      date[year][month][day] = [node];
    } else {
      date[year][month][day].push(node);
    }
  });
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
          key={year.concat(month)}
        >
          {months[month - 1]}
        </div>);
        for (let day in date[year][month]) {
          ret.push(
		  <div
            className="archive-day"
            key={year.concat(month).concat(day)}
          >
            {day}
          </div>)
          
          date[year][month][day].map((node, index) => {
            if(index !== 0) {
              ret.push(
              <div
                className="archive-day"
                key={year.concat(month).concat(day).concat(index)}
              />)
            }
            ret.push(
              <Link
                className="link"
                to={`../${node.slug}`}>
                <div
                  className="archive-title"
                  key={year.concat(month).concat(day).concat(index).concat(node.frontmatter.idx)}
                >
                  {node.frontmatter.title}
                </div>
              </Link>)
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
        <div className="archive">
          {showDate()}
        </div>
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
