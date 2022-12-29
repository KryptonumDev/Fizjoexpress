import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../atoms/container'
import TwoColumnFlexBlogPost from '../../components/two-column-flex-blog-post'
import { textParser } from '../../helpers/text-parser'

const BlogPost = ({ data: { wpPost, otherPosts } }) => {
  const {
    title,
    terms: { nodes: taxonomies },
    date,
    excerpt,
    content,
    seo,
    singlePostData: articleImages
  } = wpPost
  const {
    obrazekWyrozniajacyNaStroneArtykulu: featuredImage,
    singlePostObrazekWyrozniajacyOgImage: ogImage
  } = articleImages.szablonArtykuluDodatkoweDane

  const authors = taxonomies
    .filter((el) => el.taxonomyName === 'autor')
    .slice(0, 2)
  const categories = taxonomies
    .filter((el) => el.taxonomyName === 'category')
    .slice(0, 2)

  const postsToLink = otherPosts.nodes

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
      <MainWrapper id='blog-content'>
        <ContentWrapper
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        <AsideWrapper>
          {postsToLink.map((post) => {
            const {
              title,
              slug,
              excerpt,
              terms: { nodes: categories }
            } = post

            const category = categories.filter(
              (category) => category.name
            )[0]
            return (
              <Link key={post.slug} to={`/blog/${slug}`}>
                <article>
                  <span className='post-category'>
                    {category.name}
                  </span>
                  <h3 className='post-header big-text'>
                    {title}
                  </h3>
                  <div
                    className='post-excerpt'
                    dangerouslySetInnerHTML={{
                      __html: textParser(excerpt)
                    }}
                  />
                  <button>Poznaj więcej szczegółów</button>
                </article>
              </Link>
            )
          })}
        </AsideWrapper>
      </MainWrapper>
    </>
  )
}

export default BlogPost

const CategoryLink = styled(Link)``

const MainWrapper = styled(Container)`
  max-width: 1366px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: clamp(80px, 8.2vw, 112px);
  position: relative;
`

const ContentWrapper = styled.div`
  margin-left: 100px;
`
const AsideWrapper = styled.aside`
  border: 2px solid;
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
`

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
      content
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
    otherPosts: allWpPost(
      filter: { id: { ne: $id } }
      limit: 2
    ) {
      nodes {
        terms {
          nodes {
            ... on WpCategory {
              name
              slug
            }
          }
        }
        title
        slug
        excerpt
      }
    }
  }
`
