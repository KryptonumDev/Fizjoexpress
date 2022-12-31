import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Seo from '../layout/seo'
import Archive from './../components/blog-archive'
import Hero from './../components/blog-hero'

export function Head({
  data: {
    wpPage: { seo }
  }
}) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Seo seo={seo} />
    </>
  )
}

const CategoryPage = ({
  pageContext,
  location,
  data: { wpCategory, wpPage, categories, posts }
}) => {
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
        url={pageContext.url}
        location={location}
        categories={categories.nodes}
        posts={posts.nodes}
        category={wpCategory.name}
      />
    </main>
  )
}

export default CategoryPage

export const CategoryPageQuery = graphql`
  query ($id: String!, $slug: String!) {
    wpCategory(id: { eq: $id }) {
      name
    }
    categories: allWpCategory(filter: { id: { ne: "dGVybTox" } }) {
      nodes {
        name
        slug
        id
      }
    }
    posts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
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
