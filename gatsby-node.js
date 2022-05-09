const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter}) => {
  const { createPage } = actions

  const query = await graphql(`
    query PostQuery {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          id
          slug
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

  const postTemplate = path.resolve(`src/templates/post.js`);
  const posts = query.data.allMdx.nodes;

  posts.forEach((node) => { 
    const path = `${node.slug}`;

    createPage({
      path,
      component: postTemplate,
      context: {
        slug: node.slug
      }
    })
  });
}
