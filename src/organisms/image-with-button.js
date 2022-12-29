import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { TwoColumnFlexVariants } from "../constants/two-column-flex-variants"
import { Button } from "../moleculas/link"

export const ImageWithButton = ({ image, link, variant }) => (
  <Wrapper className='image-block'>
    <GatsbyImage
      className='image'
      image={
        image.localFile.childImageSharp.gatsbyImageData
      }
      alt={image.altText}
    />
    <span className='gray' />
    <span className='yellow' />
    <span className='line' />
    {(link?.url && variant === TwoColumnFlexVariants.buttonOverImage) && (
      <Button
        className='link'
        to={link.url}
        target={link.target ? link.target : null}>
        {link.title}
      </Button> 
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  max-width: 500px;
  /* width: 100%; */
  min-width: 330px;

@media (max-width: 520px) {
  min-width: 280px;
}

    .link{
        margin-left: auto;
        margin-top: -70px;
        width: 300px;
        height: 70px;
        span{
            margin: 0 auto;
        }

        @media (max-width: 1080px) {
          width: calc(100% - 120px);
          max-width: unset;
        }

        @media (max-width: 840px) {
          width: calc(100% - 200px);        
        }

        @media (max-width: 520px) {
          display : none;
        }
    }

  .image {
    margin-left: 100px;
    /* margin-left: 100px; */
    /* width: 100%; */
    max-width: 400px;

    @media (max-width: 1080px) {
      margin-left: 40px;
      max-width: 380px;
    }

    @media (max-width: 840px) {
      max-width: 400px;
      margin-left: 100px;
    }

    @media (max-width: 520px) {
      margin-left: 40px;
      aspect-ratio: 1/1;
    }
  }

  .gray {
    width: 200px;
    height: 200px;
    background-color: var(--color-light-gray);
    position: absolute;
    left: 0;
    bottom: 0;

    @media (max-width: 1080px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 840px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 520px) {
      width: 120px;
      height: 120px;
    }
  }

  .yellow {
    width: 50px;
    height: 50px;
    background-color: var(--color-yellow);
    position: absolute;
    right: 0;
    top: 0;
  }

  .line {
    width: 1px;
    height: 100px;
    background-color: var(--color-blue);
    position: absolute;
    left: 0;
    top: 0;
  }
`
