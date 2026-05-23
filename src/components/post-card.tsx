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
    <div className="card">
      <h2>{frontmatter.title}</h2>
      <hr />
      <TypedMDXProvider components={components}>
        {children}
      </TypedMDXProvider>
    </div>
  )
}

export default PostCard
