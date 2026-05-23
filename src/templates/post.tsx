import * as React from "react"
import { graphql } from "gatsby"
import type { HeadProps, PageProps } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"
import Utterances from "../components/utterances"

type PostTemplateData = {
  mdx: {
    frontmatter: {
      title: string
      date: string
      category: string
    }
  }
}

const PostTemplate = ({ data, children }: PageProps<PostTemplateData>) => {
  return (
    <Layout>
      <PostCard frontmatter={data.mdx.frontmatter}>
        {children}
      </PostCard>
      <Utterances repo="thereisnotruth/thereisnotruth.github.io" theme="github-light"/>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String!) {
    mdx( id: { eq: $id } ) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
      }
    }
  }
`
export default PostTemplate

export const Head = ({ data }: HeadProps<PostTemplateData>) => (
  <Seo title={data.mdx.frontmatter.title} />
)
