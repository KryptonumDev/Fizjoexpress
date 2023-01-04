import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Aside } from '../components/aside'
import SocialMediaIcons from '../components/social-media-icons'
import Seo from '../layout/seo'
import { ContentWrapper, SocialWrapper } from './blog/{WpPost.slug}'

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
        "name": "Polityka prywatności",
        "item": 'https://fizjoexpress.pl/polityka-prywatnosci/'
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

const PolitykaPage = ({
  data: {
    global,
    otherPosts,
    wpPage: {
      politykaPrywatnosci: { tresciPolitykiPrywatnosci }
    }
  }
}) => {
  return (
    <main id='content'>
      <MainWrapper>
        <div className='content'>
          <span className='small-header'>
            {tresciPolitykiPrywatnosci.malyNaglowekNadTytulem}
          </span>
          <h1 className='sub-title'>{tresciPolitykiPrywatnosci.tytulSekcji}</h1>
          <ContentWrapper>
            <div
              dangerouslySetInnerHTML={{
                __html: tresciPolitykiPrywatnosci.trescPolityki
              }}
            />
          </ContentWrapper>
        </div>
        <Aside posts={otherPosts.nodes} />
        <SocialWrapper>
          <SocialMediaIcons
            text='Udostępnij'
            sectionVariant='light'
            data={global.globalneDaneIUstawienia.globalneGrafiki}
          />
        </SocialWrapper>
      </MainWrapper>
    </main>
  )
}

export default PolitykaPage

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

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'content'
      'share'
      'aside';

    .content {
      grid-area: 'content';
    }
  }

  .small-header,
  .sub-title {
    margin-left: 100px;

    @media (max-width: 1200px) {
      margin-left: 0;
    }
  }
  .sub-title {
    margin-bottom: 30px;
    margin-top: 10px;
  }
`

export const politykasQuery = graphql`
  query {
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
    wpPage(id: { eq: "cG9zdDo0NA==" }) {
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
      politykaPrywatnosci {
        tresciPolitykiPrywatnosci {
          malyNaglowekNadTytulem
          tytulSekcji
          trescPolityki
        }
      }
    }
    otherPosts: allWpPost(limit: 2) {
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
