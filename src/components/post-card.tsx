import * as React from "react"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./code-block"

import "../styles/card.css"

const components = {
  code: CodeBlock
};
const TypedMDXProvider = MDXProvider as React.ComponentType<{
  children: React.ReactNode
  components: typeof components
}>

type PostCardProps = {
  children: React.ReactNode
  frontmatter: {
    title: string
  }
}

const PostCard = ({ children, frontmatter }: PostCardProps) => {
  return (
    <article className="post-card">
      <header className="post-card-header">
        <h1>{frontmatter.title}</h1>
      </header>
      <hr />
      <div className="post-card-body">
        <TypedMDXProvider components={components}>
          {children}
        </TypedMDXProvider>
      </div>
    </article>
  )
}

export default PostCard
