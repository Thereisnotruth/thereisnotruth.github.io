import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"


import "../styles/card.css"

const Card = ({ children, size }) => {
  return (
    <div className="card" style={{width:size.width, height:size.height}}>
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

