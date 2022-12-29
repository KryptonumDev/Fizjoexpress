import React from 'react'
import styled from 'styled-components'
import { ImageWithButton } from '../organisms/image-with-button'
import { TextBlock } from '../organisms/text-block'
import { Container } from '../atoms/container'
import { Link } from 'gatsby'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'

export default function TwoColumnFlexBlogPost({
  reverse = true,
  data: { categories, title, text, image, authors, date }
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
            image={image}
            variant={TwoColumnFlexVariants.blogPost}
          />
          <div>
            <TextBlock
              variant='blogPost'
              header={categories}
              title={title}
              text={text}
            />
            <p>test</p>
          </div>
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

  .underline {
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
