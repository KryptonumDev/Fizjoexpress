import React from 'react'
import styled from 'styled-components'
import { ImageWithButton } from '../organisms/image-with-button'
import { TextBlock } from '../organisms/text-block-blog'
import { Container } from '../atoms/container'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import { Link } from './transition-link'

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
          <div className='desctop'>
            <ImageWithButton
              image={image}
              variant={TwoColumnFlexVariants.blogPost}
            />
          </div>
          <div className='text-content'>
            <TextBlock
              image={image}
              variant={TwoColumnFlexVariants.blogPost}
              header={categories}
              title={title}
              text={text}
            />
            <div className='blog-post-data'>
              <div className='authors-wrapper'>
                <p className='data'>
                  {authors?.length > 1 ? 'Autorzy:' : 'Autor'}
                </p>
                <div className='authors'>
                  {authors?.map((author, index) => (
                    <React.Fragment key={author.name + index}>
                      <Link
                        to={
                          '/o-fizjoexpress/#' +
                          author.name
                            .toLowerCase()
                            .trim()
                            .replace(/[^\w\s-]/g, '')
                            .replace(/[\s_-]+/g, '-')
                            .replace(/^-+|-+$/g, '')
                        }
                        className='data data--post-data'>
                        {author.name}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <p className='data'>
                Dodano
                <span className='data data--post-data'>{date}</span>
              </p>
            </div>
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .mobile {
    display: none;
  }

  @media (max-width: 840px) {
    .desctop {
      display: none;
    }
    .mobile {
      display: block;
    }
    .image-block {
      padding-bottom: 0;
    }
  }
`

const Content = styled.div`
  display: flex;
  gap: clamp(60px, 7.32vw, 100px);
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;

  @media (max-width: 840px) {
    display: block;
  }

  &.reverse {
    flex-direction: row-reverse;
    margin-right: 0;
    margin-left: 100px;

    @media (max-width: 1200px) {
      margin-left: 0;
    }
  }

  &.align-bottom {
    align-items: flex-end;
  }

  .text-content {
    max-width: clamp(320px, 29.4vw, 404px);

    @media (max-width: 840px) {
      max-width: unset;
    }
  }

  .blog-post-data {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(24px, 2.7vw, 37px);
    padding-top: clamp(30px, 3vw, 40px);
    margin-top: clamp(50px, 4.97vw, 68px);
    border-top: 1px solid var(--color-darker-light-gray);

    .data {
      color: var(--color-text-light-gray);
      font-size: 14px;
      font-weight: 400;
      line-height: 1.3;
      &--post-data {
        color: var(--color-blue);
        font-weight: bold;
        line-height: 1.3;
      }

      > span {
        margin-left: 10px;
      }
    }
  }

  .authors-wrapper {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .authors {
    display: flex;
    flex-direction: column;
    gap: 3px;
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
