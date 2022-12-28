import React from 'react'
import styled from 'styled-components'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import { ImageWithButton } from '../organisms/image-with-button'
import { TextBlock } from '../organisms/text-block'
import { Container } from './../atoms/container'

export default function TwoColumnFlex({
  reverse = false,
  variant = TwoColumnFlexVariants.buttonUnderText,
  data: { header, title, text, image, link, cytate }
}) {
  return (
    <Wrapper className='two-column'>
      <Container>
        <Content
          className={
            reverse
              ? 'reverse two-column-content'
              : 'two-column-content'
          }>
          <ImageWithButton
            link={link}
            image={image}
            variant={variant}
          />
          <TextBlock
            header={header}
            title={title}
            text={text}
            link={link}
            cytate={cytate}
            variant={variant}
          />
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Content = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;

  &.reverse {
    flex-direction: row-reverse;
    margin-right: 0;
    margin-left: 100px;
  }
`
