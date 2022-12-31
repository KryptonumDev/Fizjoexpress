import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { useLocation } from '@reach/router'
import { FIZJOEXPRESS_LOGO_VARIANTS } from '../constants/logo-variants'
import { Logo } from './icons'

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
        }
      }
    }
  `)

  const {
    wpPage: {
      globalneDaneIUstawienia: { naglowek }
    }
  } = data

  const location = useLocation()

  return (
    <HeaderWrapper isHomepage={location?.pathname === '/'}>
      <HeaderContainer>
        <LogoContainer>
          <Logo
            className='logo--header'
            variant={FIZJOEXPRESS_LOGO_VARIANTS.COLOR_WHITE_BG}
          />
        </LogoContainer>
        <NavigationContainer>
          <ul>
            {naglowek.linkiWNaglowku.map(({ link: { url, title } }) => (
              <li>
                <Link activeClassName='active' data-link-text={title} to={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </NavigationContainer>
        <ButtonContainer>
          <a
            className='read-more btn--triangle'
            href={naglowek.przycisk.url}
            target={naglowek.przycisk.target}>
            {naglowek.przycisk.title}
          </a>
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
  z-index: 2;

  .read-more {
    padding: 33px 16px;
  }
`

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 24px;
`

const LogoContainer = styled.div`
  flex: 1 0 20%;
  padding-top: 4px;
`
const NavigationContainer = styled.nav`
  flex: 1 1 60%;
  > ul {
    display: flex;
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
`
const ButtonContainer = styled.div`
  flex: 1 0 20%;
`

export default Header
