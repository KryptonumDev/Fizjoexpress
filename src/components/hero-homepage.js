import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Button } from '../moleculas/link'
import { textParser } from './../helpers/text-parser'
import SocialMediaIcons from './social-media-icons'
import { Link } from './transition-link'

export default function Hero({
  colorVariant = 'dark',
  headerVariant = 'bigger',
  data: {
    heroTitle,
    heroText,
    text,
    buttonLink,
    buttonLinkSecond,
    zdjecieWTle,
    featuredTextOverBg
  },
  socialMedia
}) {
  return (
    <Wrapper color={colorVariant}>
      <Container heroWithImageContainer>
        <TextBlock color={colorVariant}>
          <h1 className='small-header'>{text}</h1>
          <span
            className={headerVariant === 'bigger' ? 'main-title' : 'sub-title'}
            dangerouslySetInnerHTML={{
              __html: textParser(heroTitle)
            }}
          />
          <p
            className='text'
            dangerouslySetInnerHTML={{
              __html: textParser(heroText)
            }}
          />
          <div className='buttons'>
            {buttonLink?.url && (
              <Button
                variant={colorVariant === 'dark' ? 'white-alt' : 'primary'}
                className='button'
                to={buttonLink.url}
                target={buttonLink.target ? buttonLink.target : null}>
                {buttonLink.title}
              </Button>
            )}
            {buttonLinkSecond?.url && (
              <Link
                className='button second'
                to={buttonLinkSecond.url}
                target={buttonLinkSecond.target ? buttonLinkSecond.target : null}>
                {buttonLinkSecond.title}
              </Link>
            )}
          </div>
          {socialMedia && (
            <SocialMediaIcons
              sectionVariant={colorVariant}
              data={socialMedia}
            />
          )}
        </TextBlock>
        <GatsbyImage
          className='image'
          loading='eager'
          image={zdjecieWTle.localFile.childImageSharp.gatsbyImageData}
          alt={zdjecieWTle.altText}
        />
        {featuredTextOverBg && (
          <FeaturedTextOverBg
            dangerouslySetInnerHTML={{
              __html: textParser(featuredTextOverBg)
            }}
          />
        )}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: ${({ color }) =>
    color === 'dark' ? 'var(--color-blue)' : 'var(--color-white)'};
  min-height: 768px;
  position: relative;
  padding-top: 240px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

  .buttons{
    display: flex;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .second {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background-color: var(--color-blue);
      width: 80px;
      left: 0;
      bottom: -5px;
      height: 2px;
      transition: width .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1240px) {
    ${({ color }) =>
    color === 'light'
      ? `
          .image{
            max-width: 60vw;
          }
        `
      : null}
  }

  @media (max-width: 480px) {
    ${({ color }) =>
    color === 'light'
      ? `
          padding-top: clamp(0px, 66.66vw, 320px) !important;
          .image{
            max-width: 80vw;
          }
        `
      : null}
  }

  @media (max-width: 640px) {
    min-height: 640px;
    padding-top: 220px;
  }

  .image {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    max-height: 100%;
    height: fit-content;
    aspect-ratio: 1.1328125/1;

    img {
      max-height: 100%;
    }
  }
`

const TextBlock = styled.div`
  max-width: 515px;
  position: relative;
  z-index: 1;

  * {
    color: ${({ color }) =>
    color === 'dark' ? 'var(--color-white)' : 'var(--color-blue)'};
  }

  .main-title, .sub-title {
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
  }
  > a {
    margin-top: 30px;
    display: inline-block;
  }
  p + p {
    margin-top: 1.5em;
  }
`

const FeaturedTextOverBg = styled.p`
  font-size: clamp(14px, 1.3177vw, 18px);
  line-height: ${28 / 18};
  font-weight: 600;
  color: var(--color-blue);
  background-color: var(--color-light-gray);
  padding: ${47 / 18}em 80px;
  position: absolute;
  bottom: 10.9vw;
  right: 20.1vw;
  max-width: ${402 / 18}em;
  text-align: center;

  @media (max-width: 1240px) {
    left: clamp(15px, 5.124450951683748vw, 70px);
    top: 80px;
    right: unset;
    bottom: unset;
    width: 320px;
    padding: ${47 / 18}em 10px;
  }

  @media (max-width: 480px) {
    padding: 22px 6px;
    top: 160px;
  }

  @media (max-width: 390px) {
    top: 120px;
    width: 80vw;
  }

  @media (max-width: 320px) {
    top: 100px;
  }
`
