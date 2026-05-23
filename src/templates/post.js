import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post_card"
import Utterances from "../components/utterances"

const PostTemplate = ({ data, children }) => {
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
