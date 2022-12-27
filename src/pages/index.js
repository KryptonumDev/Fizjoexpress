import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/hero-homepage"
import Process from "../components/process-homepage"
import ServicesGrid from "../components/services-grid"
import TwoColumnFlex from "../components/two-column-flex"

const IndexPage = ({ data: { wpPage: { homepage } } }) => {
  return (
    <main>
      <Hero data={homepage.sekcjaPowitalnaHomepage} />
      <TwoColumnFlex data={{
        header: homepage.sekcjaOFizjoexpress.aboutSmallHeader,
        title: homepage.sekcjaOFizjoexpress.aboutTitle,
        text: homepage.sekcjaOFizjoexpress.aboutText,
        image: homepage.sekcjaOFizjoexpress.aboutVerticalImage,
        link: homepage.sekcjaOFizjoexpress.ctaLink
      }} />
      <ServicesGrid data={homepage.sekcjaCoLeczymyWFizjoexpress} />

      <Process data={homepage.sekcjaProcesWspolpracy} />
    </main >
  )
}

export default IndexPage

export const query = graphql`
query homepage {
  wpPage(id: {eq: "cG9zdDoxNw=="}){
    id
    homepage{
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
        zdjecieWSekcji{
          altText
          localFile{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        etapy {
          trescPodTytulemOpcjonalna
          nazwaEtapu
        }
      }
      sekcjaCzekamyWlasnieNaCiebie {
        tytulSekcji
        trescPodTytulem
        malyNaglowekNadTytulem
        linkPrzycisku {
          target
          title
          url
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
        zdjecieWTle{
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