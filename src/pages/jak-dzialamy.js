import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import CtaBackground from '../components/cta-with-background'
import Faq from '../components/faq'
import Hero from '../components/hero-homepage'
import LastPosts from '../components/last-posts'
import Reserve from '../components/reserve'
import Reviews from '../components/reviews'
import ThreeCards from '../components/three-cards'
import TwoColumnFlex from '../components/two-column-flex'
import WayOfWork from '../components/way-of-work'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import Seo from '../layout/seo'

export function Head({
  data: {
    allWpAuthor,
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
        "name": "Jak działamy",
        "item": 'https://fizjoexpress.pl/jak-dzialamy/'
      }
    ]
  };
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(ldJson)}
      </script>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Seo authors={allWpAuthor} slug={'/' + slug + '/'} seo={seo} />
    </>
  )
}

const HowWorksPage = ({
  data: {
    global: { globalneDaneIUstawienia },
    wpPage: {
      jakDzialamy: {
        sekcjaPoznajNaszSposobDzialania,
        sekcjaTowarzyszymyPodczasLeczenia,
        howWeWorkSekcjaPowitalna,
        howWeWorkSekcjaCta,
        sekcjaBoleDysfukcjeOgraniczenia,
        howWeWorkSekcjaBloga,
        howWeWorkSekcjaFaq,
        howWeWorkSekcjaZarezerwujTermin,
        sekcjaKierunekPoZdrowie,
        sekcjaNaszeRekomendacjeKopia
      }
    }
  }
}) => {
  return (
    <main id='content'>
      <Hero
        colorVariant='light'
        headerVariant='smaller'
        data={{
          heroTitle: howWeWorkSekcjaPowitalna.heroTitle,
          heroText: howWeWorkSekcjaPowitalna.heroText,
          text: howWeWorkSekcjaPowitalna.text,
          buttonLink: howWeWorkSekcjaPowitalna.primaryButtonLink,
          buttonLinkSecond: howWeWorkSekcjaPowitalna.secondaryButtonLink,
          zdjecieWTle: howWeWorkSekcjaPowitalna.backgroundImage
        }}
        socialMedia={globalneDaneIUstawienia.globalneGrafiki}
      />
      <TwoColumnFlex
        data={{
          header: sekcjaTowarzyszymyPodczasLeczenia.aboutSmallHeader,
          title: sekcjaTowarzyszymyPodczasLeczenia.aboutTitle,
          text: sekcjaTowarzyszymyPodczasLeczenia.aboutText,
          link: sekcjaTowarzyszymyPodczasLeczenia.ctaLink,
          image: sekcjaTowarzyszymyPodczasLeczenia.aboutSquareImage
        }}
      />
      <ThreeCards data={sekcjaBoleDysfukcjeOgraniczenia.karta} />
      <CtaBackground
        data={{
          title: howWeWorkSekcjaCta.tytulSekcji,
          firstButton: howWeWorkSekcjaCta.przyciskJasny,
          secondButton: howWeWorkSekcjaCta.przyciskKolorowy,
          background: howWeWorkSekcjaCta.zdjecieWTle
        }}
      />
      <WayOfWork
        data={{
          header: sekcjaPoznajNaszSposobDzialania.aboutSmallHeader,
          title: sekcjaPoznajNaszSposobDzialania.aboutTitle,
          text: sekcjaPoznajNaszSposobDzialania.aboutText,
          link: sekcjaPoznajNaszSposobDzialania.ctaLink,
          image: sekcjaPoznajNaszSposobDzialania.aboutVerticalImage,

          gridTopText: sekcjaPoznajNaszSposobDzialania.tekstNadSiatkaCech,
          gridBotText: sekcjaPoznajNaszSposobDzialania.tekstPodSiatkaCech,
          grid: sekcjaPoznajNaszSposobDzialania.siatkaCech
        }}
      />
      <Reviews
        variant={TwoColumnFlexVariants.buttonOverImage}
        reverse={false}
        data={{
          header: sekcjaKierunekPoZdrowie.aboutSmallHeader,
          title: sekcjaKierunekPoZdrowie.aboutTitle,
          text: sekcjaKierunekPoZdrowie.aboutText,
          link: sekcjaKierunekPoZdrowie.ctaLink,
          image: sekcjaKierunekPoZdrowie.aboutVerticalImage,

          reviewsTitle: sekcjaNaszeRekomendacjeKopia.tytulSekcji,
          reviewsHeader: sekcjaNaszeRekomendacjeKopia.malyNaglowekNadTytulem
        }}
      />
      <Reserve
        data={{
          header: howWeWorkSekcjaZarezerwujTermin.malyNaglowekPrzedTytulem,
          title: howWeWorkSekcjaZarezerwujTermin.tytulSekcji,
          text: howWeWorkSekcjaZarezerwujTermin.trescPodTytulem,
          link: howWeWorkSekcjaZarezerwujTermin.przyciskZLinkiem,
          steps: howWeWorkSekcjaZarezerwujTermin.listaKrokowKontakt
        }}
      />
      <Faq
        data={{
          header: howWeWorkSekcjaFaq.krotkiNaglowekNadTytulem,
          title: howWeWorkSekcjaFaq.faqTitle
        }}
      />
      <LastPosts
        reverse={true}
        variant={TwoColumnFlexVariants.buttonUnderText}
        data={{
          header: howWeWorkSekcjaBloga.malyNaglowekNadTytulemSekcji,
          title: howWeWorkSekcjaBloga.tytulSekcji,
          text: howWeWorkSekcjaBloga.trescPodTytulem,
          link: howWeWorkSekcjaBloga.przyciskZLinkiem,
          image: howWeWorkSekcjaBloga.howBlogVerticalImage,
          blogSlider:
            howWeWorkSekcjaBloga.wyswietlacSekcjeZNajnowszymiArtykulami
        }}
      />
    </main>
  )
}

