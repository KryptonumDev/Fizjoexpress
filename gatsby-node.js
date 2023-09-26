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

exports.onPostBuild = async ({ graphql }) => {
    const { data: { wpPage: { redirects: { redirects } } } } = await graphql(`
    query{
        wpPage(id: {eq: "cG9zdDo1Mg=="}) {
          redirects {
            redirects {
              to
              statusCode
              from
            }
          }
        }
      }
    `)
  
    // Сформируйте конфигурацию редиректов в формате TOML
    const redirectConfig = redirects.map(redirect => (
      `[[redirects]]
        from = "${redirect.from}"
        to = "${redirect.to}"
        status = ${redirect.statusCode}
        force = ${redirect.force || false}`
    ));
  
    // Запишите конфигурацию редиректов в netlify.toml
    fs.writeFileSync('netlify.toml', redirectConfig.join('\n'));
  };