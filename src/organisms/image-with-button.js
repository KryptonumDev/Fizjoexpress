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

    .link{
        margin-left: auto;
        margin-top: -70px;
        width: 300px;
        height: 70px;
        span{
            margin: 0 auto;
        }
    }

  .image {
    margin-left: 100px;
    width: 400px;
  }

  .gray {
    width: 200px;
    height: 200px;
    background-color: var(--color-light-gray);
    position: absolute;
    left: 0;
    bottom: 0;
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
