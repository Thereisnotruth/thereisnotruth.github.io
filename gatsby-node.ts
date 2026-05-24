import path from "path"
import type { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"

type PostNode = {
  id: string
  internal: {
    contentFilePath: string
  }
  fields: {
    slug: string
  }
  frontmatter: {
    category: string
  }
}

type PostQueryResult = {
  allMdx: {
    nodes: PostNode[]
  }
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter}) => {
  const { createPage } = actions

  const query = await graphql<PostQueryResult>(`
    query PostQuery {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
          frontmatter {
            date
            category
            title
          }
        }
      }
    }
  `)
  if (query.errors) {
    reporter.panicOnBuild(`Error`)
    return
  }

  const categoryTemplate = path.resolve(`src/templates/category.tsx`)
  const postTemplate = path.resolve(`src/templates/post.tsx`)
  const posts = query.data?.allMdx.nodes ?? []
  const categories: Record<string, PostNode[]> = {}


  posts.forEach((node) => { 
    const path = `${node.fields.slug}`

    createPage({
      path,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id
      }
    })

    if (categories[node.frontmatter.category] === undefined) {
      categories[node.frontmatter.category] = [node]
    } else {
      categories[node.frontmatter.category].push(node)
    }
  })

  for (const category in categories) {
    const path = `categories/${category}`
    createPage({
      path,
      component: categoryTemplate,
      context: {
        category: category
      }
    })
  }
}
