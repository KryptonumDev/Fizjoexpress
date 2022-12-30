import { graphql } from 'gatsby'
import React from 'react'
import Archive from './../components/blog-archive'
import Hero from './../components/blog-hero'

const CategoryPage = ({ pageContext, location, data: { wpCategory, wpPage, categories, posts } }) => {
  const url = pageContext.url ? pageContext.url : '/blog/'
  return (
    <main>
      <Hero data={{
        header: wpPage.blog.informacjeNaStronieBloga.malyNaglowekNadTytulemSekcji,
        title: wpPage.blog.informacjeNaStronieBloga.tytulSekcji,
        noResults: wpPage.blog.informacjeNaStronieBloga.tekstDoWyswietleniaGdyBrakWynikow,
        text: wpPage.blog.informacjeNaStronieBloga.akapitTekstuWSekcjiPowitalnej
      }} />
      <Archive url={url} location={location} categories={categories.nodes} posts={posts.nodes} category={wpCategory.name} />
    </main>
  )
}

export default CategoryPage

export const CategoryPageQuery = graphql`
  query($id: String!, $slug: String!) {
    wpCategory(id: { eq: $id }) {
      name
    }
    categories: allWpCategory(
      filter: { id: { ne: "dGVybTox" } }
    ) {
      nodes {
        name
        slug
        id
      }
    }
    posts: allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}) {
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
    wpPage(id: { eq: "cG9zdDozOA==" }){
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
