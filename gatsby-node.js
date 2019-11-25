const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleShowTemplate = path.resolve(`src/templates/article-show.js`)
  return graphql(
    `
      query ArticlesQuery {
        allSanityPost {
          edges {
            node {
              _createdAt
              id
              slug {
                current
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allSanityPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/stories/${edge.node.slug.current}`,
        component: articleShowTemplate,
        context: { articleId: edge.node.id },
      })
    })
  })
}
