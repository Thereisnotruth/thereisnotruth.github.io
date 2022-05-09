import * as React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"


import "../styles/list_card.css"

const ListCard = ({ children, frontmatter, size }) => {
  const content = children.split("---")[2].replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '');
  return (
    <div className="list-card" style={{height: size}}>
      <div className="list-card-title">
        {frontmatter.title}
      </div>
      <div className="list-card-content">
        {content}
      </div>
      <div className="list-card-date">
        {frontmatter.date}
      </div>
    </div>
  )
}

ListCard.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.node.isRequired,
}

export default ListCard

