import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'
import { Logo } from './icons'
import SocialMediaIcons from './social-media-icons'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDo1Mg==" }) {
        globalneDaneIUstawienia {
          footerInfo {
            akapitTekstuPodLogo
            listaLinkow {
              linkDoPodstrony {
                target
                title
                url
              }
            }
            podstrony {
              linkDoPodstrony {
                target
                title
                url
              }
            }
            przyciskWStopce {
              target
              title
              url
            }
            tekstPrzyPrzyciskuWStopce
            tytulNadListaLinkowDoArtykulow
            tytulNadListaLinkowPodstrony
          }
          globalneGrafiki {
            logo {
              altText
              localFile {
                publicURL
              }
            }
            socialMedia {
              linkDoSocialMedia
              ikonaSocialMedia {
                altText
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)
  const {
    wpPage: {
      globalneDaneIUstawienia: {
        footerInfo: {
          akapitTekstuPodLogo,
          listaLinkow,
          podstrony,
          przyciskWStopce,
          tekstPrzyPrzyciskuWStopce,
          tytulNadListaLinkowDoArtykulow,
          tytulNadListaLinkowPodstrony
        },
        globalneGrafiki,
        globalneGrafiki: { logo, socialMedia }
      }
    }
  } = data
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoAndSitemapRow>
          <LogoColumn>
            <Logo />
            <p
              dangerouslySetInnerHTML={{
                __html: textParser(akapitTekstuPodLogo)
              }}
            />
          </LogoColumn>
          <ArticlesColumn>
            <p>{tytulNadListaLinkowDoArtykulow}</p>
            <ul>
              {listaLinkow.map(({ linkDoPodstrony: link }) => (
                <li key={link.url}>
                  <Link to={link.url} target={link.target}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </ArticlesColumn>
          <LinksColumn>
            <p>{tytulNadListaLinkowPodstrony}</p>
            <ul>
              {podstrony.map(({ linkDoPodstrony: link }) => (
                <li key={link.url}>
                  <Link to={link.url} target={link.target}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </LinksColumn>
        </LogoAndSitemapRow>
        <SocialMediaRow>
          <SocialMediaIcons sectionVariant='dark' data={globalneGrafiki} />
          <p>
            {tekstPrzyPrzyciskuWStopce}
            <a href={przyciskWStopce.url} target={przyciskWStopce.target}>
              {przyciskWStopce.title}
            </a>
          </p>
        </SocialMediaRow>
        <CopyrightsRow></CopyrightsRow>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background-color: var(--color-blue);
  color: var(--color-white);
  min-height: 400px;
`

const FooterContainer = styled(Container)``

const FooterRow = styled.div`
  --number-of-gaps: 2;
  display: grid;
  grid-template-columns: 299fr 290fr 273fr;
  grid-column-gap: calc(40px / var(--number-of-gaps));
  width: 100%;
  min-height: 80px;
  h3,
  p,
  span,
  a {
    color: var(--color-white);
  }
`

const LogoAndSitemapRow = styled(FooterRow)``
const SocialMediaRow = styled(FooterRow)`
  --number-of-gaps: 1;
  grid-template-columns: 589fr 273fr;
`
const CopyrightsRow = styled(FooterRow)``

const Column = styled.div``
const LogoColumn = styled(Column)``
const ArticlesColumn = styled(Column)``
const LinksColumn = styled(Column)``
