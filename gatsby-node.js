const slugify = require("slugify")

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetPosts {
      allBloggerPost {
        nodes {
          labels
        }
      }
    }
  `)

  result.data.allBloggerPost.nodes.forEach(blog => {
    if (blog.labels) {
      blog.labels.forEach(label => {
        const tagSlug = slugify(label, { lower: true })
        createPage({
          path: `/${tagSlug}`,
          component: path.resolve(`src/templates/tag-template.js`),
          context: {
            tag: tagSlug,
          },
        })
      })
    }
  })
}
