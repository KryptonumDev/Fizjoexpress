import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'
import { KryptonumLogo, Logo } from './icons'
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
            <Logo className='logo-footer' />
            <p
              dangerouslySetInnerHTML={{
                __html: textParser(akapitTekstuPodLogo)
              }}
            />
          </LogoColumn>
          <ArticlesColumn>
            <p className='header'>{tytulNadListaLinkowDoArtykulow}</p>
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
            <p className='header'>{tytulNadListaLinkowPodstrony}</p>
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
            <a
              class='button--secondary yellow'
              href={przyciskWStopce.url}
              target={przyciskWStopce.target}>
              {przyciskWStopce.title}
            </a>
          </p>
        </SocialMediaRow>
        <CopyrightsRow>
          <p>
            Copyrights by Fizjoexpress {new Date().getFullYear()}. Wszelkie
            prawa zastrzeżone.
          </p>
          <p>
            Projekt i realizacja: <KryptonumLogo />
          </p>
        </CopyrightsRow>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 60px 0 32px 0;
`

const FooterContainer = styled(Container)``

const FooterRow = styled.div`
  --number-of-gaps: 2;
  display: grid;
  grid-template-columns: 299fr 290fr 273fr;
  grid-column-gap: calc(40px / var(--number-of-gaps));
  width: 100%;
  h3,
  p,
  span,
  a {
    color: var(--color-white);
    font-size: 12px;
    line-height: ${22 / 12};
    font-weight: 300;
  }

  a {
    outline-color: var(--color-white);
  }

  .header {
    font-size: 18px;
    line-height: ${35 / 18};
    font-weight: 600;
  }
`

const LogoAndSitemapRow = styled(FooterRow)``

const SocialMediaRow = styled(FooterRow)`
  --number-of-gaps: 1;
  grid-template-columns: 589fr 273fr;
  margin: 40px 0 50px;
`

const CopyrightsRow = styled(SocialMediaRow)``

const Column = styled.div``
const LogoColumn = styled(Column)`
  .logo-footer {
    margin-bottom: clamp(32px, ${(49 / 1366) * 100}vw, 49px);
  }
  > p {
    max-width: clamp(220px, ${(300 / 1366) * 100}vw, 300px);
  }
`
const ArticlesColumn = styled(Column)`
  padding-top: 18px;
  ul {
    margin-top: 12px;
  }
  a {
    position: relative;
    padding: 8px 18px;
    margin: 4px 0;
    display: inline-block;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-left: 0;
      border-bottom: 0;
      border-right: 6px solid var(--color-white);
      transition: transform 0.15s ease-out;
    }
    &:focus-visible:before,
    &:hover:before {
      transform: translate(2px, 2px);
    }
  }
`
const LinksColumn = styled(ArticlesColumn)`
  a {
    padding: 1px 4px;
    margin: 0 0 0 -4px;
    &:before {
      content: none;
    }
  }
`
