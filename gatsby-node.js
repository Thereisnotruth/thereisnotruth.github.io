const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
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

exports.createPages = async ({ graphql, actions, reporter}) => {
  const { createPage } = actions

  const query = await graphql(`
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
  `);
  if (query.errors) {
    reporter.panicOnBuild(`Error`);
    return;
  }

  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const postTemplate = path.resolve(`src/templates/post.js`);
  const posts = query.data.allMdx.nodes;
  const categories = {};


  posts.forEach((node) => { 
    const path = `${node.fields.slug}`;

    createPage({
      path,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id
      }
    })

    if (categories[node.frontmatter.category] === undefined) {
      categories[node.frontmatter.category] = [node];
    } else {
      categories[node.frontmatter.category].push(node);
    }
  });

  for (let category in categories) {
    const path = `categories/${category}`;
    createPage({
      path,
      component: categoryTemplate,
      context: {
        category: category
      }
    })
  }
}
