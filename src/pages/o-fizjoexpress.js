import { graphql } from 'gatsby'
import * as React from 'react'
import DarkFeaturedSectionWithPhoto from '../components/dark-featured-section-with-photo'
import Hero from '../components/hero-homepage'
import TwoColumnFlex from '../components/two-column-flex'
import TwoColumnTextSection from '../components/two-column-text-section'
import { textParser } from '../helpers/text-parser'

const AboutPage = ({
  data: {
    wpPage: {
      oFizjoexpress: {
        aboutSekcjaPowitalna,
        sekcjaMisjaFizjoexpress,
        sekcjaLokalizacjaFizjoexpress,
        sekcjaPoczatkiFizjoexpress
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
      <DarkFeaturedSectionWithPhoto
        smallHeader={textParser(
          sekcjaLokalizacjaFizjoexpress?.aboutSmallHeader
        )}
        sectionTitle={textParser(
          sekcjaLokalizacjaFizjoexpress?.aboutTitle
        )}
        textUnderTitle={textParser(
          sekcjaLokalizacjaFizjoexpress?.aboutText
        )}
        button={
          sekcjaLokalizacjaFizjoexpress?.buttonWithCtaLink
        }
        horizontalImage={
          sekcjaLokalizacjaFizjoexpress?.aboutLocalizationHorizontalImage
        }
      />
      <TwoColumnTextSection
        smallHeader={
          sekcjaPoczatkiFizjoexpress.aboutSmallHeader
        }
        title={sekcjaPoczatkiFizjoexpress.aboutTitle}
        firstColumnContent={
          sekcjaPoczatkiFizjoexpress.pierwszaKolumnaTresci
        }
        secondColumnContent={
          sekcjaPoczatkiFizjoexpress.drugaKolumnaTresci
        }
        link={sekcjaPoczatkiFizjoexpress.buttonWithCtaLink}
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
        sekcjaPoczatkiFizjoexpress {
          aboutSmallHeader
          aboutTitle
          buttonWithCtaLink {
            target
            title
            url
          }
          pierwszaKolumnaTresci
          drugaKolumnaTresci
        }
      }
    }
  }
`
