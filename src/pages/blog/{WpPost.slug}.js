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
              <Link
                className='other-post'
                key={post.slug}
                to={`/blog/${slug}`}>
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
                  <span className='button button--secondary'>
                    Poznaj więcej szczegółów
                  </span>
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
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .other-post {
    padding: 20px 30px 16px;
    background-color: var(--color-light-gray);
    aspect-ratio: 1/1;
  
    > article {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
      height: 100%;
    }

    &:hover .button--secondary:after, &:focus-visible .button--secondary:after {
      transform: scaleX(1);
    }
    &:focus {
      outline: none;
    }
    &:focus-visible {
      outline: 2px solid var(--color-blue);
    }
  }

  .post-category {
    color: var(--color-yellow);
    font-weight: bold;
    font-size: 12px;
    display: inline-block;
  }

  .post-excerpt {
    margin: 10px 0 6px;
  }

  .button {
    margin-top: auto;
    position: relative;
    font-size: 12px;
    font-weight: bold;
    padding: 4px;
    margin-left: -4px; 
    display: inline-block;
  }

  .button--secondary:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 4px;
    width: calc(100% - 8px);
    height: 2px;
    background-color: var(--color-blue);
    transition: transform .15s ease-out;
    transform-origin: left center;
    transform: scaleX(0.5);
    &:hover:after {
      transform: scaleX(1);
    }
  }

  .
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
