import { graphql, Link } from 'gatsby'
import React from 'react'
import Archive from '../../components/blog-archive'
import Hero from '../../components/blog-hero'

const BlogPage = ({ data: { wpPage, categories, posts } }) => {
  return (
    <main>
      <Hero data={{
        header: wpPage.blog.informacjeNaStronieBloga.malyNaglowekNadTytulemSekcji,
        title: wpPage.blog.informacjeNaStronieBloga.tytulSekcji,
        noResults: wpPage.blog.informacjeNaStronieBloga.tekstDoWyswietleniaGdyBrakWynikow,
        text: wpPage.blog.informacjeNaStronieBloga.akapitTekstuWSekcjiPowitalnej
      }} />
      <Archive categories={categories.nodes} posts={posts.nodes} />
    </main>
  )
}

export default BlogPage

export const blogQuery = graphql`
  query {
    categories: allWpCategory(
      filter: { id: { ne: "dGVybTox" } }
    ) {
      nodes {
        name
        slug
        id
      }
    }
    posts: allWpPost {
      nodes {
        title
        slug
        id
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
