import React from 'react'
import styled, { css } from 'styled-components'
import { textParser } from '../helpers/text-parser'
import { Button } from '../moleculas/link'

export const TextBlock = ({
  header,
  title,
  text,
  link,
  variant = 'default'
}) => (
  <Wrapper variant={variant} className='text-block'>
    <span className='text'>{header}</span>
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
    {link && (
      <Button to={link.url} target={link.target}>
        {link.title}
      </Button>
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: clamp(392px, 38.4vw, 525px);
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

    ${({ withLine }) =>
      withLine &&
      css`
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
      `}
`
