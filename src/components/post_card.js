import * as React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./code_block"

import "../styles/card.css"

const components = {
  code: CodeBlock
};

const PostCard = ({ children, frontmatter }) => {
  return (
    <div className="card">
      <h2>{frontmatter.title}</h2>
      <hr />
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

PostCard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostCard

