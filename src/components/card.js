import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"


import "../styles/card.css"

const Card = ({ children, frontmatter, size }) => {
  console.log(frontmatter)
  return (
    <div className="card" style={{height: size}}>
      <MDXRenderer>
        {children}
      </MDXRenderer>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.node.isRequired,
}

export default Card

