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

  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const postTemplate = path.resolve(`src/templates/post.js`);
  const posts = query.data.allMdx.nodes;
  const categories = {};


  posts.forEach((node) => { 
    const path = `${node.slug}`;

    createPage({
      path,
      component: postTemplate,
      context: {
        slug: node.slug
      }
    })

    if (categories[node.frontmatter.category] === undefined) {
      categories[node.frontmatter.category] = [node];
    } else {
      categories[node.frontmatter.category].push(node);
    }
  });

  console.log(categories)
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
