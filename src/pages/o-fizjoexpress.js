import { graphql } from 'gatsby'
import * as React from 'react'
import Hero from '../components/hero-homepage'
import Process from '../components/process-homepage'
import ServicesGrid from '../components/services-grid'
import TwoColumnFlex from '../components/two-column-flex'

const AboutPage = ({
  data: {
    wpPage: {
      oFizjoexpress: {
        aboutSekcjaPowitalna,
        sekcjaMisjaFizjoexpress
      }
    },
    global: { globalneDaneIUstawienia }
  }
}) => {
  return (
    <main>
      <Hero
        colorVariant='light'
        headerVariant='smaller'
        data={{
          heroTitle: aboutSekcjaPowitalna.tytulSekcji,
          heroText: aboutSekcjaPowitalna.tekstPodTytulem,
          text: aboutSekcjaPowitalna.malyNaglowekNadTytulemSekcji,
          buttonLink: aboutSekcjaPowitalna.przyciskZLinkiem,
          zdjecieWTle:
            aboutSekcjaPowitalna.aboutHeroBgImage,
          featuredTextOverBg:
            aboutSekcjaPowitalna.tekstWSzarymProstokacie
        }}
        socialMedia={
          globalneDaneIUstawienia.globalneGrafiki
        }
      />
      <TwoColumnFlex
        data={{
          header: sekcjaMisjaFizjoexpress.aboutSmallHeader,
          title: sekcjaMisjaFizjoexpress.aboutTitle,
          text: sekcjaMisjaFizjoexpress.aboutText,
          image: sekcjaMisjaFizjoexpress.aboutVerticalImage,
          link: sekcjaMisjaFizjoexpress.buttonWithCtaLink
        }}
      />
    </main>
  )
}

export default AboutPage

export const query = graphql`
  query aboutQuery {
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
    wpPage(id: { eq: "cG9zdDoyOQ==" }) {
      oFizjoexpress {
        aboutSekcjaPowitalna {
          malyNaglowekNadTytulemSekcji
          tytulSekcji
          tekstPodTytulem
          tekstWSzarymProstokacie
          przyciskZLinkiem {
            target
            title
            url
          }
          aboutHeroBgImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaMisjaFizjoexpress {
          aboutSmallHeader
          aboutText
          aboutTitle
          aboutVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          buttonWithCtaLink {
            target
            title
            url
          }
        }
      }
    }
  }
`
