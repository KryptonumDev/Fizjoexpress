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

    createRedirect({
        fromPath: `/jaw/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/flyash/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/mobile/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/pic/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/kontakt/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/tag/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/themes/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/.well-known/*`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/ads.txt`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/apple-app-site-association`,
        toPath: `/`,
        statusCode: 410,
    })

    createRedirect({
        fromPath: `/apple-app-site-association/*`,
        toPath: `/`,
        statusCode: 410,
    })
}