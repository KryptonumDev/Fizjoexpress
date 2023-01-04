import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero-homepage'
import Seo from '../layout/seo'

export function Head({ data: { allWpAuthor, wpPage: { seo } } }) {

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Seo authors={allWpAuthor} seo={seo} />
    </>
  )
}

const ErrorPage = ({
  data: {
    wpPage: {
      error: { heroErrorpage }
    }
  }
}) => {
  return (
    <main id='content'>
      <Hero
        colorVariant='dark'
        headerVariant='bigger'
        data={{
          text: heroErrorpage.malyNaglowekNadTytulemSekcji,
          heroTitle: heroErrorpage.tytulSekcji,
          heroText: heroErrorpage.tekstPodTytulem,
          buttonLink: heroErrorpage.przyciskZLinkiem,
          zdjecieWTle: heroErrorpage.grafikaWTle
        }}
      />
    </main>
  )
}

export default ErrorPage

export const errorQuery = graphql`
  query {
    allWpAuthor {
      nodes {
        name
        dodatkowePolaAutora {
          wyksztalcenieAutora
          authorSocialMediaLinks {
            socialMediaLink
          }
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo0OQ==" }) {
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
      error {
        heroErrorpage {
          tytulSekcji
          tekstPodTytulem
          przyciskZLinkiem {
            url
            title
            target
          }
          malyNaglowekNadTytulemSekcji
          grafikaWTle {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
