import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/hero-homepage"


const HowWorksPage = ({ data: { global: { globalneDaneIUstawienia }, wpPage: { jakDzialamy: { howWeWorkSekcjaPowitalna } } } }) => {
    return (
        <main>
            <Hero
                colorVariant='light'
                headerVariant='smaller'
                data={{
                    heroTitle: howWeWorkSekcjaPowitalna.heroTitle,
                    heroText: howWeWorkSekcjaPowitalna.heroText,
                    text: howWeWorkSekcjaPowitalna.text,
                    buttonLink: howWeWorkSekcjaPowitalna.primaryButtonLink,
                    buttonLinkSecond: howWeWorkSekcjaPowitalna.secondaryButtonLink,
                    zdjecieWTle:
                        howWeWorkSekcjaPowitalna.backgroundImage,
                }}
                socialMedia={
                    globalneDaneIUstawienia.globalneGrafiki
                }
            />
        </main>
    )
}

export default HowWorksPage

export const query = graphql`
    query howWorks {
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
            jakDzialamy {
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