/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({graphql,actions}) => {
    const { createPage } = actions
    const blogPost = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
        {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then((result) => {
        result.data.allContentfulBlogPost.edges.forEach((item) => {
            createPage({
                path: `/blog/${item.node.slug}`,
                component: blogPost,
                context: {
                    slug: item.node.slug
                }
            })
        })
    })
}
