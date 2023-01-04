import { graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Cta from '../components/cta'
import Faq from '../components/faq'
import Hero from '../components/hero-homepage'
import LastPosts from '../components/last-posts'
import Reserve from '../components/reserve'
import Team from '../components/team'
import TwoColumnFlex from '../components/two-column-flex'
import TwoColumnTextSection from '../components/two-column-text-section'
import TwoColumnWithDarkBackground from '../components/two-column-with-dark-background'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import Seo from '../layout/seo'

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
        "name": "O fizjoexpress",
        "item": 'https://fizjoexpress.pl/o-fizjoexpress/'
      }
    ]
  };
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(ldJson)}
      </script>
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Seo slug={slug} seo={seo} />
    </>
  )
}

const AboutPage = ({
  data: {
    wpPage: {
      oFizjoexpress: {
        aboutSekcjaPowitalna,
        sekcjaMisjaFizjoexpress,
        sekcjaLokalizacjaFizjoexpress,
        sekcjaPoczatkiFizjoexpress,
        sekcjaPodnoszenieKwalifikacji,
        sekcjaPodnoszenieKwalifikacjiKopia,
        aboutFastComebackToFitness,
        aboutSekcjaZarezerwujTermin,
        aboutSekcjaFaq,
        aboutSekcjaBloga
      }
    },
    global: { globalneDaneIUstawienia }
  }
}) => {
  return (
    <main id='content'>
      <Hero
        colorVariant='light'
        headerVariant='smaller'
        data={{
          heroTitle: aboutSekcjaPowitalna.tytulSekcji,
          heroText: aboutSekcjaPowitalna.tekstPodTytulem,
          text: aboutSekcjaPowitalna.malyNaglowekNadTytulemSekcji,
          buttonLink: aboutSekcjaPowitalna.przyciskZLinkiem,
          zdjecieWTle: aboutSekcjaPowitalna.aboutHeroBgImage,
          featuredTextOverBg: aboutSekcjaPowitalna.tekstWSzarymProstokacie
        }}
        socialMedia={globalneDaneIUstawienia.globalneGrafiki}
      />
      <TwoColumnFlex
        data={{
          header: sekcjaMisjaFizjoexpress.aboutSmallHeader,
          title: sekcjaMisjaFizjoexpress.aboutTitle,
          text: sekcjaMisjaFizjoexpress.aboutText,
          image: sekcjaMisjaFizjoexpress.aboutImage,
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
        }}
      />
      <TwoColumnTextSection
        smallHeader={sekcjaPoczatkiFizjoexpress.aboutSmallHeader}
        title={sekcjaPoczatkiFizjoexpress.aboutTitle}
        firstColumnContent={sekcjaPoczatkiFizjoexpress.pierwszaKolumnaTresci}
        secondColumnContent={sekcjaPoczatkiFizjoexpress.drugaKolumnaTresci}
        link={sekcjaPoczatkiFizjoexpress.buttonWithCtaLink}
      />
      <Team
        reverse={true}
        data={{
          header: sekcjaPodnoszenieKwalifikacji.aboutSmallHeader,
          title: sekcjaPodnoszenieKwalifikacji?.aboutTitle,
          text: sekcjaPodnoszenieKwalifikacji?.aboutText,
          link: sekcjaPodnoszenieKwalifikacji?.buttonWithCtaLink,
          image: sekcjaPodnoszenieKwalifikacji?.aboutVerticalImage
        }}
        slider={{
          header: sekcjaPodnoszenieKwalifikacjiKopia.aboutSmallHeader,
          title: sekcjaPodnoszenieKwalifikacjiKopia.aboutTitle,
          team: sekcjaPodnoszenieKwalifikacjiKopia.czlonkowieZespolu
        }}
      />
      <TwoColumnFlex
        variant={TwoColumnFlexVariants.buttonOverImage}
        data={{
          header: aboutFastComebackToFitness.malyNaglowekPrzedTytulem,
          title: aboutFastComebackToFitness.tytulSekcji,
          text: aboutFastComebackToFitness.trescPodTytulem,
          image: aboutFastComebackToFitness.kwadratoweZdjecie
        }}
      />
      <Cta
        gray={true}
        data={{
          linkOne: aboutFastComebackToFitness.ctaButtonPrimary,
          linkTwo: aboutFastComebackToFitness.ctaButtonSecondary,
          text: aboutFastComebackToFitness.featuredTextOnGrayBg
        }}
      />
      <Reserve
        data={{
          header: aboutSekcjaZarezerwujTermin.malyNaglowekPrzedTytulem,
          title: aboutSekcjaZarezerwujTermin.tytulSekcji,
          text: aboutSekcjaZarezerwujTermin.trescPodTytulem,
          link: aboutSekcjaZarezerwujTermin.przyciskZLinkiem,
          steps: aboutSekcjaZarezerwujTermin.listaKrokowKontakt
        }}
      />
      <Faq
        data={{
          header: aboutSekcjaFaq.krotkiNaglowekNadTytulem,
          title: aboutSekcjaFaq.faqTitle
        }}
      />
      <LastPosts
        reverse={true}
        variant={TwoColumnFlexVariants.buttonUnderText}
        data={{
          header: aboutSekcjaBloga.malyNaglowekNadTytulemSekcji,
          title: aboutSekcjaBloga.tytulSekcji,
          text: aboutSekcjaBloga.trescPodTytulem,
          link: aboutSekcjaBloga.przyciskZLinkiem,
          image: aboutSekcjaBloga.aboutBlogVerticalImage,
          blogSlider: aboutSekcjaBloga.wyswietlacSekcjeZNajnowszymiArtykulami
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
      oFizjoexpress {
        aboutSekcjaFaq {
          faqTitle
          krotkiNaglowekNadTytulem
        }
        aboutSekcjaBloga {
          wyswietlacSekcjeZNajnowszymiArtykulami
          tytulSekcji
          trescPodTytulem
          przyciskZLinkiem {
            target
            title
            url
          }
          malyNaglowekNadTytulemSekcji
          aboutBlogVerticalImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        aboutSekcjaZarezerwujTermin {
          tytulSekcji
          trescPodTytulem
          malyNaglowekPrzedTytulem
          listaKrokowKontakt {
            nazwaKroku
          }
          przyciskZLinkiem {
            target
            title
            url
          }
        }
        aboutFastComebackToFitness {
          malyNaglowekPrzedTytulem
          tytulSekcji
          trescPodTytulem
          kwadratoweZdjecie {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          featuredTextOnGrayBg
          ctaButtonSecondary {
            url
            title
            target
          }
          ctaButtonPrimary {
            url
            title
            target
          }
        }
        sekcjaPodnoszenieKwalifikacjiKopia {
          aboutSmallHeader
          aboutTitle
          czlonkowieZespolu {
            name
            description
            dodatkowePolaAutora {
              zdjecieAutora {
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
        sekcjaPodnoszenieKwalifikacji {
          aboutSmallHeader
          aboutTitle
          aboutText
          buttonWithCtaLink {
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
          aboutImage {
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
