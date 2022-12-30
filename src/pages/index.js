import { graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Faq from '../components/faq'
import Hero from '../components/hero-homepage'
import LastPosts from '../components/last-posts'
import Process from '../components/process-homepage'
import Reserve from '../components/reserve'
import Reviews from '../components/reviews'
import ServicesGrid from '../components/services-grid'
import TwoColumnFlex from '../components/two-column-flex'
import TwoColumnWithGrayBackground from '../components/two-column-with-gray-background'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import Seo from '../layout/seo'

export function Head({ data: { wpPage: { seo } } }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Seo seo={seo} />
    </>
  )
}

const IndexPage = ({
  data: {
    wpPage: { homepage },
    global: { globalneDaneIUstawienia }
  }
}) => {
  return (
    <main>
      <Hero
        colorVariant='dark'
        headerVariant='bigger'
        data={homepage.sekcjaPowitalnaHomepage}
        socialMedia={
          globalneDaneIUstawienia.globalneGrafiki
        }
      />
      <TwoColumnFlex
        variant={TwoColumnFlexVariants.buttonOverImage}
        data={{
          header:
            homepage.sekcjaOFizjoexpress.aboutSmallHeader,
          title: homepage.sekcjaOFizjoexpress.aboutTitle,
          text: homepage.sekcjaOFizjoexpress.aboutText,
          image:
            homepage.sekcjaOFizjoexpress.aboutVerticalImage,
          link: homepage.sekcjaOFizjoexpress.ctaLink
        }}
      />
      <ServicesGrid
        data={homepage.sekcjaCoLeczymyWFizjoexpress}
      />
      <TwoColumnFlex
        reverse={true}
        variant={TwoColumnFlexVariants.buttonUnderText}
        data={{
          header: homepage.sekcjaCzekamyWlasnieNaCiebie.malyNaglowekNadTytulem,
          title: homepage.sekcjaCzekamyWlasnieNaCiebie.tytulSekcji,
          text: homepage.sekcjaCzekamyWlasnieNaCiebie.trescPodTytulem,
          image: homepage.sekcjaCzekamyWlasnieNaCiebie.waitVerticalImage,
          link: homepage.sekcjaCzekamyWlasnieNaCiebie.linkPrzycisku
        }}
      />
      <Process variant={TwoColumnFlexVariants.buttonUnderText} data={homepage.sekcjaProcesWspolpracy} />
      <Reviews data={{
        header: homepage.homeSekcjaZOpiniami.malyNaglowekNadTytulem,
        title: homepage.homeSekcjaZOpiniami.naglowekSekcji,
        text: homepage.homeSekcjaZOpiniami.tekstPodNaglowkiem,
        link: homepage.homeSekcjaZOpiniami.przyciskDoOpinii,
        image: homepage.homeSekcjaZOpiniami.testimonialsVerticalImage,
        underlineText: homepage.homeSekcjaZOpiniami.tekstPodKreska,

        reviewsTitle: homepage.homeSekcjaZOpiniami.tytulNadOpiniami,
        reviewsHeader: homepage.homeSekcjaZOpiniami.malyNaglowekNadOpiniami
      }}
      />
      <TwoColumnWithGrayBackground
        data={{
          header: homepage.sekcjaSiedzacyTrybZyciaIBtp.malyNaglowekPrzedTytulem,
          title: homepage.sekcjaSiedzacyTrybZyciaIBtp.tytulSekcji,
          text: homepage.sekcjaSiedzacyTrybZyciaIBtp.trescPodTytulem,
          link: homepage.sekcjaSiedzacyTrybZyciaIBtp.przyciskZLinkiem,
          image: homepage.sekcjaSiedzacyTrybZyciaIBtp.poziomeZdjecieWSekcji
        }} />
      <TwoColumnFlex
        variant={TwoColumnFlexVariants.buttonOverImage}
        data={{
          header:
            homepage.sekcjaFizjoterapiaWarszawa.malyNaglowekPrzedTytulem,
          title: homepage.sekcjaFizjoterapiaWarszawa.tytulSekcji,
          text: homepage.sekcjaFizjoterapiaWarszawa.tekstPodTytulem,
          cytate: homepage.sekcjaFizjoterapiaWarszawa.trescCytatu,
          image:
            homepage.sekcjaFizjoterapiaWarszawa.zdjeciePionowe,
          link: homepage.sekcjaFizjoterapiaWarszawa.przyciskZLinkiem
        }}
      />
      <Reserve
        data={{
          header: homepage.homeSekcjaZarezerwujTermin.malyNaglowekPrzedTytulem,
          title: homepage.homeSekcjaZarezerwujTermin.tytulSekcji,
          text: homepage.homeSekcjaZarezerwujTermin.trescPodTytulem,
          link: homepage.homeSekcjaZarezerwujTermin.przyciskZLinkiem,
          steps: homepage.homeSekcjaZarezerwujTermin.listaKrokowKontakt
        }}
      />
      <Faq
        data={{
          header: homepage.homeSekcjaFaq.krotkiNaglowekNadTytulem,
          title: homepage.homeSekcjaFaq.faqTitle
        }}
      />
      <LastPosts
        reverse={true}
        variant={TwoColumnFlexVariants.buttonUnderText}
        data={{
          header: homepage.homeSekcjaBloga.malyNaglowekNadTytulemSekcji,
          title: homepage.homeSekcjaBloga.tytulSekcji,
          text: homepage.homeSekcjaBloga.trescPodTytulem,
          link: homepage.homeSekcjaBloga.przyciskZLinkiem,
          image: homepage.homeSekcjaBloga.homeBlogVerticalImage,
          blogSlider: homepage.homeSekcjaBloga.wyswietlacSekcjeZNajnowszymiArtykulami
        }}
      />
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query homepage {
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
    wpPage(id: { eq: "cG9zdDoxNw==" }) {
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
      id
      homepage {
        homeSekcjaZOpiniami {
          malyNaglowekNadTytulem
          naglowekSekcji
          tekstPodNaglowkiem
          przyciskDoOpinii {
            target
            title
            url
          }
          tekstPodKreska
          malyNaglowekNadOpiniami
          tytulNadOpiniami
          testimonialsVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        homeSekcjaBloga {
          malyNaglowekNadTytulemSekcji
          tytulSekcji
          trescPodTytulem
          przyciskZLinkiem {
            url
            title
            target
          }
          homeBlogVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          wyswietlacSekcjeZNajnowszymiArtykulami
        }
        homeSekcjaFaq {
          faqTitle
          krotkiNaglowekNadTytulem
        }
        homeSekcjaZarezerwujTermin {
          malyNaglowekPrzedTytulem
          tytulSekcji
          trescPodTytulem
          przyciskZLinkiem {
            url
            title
            target
          }
          listaKrokowKontakt {
            nazwaKroku
          }
        }
        sekcjaFizjoterapiaWarszawa {
          malyNaglowekPrzedTytulem
          tytulSekcji
          tekstPodTytulem
          trescCytatu
          przyciskZLinkiem {
            target
            title
            url
          }
          zdjeciePionowe {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaSiedzacyTrybZyciaIBtp {
          malyNaglowekPrzedTytulem
          tytulSekcji
          trescPodTytulem
          przyciskZLinkiem {
            url
            title
            target
          }
          poziomeZdjecieWSekcji {
            altText
            localFile{
              childImageSharp{
                gatsbyImageData
              }
            }
          }
        }
        sekcjaCzekamyWlasnieNaCiebie {
          tytulSekcji
          trescPodTytulem
          malyNaglowekNadTytulem
          waitVerticalImage {
            altText
            localFile{
              childImageSharp{
                gatsbyImageData
              }
            }
          }
          linkPrzycisku {
            url
            title
            target
          }
        }
        sekcjaProcesWspolpracy {
          tytulSekcjiTwoCol
          tytulSekcji
          trescPodTytulemTwoCol
          tresc
          malyNaglowekTwoColSection
          malyNaglowek
          linkPrzyciskuPobocznego {
            url
            title
            target
          }
          linkPrzyciskuGlownego {
            url
            title
            target
          }
          zdjecieWSekcji {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          etapy {
            trescPodTytulemOpcjonalna
            nazwaEtapu
          }
        }
        sekcjaCoLeczymyWFizjoexpress {
          tytulSekcji
          malyNaglowekNadTytulem
          listaCoLeczymy {
            podpisPodIkona
            grafika {
              altText
              localFile {
                publicURL
              }
            }
          }
        }
        sekcjaPowitalnaHomepage {
          heroTitle
          heroText
          text
          buttonLink {
            url
            title
            target
          }
          zdjecieWTle {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaOFizjoexpress {
          aboutSmallHeader
          aboutTitle
          aboutText
          aboutVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          ctaLink {
            url
            title
            target
          }
        }
      }
    }
  }
`
