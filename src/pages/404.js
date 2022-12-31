import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero-homepage'

export function Head({ data }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
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
    wpPage(id: { eq: "cG9zdDo0OQ==" }) {
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