export default HowWorksPage

export const query = graphql`
  query howWorks {
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
    wpPage(id: { eq: "cG9zdDozMw==" }) {
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
      jakDzialamy {
        sekcjaBoleDysfukcjeOgraniczenia {
          karta {
            tytulKarty
            trescPodTytulem
          }
        }
        sekcjaPoznajNaszSposobDzialania {
          aboutSmallHeader
          aboutText
          aboutTitle
          tekstPodSiatkaCech
          tekstNadSiatkaCech
          siatkaCech {
            cecha
          }
          ctaLink {
            target
            title
            url
          }
          aboutVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaTowarzyszymyPodczasLeczenia {
          aboutSmallHeader
          aboutText
          aboutTitle
          ctaLink {
            target
            title
            url
          }
          aboutSquareImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaKierunekPoZdrowie {
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
          ctaLink {
            target
            title
            url
          }
        }
        sekcjaNaszeRekomendacjeKopia {
          tytulSekcji
          malyNaglowekNadTytulem
        }
        howWeWorkSekcjaZarezerwujTermin {
          tytulSekcji
          trescPodTytulem
          przyciskZLinkiem {
            target
            url
            title
          }
          malyNaglowekPrzedTytulem
          listaKrokowKontakt {
            nazwaKroku
          }
        }
        howWeWorkSekcjaFaq {
          faqTitle
          krotkiNaglowekNadTytulem
        }
        howWeWorkSekcjaBloga {
          wyswietlacSekcjeZNajnowszymiArtykulami
          tytulSekcji
          trescPodTytulem
          przyciskZLinkiem {
            url
            title
            target
          }
          malyNaglowekNadTytulemSekcji
          howBlogVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        howWeWorkSekcjaCta {
          tytulSekcji
          przyciskKolorowy {
            target
            title
            url
          }
          przyciskJasny {
            target
            title
            url
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
        howWeWorkSekcjaPowitalna {
          heroTitle
          heroText
          text
          secondaryButtonLink {
            title
            url
            target
          }
          primaryButtonLink {
            url
            title
            target
          }
          backgroundImage {
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
