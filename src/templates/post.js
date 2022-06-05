import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import PostCard from "../components/post_card"
import Utterances from "../components/utterances"

const PostTemplate = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <PostCard frontmatter={data.mdx.frontmatter}>
        {data.mdx.body}
      </PostCard>
      <Utterances repo="thereisnotruth/thereisnotruth.github.io" theme="github-light" />
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    mdx( slug: { eq: $slug } ) {
      body
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
      }
    }
  }
`
export default PostTemplate
