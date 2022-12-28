import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const Button = ({
  children,
  className,
  variant = 'primary',
  to,
  target
}) => (
  <Wrapper
    to={to}
    target={target}
    className={className}
    variant={variant}>
    <span className='button'>{children}</span>
    {variant === 'primary' && (
      <svg
        className='angle'
        xmlns='http://www.w3.org/2000/svg'
        width='8.137'
        height='8.137'
        viewBox='0 0 8.137 8.137'>
        <path
          id='Path_23'
          data-name='Path 23'
          d='M4346.518,95.471l-8.137,8.137h8.137Z'
          transform='translate(-4338.381 -95.471)'
          fill='#141c2b'
        />
      </svg>
    )}
  </Wrapper>
)

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 16px;
  position: relative;
  background-color: ${({ variant }) =>
    variant === 'primary'
      ? 'var(--color-yellow)'
      : 'var(--color-transparent)'};
  color: var(--color-blue);
  max-width: 300px;
  width: 100%;
  text-align: center;

  > span {
    color: var(--color-blue);
  }

  .angle {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`
