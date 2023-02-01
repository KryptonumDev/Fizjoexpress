import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { KryptonumLogo, Logo } from './icons'
import SocialMediaIcons from './social-media-icons'
import { Link } from './transition-link'

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
        globalneGrafiki
      }
    }
  } = data
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoAndSitemapRow>
          <LogoColumn>
            <Logo className='logo-footer' />
            <div dangerouslySetInnerHTML={{ __html: akapitTekstuPodLogo}}/>
          </LogoColumn>
          <ArticlesColumn>
            <p className='header'>{tytulNadListaLinkowDoArtykulow}</p>
            <ul>
              {listaLinkow.map((el, index) => (
                <li key={el.linkDoPodstrony.url + index}>
                  <Link
                    to={el.linkDoPodstrony.url}
                    target={el.linkDoPodstrony.target}>
                    {el.linkDoPodstrony.title}
                  </Link>
                </li>
              ))}
            </ul>
          </ArticlesColumn>
          <LinksColumn>
            <p className='header'>{tytulNadListaLinkowPodstrony}</p>
            <ul>
              {podstrony.map((el, index) => {
                return (
                  <li key={el.linkDoPodstrony.url + index}>
                    <Link
                      partiallyActive={
                        el.linkDoPodstrony.url !== '/' ? true : false
                      }
                      activeClassName='active'
                      dataText={el.linkDoPodstrony.title}
                      to={el.linkDoPodstrony.url}
                      target={el.linkDoPodstrony.target}>
                      {el.linkDoPodstrony.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </LinksColumn>
        </LogoAndSitemapRow>
        <SocialMediaRow>
          <SocialMediaIcons sectionVariant='footer' data={globalneGrafiki} />
          <p>
            {tekstPrzyPrzyciskuWStopce}
            <a
              className='button--secondary yellow'
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
          <p className='text-copyrights'>
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
  padding: 60px 0 0 0;
  overflow: hidden;
`

const FooterContainer = styled(Container)``

const FooterRow = styled.div`
  --number-of-gaps: 2;
  --base-gap: 100px;
  display: grid;
  grid-template-columns: 369fr 290fr 273fr;
  @media (max-width: 1138px) {
    grid-template-columns: 260fr 290fr 225fr;
    --base-gap: 80px;
  }
  @media (max-width: 833px) {
    grid-template-columns: 240fr 330fr 205fr;
    --base-gap: 60px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 4fr 3fr;
    grid-gap: 16px;
    grid-template-areas:
      'a a'
      'b c'
      'b c'
      'b c';
  }

  grid-column-gap: calc(var(--base-gap) / var(--number-of-gaps));
  width: 100%;
  align-items: center;
  h3,
  p,
  span,
  a {
    color: var(--color-white);
    font-size: 12px;
    line-height: ${22 / 12};
    font-weight: 300;
  }

  && a {
    outline-color: var(--color-white);
    max-width: 281px;
  }

  .header {
    font-size: 18px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    line-height: ${35 / 18};
    font-weight: 600;
  }
`

const LogoAndSitemapRow = styled(FooterRow)`
  align-items: start;
`

const SocialMediaRow = styled(FooterRow)`
  --number-of-gaps: 1;
  grid-template-columns: 659fr 273fr;
  @media (max-width: 1138px) {
    grid-template-columns: 550fr 225fr;
  }
  @media (max-width: 833px) {
    grid-template-columns: 570fr 205fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 4fr 3fr;
    grid-gap: 30px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 40px;
  }

  margin: 40px 0 50px;

  .button--secondary {
    margin-left: 6px;
  }
`

const CopyrightsRow = styled(SocialMediaRow)`
  margin: 0;
  position: relative;
  padding: 34px 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(0.5 * (100% - 100vw));
    width: 100vw;
    height: 1px;
    background-color: var(--color-medium-blue);
  }

  .text-copyrights {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 1050px) {
      margin-right: -40px;
    }
    @media (max-width: 850px) {
      margin-right: -20px;
    }
  }
`


const LogoColumn = styled.div`
  .logo-footer {
  }

  a {
    margin-bottom: clamp(32px, ${(49 / 1366) * 100}vw, 49px);
    display: block;
    &:focus-visible {
      outline: 2px solid var(--color-white) !important;
    }
  }

  > div {
    max-width: 300px;
    *{
      color: #fff;
    }
  }
  @media (max-width: 767px) {
    grid-area: a;
    grid-columns: 1/-1;
  }
`
const ArticlesColumn = styled.div`
  padding-top: 12px;

  @media (max-width: 1246px) {
    padding-top: 2px;
  }
  @media (max-width: 767px) {
    grid-area: b;
  }

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
  @media (max-width: 767px) {
    grid-area: c;

    ul {
      margin-top: 23px;
    }
  }
  a {
    padding: 1px 4px;
    margin: 0 0 0 -4px;
    position: relative;
    transition: color 0.15s ease-out;
    &:after {
      content: attr(data-link-text);
      font-weight: 700;
      position: absolute;
      top: 3px;
      left: 3px;
      opacity: 0;
      width: max-content;
      transition: opacity 0.15s ease-out;
      color: var(--color-white);
      font-size: 12px;
      line-height: 1.5;
    }
    &.active,
    &:hover {
      color: transparent;
      &:after {
        opacity: 1;
      }
    }

    &:before {
      content: none;
    }
  }
`
