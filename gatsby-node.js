const fs = require('fs')
const { resolve } = require('path')

exports.createPages = async ({
    graphql,
    actions: { createPage, createRedirect },
}) => {


    const { data: { categories: { nodes: categoryNodes } } } = await graphql(`
    query{
        categories: allWpCategory( filter: { id: { ne: "dGVybTox" } } ) {
            nodes {
                name
                slug
                id
            }
        }
    }
    `)

    categoryNodes.forEach(({ slug, name, id }) => {
        createPage({
            path: '/blog/' + slug + '/',
            component: resolve('src/templates/blog-category.js'),
            context: {
                id: id,
                slug,
                url: '/blog/' + slug + '/',
                title: name
            },
        });
    });
}