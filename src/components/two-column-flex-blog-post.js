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
              ? 'reverse two-column-content align-bottom'
              : 'two-column-content align-bottom'
          }>
          <ImageWithButton
            image={image}
            variant={TwoColumnFlexVariants.blogPost}
          />
          <div className='text-content'>
            <TextBlock
              variant={TwoColumnFlexVariants.blogPost}
              header={categories}
              title={title}
              text={text}
            />
            <div className='blog-post-data'>
              <p className='data'>
                {authors?.length > 1 ? 'Autorzy:' : 'Autor'}
                {authors?.map((author) => (
                  <span className='data data--post-data'>
                    {author.name}
                  </span>
                ))}
              </p>
              <p className='data'>
                Dodano
                <span className='data data--post-data'>
                  {date}
                </span>
              </p>
            </div>
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

  &.align-bottom {
    align-items: flex-end;
  }

  .text-content {
    max-width: clamp(320px, 29.4vw, 404px);
  }

  .blog-post-data {
    display: flex;
    gap: clamp(24px, 2.7vw, 37px);
    padding-top: clamp(30px, 3vw, 40px);
    margin-top: clamp(50px, 4.97vw, 68px);
    border-top: 1px solid var(--color-darker-light-gray);

    .data {
      color: var(--color-text-light-gray);
      font-size: 12px;
      font-weight: 400;
      &--post-data {
        margin-left: 10px;
        color: var(--color-blue);
        font-weight: bold;
      }
    }
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

  .blog-post-data {
    width: 100%;
  }
`
