import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Button } from '../moleculas/link'
import { TextBlock } from '../organisms/text-block'

const DarkFeaturedSectionWithPhoto = ({
  smallHeader,
  sectionTitle,
  textUnderTitle,
  button,
  horizontalImage
}) => {
  return (
    <SectionWrapper>
      <DarkFeaturedSectionContainer>
        <TextBlock
          header={smallHeader}
          title={sectionTitle}
          text={textUnderTitle}
          link={button}
          variant='darkWithButton'
        />
        <GatsbyImage
          className='horizontal-img'
          alt={horizontalImage.altText}
          image={
            horizontalImage.localFile.childImageSharp
              .gatsbyImageData
          }
        />
      </DarkFeaturedSectionContainer>
    </SectionWrapper>
  )
}

export default DarkFeaturedSectionWithPhoto

const DarkFeaturedSectionContainer = styled(Container)`
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(80px, 8.23vw, 113px);
  position: relative;
  z-index: 1;

  .text-wrapper {
    h2,
    p {
      color: var(--color-white);
    }
  }
`
const SectionWrapper = styled.section`
  background-color: var(--color-blue);
  position: relative;

  padding: clamp(40px, 5.85vw, 80px) 0;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    width: clamp(120px, 12.8vw, 175px);
    height: 100%;
    background-color: var(--color-white);
  }
`
