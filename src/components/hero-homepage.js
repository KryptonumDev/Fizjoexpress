import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from './../helpers/text-parser'

export default function Hero({
  colorVariant = 'dark',
  headerVariant = 'bigger',
  data: {
    heroTitle,
    heroText,
    text,
    buttonLink,
    zdjecieWTle,
    featuredTextOverBg
  }
}) {
  console.log(featuredTextOverBg)
  return (
    <Wrapper color={colorVariant}>
      <Container>
        <TextBlock color={colorVariant}>
          <span className='text'>{text}</span>
          <h1
            className={
              headerVariant === 'bigger'
                ? 'main-title'
                : 'sub-title'
            }
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
          {buttonLink?.url && (
            <Link
              className='button'
              to={buttonLink.url}
              target={
                buttonLink.target ? buttonLink.target : null
              }>
              {buttonLink.title}
            </Link>
          )}
        </TextBlock>
        <GatsbyImage
          className='image'
          loading='eager'
          image={
            zdjecieWTle.localFile.childImageSharp
              .gatsbyImageData
          }
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
    color === 'dark'
      ? 'var(--color-blue)'
      : 'var(--color-white)'};
  min-height: 768px;
  position: relative;
  padding-top: 240px;
  box-sizing: border-box;

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
  position: relative;
  z-index: 1;
  max-width: 515px;
  * {
    color: ${({ color }) =>
      color === 'dark'
        ? 'var(--color-white)'
        : 'var(--color-blue)'};
  }
  span {
    color: var(--color-yellow);
  }
  h1 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  a {
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
  padding: ${47 / 18}em ${10 / 18}em;
  position: absolute;
  bottom: 10.9vw;
  right: 20.1vw;
  max-width: ${402 / 18}em;
  text-align: center;
`
