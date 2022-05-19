import * as React from "react"
import PropTypes from "prop-types"

import "../styles/list_card.css"

const ListCard = ({ children, frontmatter, size }) => {
  return (
    <div className="list-card" style={{height: size}}>
      <h2>
        {frontmatter.title}
      </h2>
      <div className="list-card-content">
        {children}
      </div>
      <div className="list-card-date">
        {frontmatter.date}
      </div>
      <div className="list-card-category">
        {frontmatter.category}
      </div>
    </div>
  )
}

ListCard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ListCard

