import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../atoms/container'
import { useLocation } from '@reach/router'
import { FIZJOEXPRESS_LOGO_VARIANTS } from '../constants/logo-variants'
import { Logo } from './icons'
import scrollLock from '../helpers/scroll-lock'
import SocialMediaIcons from './social-media-icons'
import { Button } from '../moleculas/link'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDo1Mg==" }) {
        globalneDaneIUstawienia {
          naglowek {
            linkiWNaglowku {
              link {
                target
                title
                url
              }
            }
            przycisk {
              url
              target
              title
            }
          }
          globalneGrafiki {
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
      globalneDaneIUstawienia: { naglowek, globalneGrafiki }
    }
  } = data

  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      scrollLock.enable()
    } else {
      scrollLock.disable()
    }
  }, [isOpen])

  useEffect(() => {
    if (typeof document !== `undefined`) {
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
          setIsOpen(false)
        }
      })
    }
  }, [])

  return (
    <HeaderWrapper isOpen={isOpen} isHomepage={location?.pathname === '/'}>
      <HeaderContainer isOpen={isOpen}>
        <LogoContainer>
          <Logo
            onClick={() => setIsOpen(false)}
            className='logo--header'
            variant={FIZJOEXPRESS_LOGO_VARIANTS.COLOR_WHITE_BG}
          />
          <MobileButton
            name='przycisk otwierający menu mobilne'
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}>
            <span />
          </MobileButton>
        </LogoContainer>
        <NavigationContainer isOpen={isOpen}>
          <span className='nav-header sub-title'>Menu</span>
          <ul>
            {naglowek.linkiWNaglowku.map(({ link: { url, title } }) => (
              <li key={`header-nav-${url}`}>
                <Link
                  onClick={() => setIsOpen(false)}
                  activeClassName='active'
                  data-link-text={title}
                  to={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <SocialMediaIcons className='mobile--nav' data={globalneGrafiki} />
        </NavigationContainer>
        <ButtonContainer isOpen={isOpen}>
          <Button
            className='link'
            to={naglowek.przycisk.url}
            target={naglowek.przycisk.target}>
            {naglowek.przycisk.title}
          </Button>
        </ButtonContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: fixed;
  background-color: var(--color-white);
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;

  .read-more {
    padding: 33px 16px;
  }

  @media (max-width: 896px) {
    background-color: transparent;
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
    box-shadow: none;
  }
`

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (min-width: 897px) {
    padding-right: 0;
  }
  gap: 24px;
  @media (max-width: 896px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    background-color: transparent;
    padding: 0;
    gap: 0;
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  }
`

const LogoContainer = styled.div`
  flex: 1 0 20%;
  padding-top: 4px;
  @media (max-width: 896px) {
    background-color: var(--color-white);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 2%;
    padding: 0 16px;
    max-height: 72px;
    z-index: 2;
    pointer-events: all;
    .logo--header {
      margin-top: 13px;
    }
  }
`
const NavigationContainer = styled.nav`
  flex: 1 1 60%;
  .nav-header {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  > ul {
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 10px;
  }

  a {
    padding: 10px;
    position: relative;
    transition: color 0.15s ease-out;
    color: var(--color-blue);
    font-size: 12px;
    line-height: 1.5;
    &:after {
      content: attr(data-link-text);
      font-weight: bold;
      position: absolute;
      top: 10px;
      left: 9px;
      opacity: 0;
      transition: opacity 0.15s ease-out;
      color: var(--color-blue);
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
  }

  @media (max-width: 896px) {
    padding-left: clamp(33px, ${(33 / 360) * 100}vw, 49px);
    padding-right: 16px;
    flex-direction: column;
    padding-top: clamp(48px, 7vw, 80px);
    justify-content: center;
    transition: visibility 0.2s ease-out, transform 0.2s ease-out,
      opacity 0.2s ease-out;
    transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-32px)'};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background-color: var(--color-white);
    width: 100%;

    .nav-header {
      display: inline-block;
      visibility: visible;
      opacity: 1;
      margin: 0 0 24px 0;
    }
    .mobile--nav {
      margin-top: auto;
      .text {
        font-size: 13px;
      }
      img {
        width: 26px;
      }
    }

    .read-more {
      width: 100%;
    }
    > ul {
      flex-direction: column;

      a {
        position: relative;
        padding: 6px 16px;
        font-size: 16px;
        margin: 3px 0;
        display: inline-block;
        &:before {
          content: '';
          position: absolute;
          left: -2px;
          top: 13px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-left: 0;
          border-bottom: 0;
          border-right: 6px solid var(--color-blue);
          transition: transform 0.15s ease-out;
        }
        &:after {
          font-size: 16px;
          left: 16px;
          top: 6px;
        }
        &:focus-visible:before,
        &:hover:before {
          transform: translate(2px, 2px);
        }
      }
    }
  }
`
const ButtonContainer = styled.div`
  flex: 1 0 20%;
  @media (max-width: 896px) {
    flex: 1 0 auto;
    width: 100%;
    align-items: flex-end;
    padding: 0 16px 16px;
    background-color: var(--color-white);
    transition: visibility 0.2s ease-out, transform 0.2s ease-out,
      opacity 0.2s ease-out;
    transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-32px)'};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    .link {
      width: 100%;
      max-width: unset;
    }
  }
`

const MobileButton = styled.button`
  display: inline-flex;
  width: 35px;
  height: 35px;
  margin: 16px 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
  border: none;
  outline-offset: 2px;
  position: relative;
  cursor: pointer;
  @media (min-width: 897px) {
    display: none;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--color-blue);
  }
  > span,
  :after,
  :before {
    background-color: var(--color-yellow);
    width: 15px;
    height: 2px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease-out;
    transform-origin: center center;
  }

  :after,
  :before {
    content: '';
  }
  :before {
    top: calc(50% - 5px);
    transform-origin: 100% 50%;
  }
  :after {
    top: calc(50% + 5px);
    transform-origin: 100% 50%;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span {
        transform: translate(-50%, -50%) scaleX(0);
      }
      :after {
        transform: translate(-65%, -60%) rotate(45deg);
      }
      :before {
        transform: translate(-65%, -95%) rotate(-45deg);
      }
    `}
`

export default Header
