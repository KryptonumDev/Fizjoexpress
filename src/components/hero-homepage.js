import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Button } from '../moleculas/link'
import { textParser } from './../helpers/text-parser'

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
          <span className='small-header'>{text}</span>
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
            <Button
              className='button'
              to={buttonLink.url}
              target={
                buttonLink.target ? buttonLink.target : null
              }>
              {buttonLink.title}
            </Button>
          )}
          {buttonLinkSecond?.url && (
            <Link
              className='button'
              to={buttonLinkSecond.url}
              target={
                buttonLinkSecond.target ? buttonLinkSecond.target : null
              }>
              {buttonLinkSecond.title}
            </Link>
          )}
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

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: clamp(16px, 1.61vw, 22px);
  margin-top: 60px;
  align-items: center;
  position: absolute;
  bottom: clamp(24px, 2.34vw, 32px);

  > span {
    color: ${({ color }) =>
    color === 'dark'
      ? 'var(--color-white)'
      : 'var(--color-blue)'};
    font-weight: 300;
    font-size: 12px;
  }

  > ul {
    display: flex;
    gap: clamp(16px, 1.757vw, 24px);
  }
`

const SocialMediaIcons = ({
  sectionVariant = 'dark',
  data: { socialMedia }
}) => {
  return (
    <SocialMediaWrapper color={sectionVariant}>
      <span>Social Media</span>
      <ul>
        {socialMedia.map(
          ({ linkDoSocialMedia, ikonaSocialMedia }) => (
            <li key={linkDoSocialMedia}>
              <a href={linkDoSocialMedia}>
                <img
                  src={ikonaSocialMedia.localFile.publicURL}
                  alt={linkDoSocialMedia}
                />
              </a>
            </li>
          )
        )}
      </ul>
    </SocialMediaWrapper>
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
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

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
    color === 'dark'
      ? 'var(--color-white)'
      : 'var(--color-blue)'};
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 20px;
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
  padding: ${47 / 18}em ${10 / 18}em;
  position: absolute;
  bottom: 10.9vw;
  right: 20.1vw;
  max-width: ${402 / 18}em;
  text-align: center;
`
