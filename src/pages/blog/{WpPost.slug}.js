import { graphql } from 'gatsby'
import React from 'react'
import TwoColumnFlex from '../../components/two-column-flex'
import TwoColumnFlexBlogPost from '../../components/two-column-flex-blog-post'
import { TwoColumnFlexVariants } from '../../constants/two-column-flex-variants'

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
    <main>
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
    </main>
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
