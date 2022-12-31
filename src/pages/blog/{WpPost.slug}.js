import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../atoms/container'
import { Aside } from '../../components/aside'
import SocialMediaIcons from '../../components/social-media-icons'
import TwoColumnFlexBlogPost from '../../components/two-column-flex-blog-post'
import quoteBefore from '../../static/quote-befre.svg'
import quoteAfter from '../../static/quote.svg'

const BlogPost = ({ data: { wpPost, otherPosts, global } }) => {
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
    globalneDaneIUstawienia: { globalneGrafiki }
  } = global

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
        <Aside posts={postsToLink} />
        <SocialWrapper>
          <SocialMediaIcons
            text='Udostępnij'
            sectionVariant='light'
            data={globalneGrafiki}
          />
        </SocialWrapper>
      </MainWrapper>
    </>
  )
}

export default BlogPost

export const SocialWrapper = styled.div`
  margin-left: 100px;
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`

const MainWrapper = styled(Container)`
  max-width: 1366px;
  margin-top: 40px;
  padding-top: 60px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 2fr 400px;
  grid-column-gap: clamp(80px, 8.2vw, 112px);
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 2fr 300px;
  }
  @media (max-width: 900px) {
    grid-column-gap: clamp(40px, 6.2vw, 72px);
  }
`

export const ContentWrapper = styled.div`
  max-width: 608px;
  border-bottom: 1px solid var(--color-darker-light-gray);
  padding-bottom: 60px;
  margin-left: 100px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  > * {
    max-width: 100%;
  }

  figure img {
    max-width: 100%;
  }

  h2,
  h3,
  h4,
  p,
  span,
  blockquote {
    color: var(--color-blue);
  }

  h2,
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: ${35 / 18};
    + p,
    + ul,
    + ol {
      margin-top: 20px;
    }
  }

  p,
  ul,
  ol {
    font-size: 12px;
    line-height: ${22 / 12};
  }

  ul > li,
  ol > li {
    list-style-type: auto;
    list-style-position: inside;
  }

  ul > li {
    list-style-type: disc;
  }

  p + .wp-block-buttons,
  .wp-block-buttons + p,
  h2 + .wp-block-buttons,
  .wp-block-buttons + h2,
  h3 + .wp-block-buttons,
  .wp-block-buttons + h3,
  iframe + .wp-block-buttons,
  .wp-block-buttons + iframe,
  figure + .wp-block-buttons,
  .wp-block-buttons + figure,
  ol + h2,
  ol + h3,
  ol + iframe,
  ol + figure,
  ol + p,
  ol + h2,
  ol + h3,
  ol + figure,
  ol + iframe,
  ul + h2,
  h2 + h2,
  h3 + h2,
  p + h2,
  ul + h3,
  h2 + h3,
  h3 + h3,
  p + h3,
  ul + iframe,
  h2 + iframe,
  h3 + iframe,
  p + iframe,
  ul + figure,
  h2 + figure,
  h3 + figure,
  p + figure,
  h2 + iframe,
  h3 + iframe,
  h2 + ol,
  h3 + ol,
  iframe + ol,
  figure + ol {
    margin-top: 30px;
  }

  h2 + iframe,
  iframe + h2,
  h3 + iframe,
  iframe + h3,
  p + iframe,
  iframe + p,
  p + figure,
  figure + p,
  h2 + figure,
  figure + h2,
  h3 + figure,
  figure + h3,
  h4 + figure,
  figure + h4 {
    margin-top: 40px;
  }

  p + p,
  p + ul,
  p + ol {
    margin-top: 10px;
  }

  blockquote {
    display: flex;
    flex-direction: column;
    background-color: var(--color-light-gray);
    padding: 70px 60px 36px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    position: relative;

    > p {
      font-size: 18px;
      line-height: ${30 / 18};
      font-weight: 600;
      color: var(--color-blue);
      font-style: italic;
      z-index: 0;
      --width: 59px;
      --height: 50px;
      &:after,
      &:before {
        position: absolute;
        width: var(--width);
        height: var(--height);
        z-index: -1;
      }
      &:after {
        content: url(${quoteAfter});
        right: var(--width);
        bottom: var(--height);
      }
      &:before {
        content: url(${quoteBefore});
        left: var(--width);
        top: var(--height);
      }
    }

    > cite {
      font-size: 12px;
      line-height: ${30 / 12};
      font-style: normal;
    }
  }

  blockquote + *,
  * + blockquote {
    margin-top: 40px;
  }
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
    otherPosts: allWpPost(filter: { id: { ne: $id } }, limit: 2) {
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
    global: wpPage(id: { eq: "cG9zdDo1Mg==" }) {
      globalneDaneIUstawienia {
        globalneGrafiki {
          socialMedia {
            linkDoSocialMedia
            ikonaSocialMedia {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
