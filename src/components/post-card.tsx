import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import CodeBlock from "./code-block"

import "../styles/card.css"

const components = {
  code: CodeBlock
}
const TypedMDXProvider = MDXProvider as React.ComponentType<{
  children: React.ReactNode
  components: typeof components
}>

type PostCardProps = {
  children: React.ReactNode
  frontmatter: {
    title: string
    date: string
    category: string
  }
}

const PostCard = ({ children, frontmatter }: PostCardProps) => {
  return (
    <article className="post-card">
      <div className="post-card-nav">
        <Link className="post-back-link" to="/">
          Back to feed
        </Link>
      </div>
      <header className="post-card-header">
        <div className="post-card-meta" aria-label="Post metadata">
          <span>{frontmatter.category}</span>
          <span aria-hidden="true" className="post-card-meta-dot" />
          <time>{frontmatter.date}</time>
        </div>
        <h1>{frontmatter.title}</h1>
      </header>
      <div className="post-card-body">
        <div className="post-card-content">
          <TypedMDXProvider components={components}>
            {children}
          </TypedMDXProvider>
        </div>
      </div>
    </article>
  )
}

export default PostCard
