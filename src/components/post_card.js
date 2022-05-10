import * as React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"


import "../styles/post_card.css"

const PostCard = ({ children, frontmatter, size }) => {
  return (
    <div className="post-card">
      <h2>{frontmatter.title}</h2>
      <hr />
      <MDXRenderer>
        {children}
      </MDXRenderer>
    </div>
  )
}

PostCard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostCard

