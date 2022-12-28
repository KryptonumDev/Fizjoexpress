import { graphql } from 'gatsby'
import * as React from 'react'
import Hero from '../components/hero-homepage'
import TwoColumnFlex from '../components/two-column-flex'
import TwoColumnWithDarkBackground from '../components/two-column-with-dark-background'

const AboutPage = ({
  data: {
    wpPage: {
      oFizjoexpress: {
        aboutSekcjaPowitalna,
        sekcjaMisjaFizjoexpress,
        sekcjaLokalizacjaFizjoexpress
      }
    },
    global: { globalneDaneIUstawienia }
  }
}) => {
  console.log(sekcjaLokalizacjaFizjoexpress)
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
      <TwoColumnWithDarkBackground
        data={{
          header: sekcjaLokalizacjaFizjoexpress.aboutSmallHeader,
          title: sekcjaLokalizacjaFizjoexpress?.aboutTitle,
          text: sekcjaLokalizacjaFizjoexpress?.aboutText,
          link: sekcjaLokalizacjaFizjoexpress?.buttonWithCtaLink,
          image: sekcjaLokalizacjaFizjoexpress?.aboutLocalizationHorizontalImage
        }} />
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
        sekcjaLokalizacjaFizjoexpress {
          aboutLocalizationHorizontalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          aboutSmallHeader
          aboutTitle
          aboutText
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
