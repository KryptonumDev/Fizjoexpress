import { graphql } from 'gatsby'
import React from 'react'
import TwoColumnFlexBlogPost from '../../components/two-column-flex-blog-post'

const BlogPost = ({ data: { wpPost } }) => {
  const {
    title,
    terms: { nodes: taxonomies },
    date,
    excerpt,
    seo,
    singlePostData: articleImages
  } = wpPost
  const {
    obrazekWyrozniajacyNaStroneArtykulu: featuredImage,
    singlePostObrazekWyrozniajacyOgImage: ogImage
  } = articleImages.szablonArtykuluDodatkoweDane

  const authors = taxonomies.filter(
    (el) => el.taxonomyName === 'autor'
  )
  const categories = taxonomies.filter(
    (el) => el.taxonomyName === 'category'
  )

  return (
    <>
      <header>
        <TwoColumnFlexBlogPost
          data={{
            categories,
            title,
            authors,
            date,
            text: excerpt,
            image: featuredImage
          }}
        />
      </header>
      <main
        id='blog-content'
        style={{ marginTop: '300px', height: '200vh' }}>
        Content here
      </main>
    </>
  )
}

export default BlogPost

export const blogPostQuery = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      title
      terms {
        nodes {
          name
          taxonomyName
          slug
        }
      }
      date(formatString: "D.MM.YYYY")
      excerpt
      seo {
        breadcrumbs {
          text
          url
        }
        canonical
        fullHead
      }
      singlePostData {
        szablonArtykuluDodatkoweDane {
          obrazekWyrozniajacyNaStroneArtykulu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          singlePostObrazekWyrozniajacyNaListinguBloga {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          singlePostObrazekWyrozniajacyOgImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      content
    }
  }
`
