import React from 'react'
import styled from 'styled-components'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import { Button } from '../moleculas/link'
import { ImageWithButton } from '../organisms/image-with-button'
import { TextBlock } from '../organisms/text-block'
import { Container } from './../atoms/container'

export default function TwoColumnFlex({
  underline = false,
  reverse = false,
  withMapPinIcon = false,
  variant = TwoColumnFlexVariants.buttonUnderText,
  data: { header, title, text, image, link, cytate, underlineText }
}) {
  return (
    <Wrapper className='two-column'>
      <Container>
        <Content
          className={
            reverse ? 'reverse two-column-content' : 'two-column-content'
          }>
          <ImageWithButton link={link} image={image} variant={variant} />
          <div>
            <TextBlock
              header={header}
              title={title}
              text={text}
              link={link}
              cytate={cytate}
              variant={variant}
              underline={underline}
              withMapPinIcon={withMapPinIcon}
            />
            {underlineText && (
              <div
                className='text underline'
                dangerouslySetInnerHTML={{ __html: underlineText }}
              />
            )}

            {link?.url && variant === TwoColumnFlexVariants.buttonOverImage && (
              <Button
                className='link underline-link'
                to={link.url}
                target={link.target ? link.target : null}>
                {link.title}
              </Button>
            )}
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .underline-link {
    display: none;
  }

  @media (max-width: 520px) {
    .underline-link {
      display: block;
      margin-top: 30px;
    }
  }
`

const Content = styled.div`
  display: flex;
  gap: clamp(0px, ${(100 / 1366) * 100}vw, 100px);
  justify-content: space-between;
  align-items: center;
  margin-right: clamp(0px, ${(100 / 1366) * 100}vw, 100px);

  &.reverse {
    flex-direction: row-reverse;
    margin-right: 0;
    margin-left: clamp(0px, ${(100 / 1366) * 100}vw, 100px);
    .image-block {
    }
  }

  @media (max-width: 1140px) {
    margin-right: 0;
    margin-left: 0 !important;
    gap: 50px;
  }

  @media (max-width: 840px) {
    flex-direction: column !important;
  }

  .underline {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    margin-top: 40px;
    padding-top: 40px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100px;
      height: 1px;
      top: 0;
      background-color: var(--color-blue);
    }
  }
`
