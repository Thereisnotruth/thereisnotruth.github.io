const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actionsi, reporter}) => {
  const { createPage } = actions

  const query = await graphql(`
    {
      allMdx(
        filter: { frontmatter: }
      )
    }
  `);
  if (query.errors) {
    reporter.panicOnBuild(`Error`);
    return;
  }

  const postTemplate = path.resolve(`src/templates/post.js`);
  const posts = query.data.allMdx.nodes;
}
