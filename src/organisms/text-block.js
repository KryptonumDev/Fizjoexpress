import { Link } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import { textParser } from '../helpers/text-parser'
import { Button } from '../moleculas/link'

export const TextBlock = ({
  header,
  title,
  text,
  link,
  cytate,
  variant = 'default'
}) => {
  return (
    <Wrapper
      id={cytate ? 'cytate' : ''}
      variant={variant}
      className={
        variant === TwoColumnFlexVariants.buttonUnderText ||
        variant === TwoColumnFlexVariants.blogPost
          ? 'text-block'
          : 'text-block with-line'
      }>
      {variant === TwoColumnFlexVariants.blogPost ? (
        <ul className='category-wrapper'>
          {header.map((category) => (
            <li className='text header'>
              <Link to={`/blog/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span className='text header'>{header}</span>
      )}
      <h2
        className='sub-title'
        dangerouslySetInnerHTML={{
          __html: textParser(title)
        }}
      />
      <div
        className='text'
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {cytate && (
        <div className='cytate'>
          <span className='big-text'>{cytate}</span>
          <svg
            className='first'
            xmlns='http://www.w3.org/2000/svg'
            width='59.505'
            height='51.005'
            viewBox='0 0 59.505 51.005'>
            <g
              id='quote'
              transform='translate(59.505 51.005) rotate(180)'>
              <path
                id='Path_130'
                data-name='Path 130'
                d='M0,25.5V51H25.5V25.5H8.5a17.021,17.021,0,0,1,17-17V0A25.53,25.53,0,0,0,0,25.5Z'
                transform='translate(0 0)'
                fill='#e9e9e9'
              />
              <path
                id='Path_131'
                data-name='Path 131'
                d='M25.5,8.5V0A25.53,25.53,0,0,0,0,25.5V51H25.5V25.5H8.5A17.021,17.021,0,0,1,25.5,8.5Z'
                transform='translate(34.003)'
                fill='#e9e9e9'
              />
            </g>
          </svg>
          <svg
            className='second'
            id='quote'
            xmlns='http://www.w3.org/2000/svg'
            width='59.505'
            height='51.005'
            viewBox='0 0 59.505 51.005'>
            <path
              id='Path_130'
              data-name='Path 130'
              d='M0,25.5V51H25.5V25.5H8.5a17.021,17.021,0,0,1,17-17V0A25.53,25.53,0,0,0,0,25.5Z'
              transform='translate(0 0)'
              fill='#e9e9e9'
            />
            <path
              id='Path_131'
              data-name='Path 131'
              d='M25.5,8.5V0A25.53,25.53,0,0,0,0,25.5V51H25.5V25.5H8.5A17.021,17.021,0,0,1,25.5,8.5Z'
              transform='translate(34.003)'
              fill='#e9e9e9'
            />
          </svg>
        </div>
      )}
      {link?.url &&
        variant ===
          TwoColumnFlexVariants.buttonUnderText && (
          <Button to={link.url} target={link.target}>
            {link.title}
          </Button>
        )}
      {variant === TwoColumnFlexVariants.blogPost && (
        <a
          href='#blog-content'
          className='read-more btn--triangle'>
          Czytaj dalej
        </a>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: clamp(392px, 38.4vw, 525px);
  position: relative;

  .header {
    color: var(--color-yellow) !important;
  }

  &#cytate {
    padding-bottom: 70px;
  }

  .cytate {
    padding: 65px 61px;
    background-color: var(--color-light-gray);
    position: relative;

    span {
      position: relative;
      z-index: 2;
      text-align: center;
      font-style: italic;
    }

    .first {
      left: 50px;
      top: 50px;
      position: absolute;
      z-index: 1;
    }

    .second {
      right: 50px;
      bottom: 50px;
      position: absolute;
      z-index: 1;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ variant }) =>
    variant === 'darkWithButton' &&
    css`
      position: relative;
      :after {
        content: '';
        width: clamp(140px, 15.22vw, 208px);
        height: clamp(140px, 15.22vw, 208px);
        background-color: var(--color-dark-gray);
        position: absolute;
        left: calc(-0.5 * clamp(140px, 15.22vw, 208px));
        top: calc(-0.35 * clamp(140px, 15.22vw, 208px));
        z-index: -1;
      }
      p,
      h2,
      div.text {
        color: var(--color-white);
      }
      span.text {
        color: var(--color-yellow);
      }
    `}

  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  div {
    display: grid;
    grid-gap: 16px;
    padding-bottom: 40px;
    position: relative;
  }

  &.with-line {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      max-width: 310px;
      bottom: 0;
      height: 1px;
      background-color: var(--color-yellow);
    }
  }
`
