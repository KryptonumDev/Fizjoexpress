import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'
import { Button } from '../moleculas/link'

export default function CtaBackground({
  data: { title, firstButton, secondButton, background }
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <span className='yellow' />
          {background && (
            <GatsbyImage
              image={background.localFile.childImageSharp.gatsbyImageData}
              alt={background.altText}
              className='image'
            />
          )}
          <div className='content-box'>
            <h2
              className='sub-title'
              dangerouslySetInnerHTML={{ __html: textParser(title) }}></h2>
            <Buttons>
              <Button
                to={firstButton?.url}
                title={firstButton?.title}
                className='link white'>
                {firstButton.title}
              </Button>
              <Button
                to={secondButton?.url}
                title={secondButton?.title}
                className={'link'}>
                {secondButton.title}
              </Button>
            </Buttons>
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .sub-title {
    color: var(--color-white);
    text-align: center;
  }
`

const Content = styled.div`
  padding: 70px 0;
  position: relative;
  gap: 40px;
  background-color: var(--color-blue);

  .yellow {
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
    background-color: var(--color-yellow);
  }

  .image {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .content-box {
    position: relative;
    z-index: 3;
    padding: 0;
  }
`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;

  .link {
    width: 266px;
  }

  @media (max-width: 764px) {
    grid-template-columns: 1fr;
  }
`
