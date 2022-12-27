import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const Button = ({
  children,
  className,
  to,
  target
}) => (
  <Wrapper className={className} to={to} target={target}>
    <span className='button'>{children}</span>
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
  </Wrapper>
)

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 16px;
  position: relative;
  background-color: var(--color-yellow);
  max-width: 300px;
  width: 100%;

  .angle {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`
