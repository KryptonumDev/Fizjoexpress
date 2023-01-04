import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Archive from '../../components/blog-archive'
import Hero from '../../components/blog-hero'
import Seo from '../../layout/seo'

export function Head({
  data: {
    wpPage: { slug, seo }
  }
}) {
  let ldJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Fizjoexpress",
        "item": 'https://fizjoexpress.pl'
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": 'https://fizjoexpress.pl/blog/'
      }
    ]
  };
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(ldJson)}
      </script>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Seo slug={'/' + slug + '/'} seo={seo} />
    </>
  )
}

const BlogPage = ({ location, data: { wpPage, categories, posts } }) => {
  return (
    <main id='content'>
      <Hero
        data={{
          header:
            wpPage.blog.informacjeNaStronieBloga.malyNaglowekNadTytulemSekcji,
          title: wpPage.blog.informacjeNaStronieBloga.tytulSekcji,
          text: wpPage.blog.informacjeNaStronieBloga
            .akapitTekstuWSekcjiPowitalnej
        }}
      />
      <Archive
        noResults={
          wpPage.blog.informacjeNaStronieBloga.tekstDoWyswietleniaGdyBrakWynikow
        }
        url='/blog/'
        location={location}
        categories={categories.nodes}
        posts={posts.nodes}
      />
    </main>
  )
}

export default BlogPage

export const blogQuery = graphql`
  query {
    categories: allWpCategory(filter: { id: { ne: "dGVybTox" } }) {
      nodes {
        name
        slug
        id
      }
    }
    posts: allWpPost(sort: {date: DESC}) {
      nodes {
        title
        slug
        id
        singlePostData {
          szablonArtykuluDodatkoweDane {
            singlePostObrazekWyrozniajacyNaListinguBloga {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        date(formatString: "DD.MM.YYYY")
        excerpt
      }
    }
    wpPage(id: { eq: "cG9zdDozOA==" }) {
      slug
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      blog {
        informacjeNaStronieBloga {
          tytulSekcji
          tekstDoWyswietleniaGdyBrakWynikow
          malyNaglowekNadTytulemSekcji
          akapitTekstuWSekcjiPowitalnej
        }
      }
    }
  }
`
