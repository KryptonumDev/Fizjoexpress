import React from 'react'
import styled from 'styled-components'
import { Link } from '../components/transition-link'

export const Button = ({
  children,
  className,
  variant = 'primary',
  to = '/',
  target
}) => {
  const internal = /^\/(?!\/)/.test(to)
  return (
    <Wrapper
      className={className}
      variant={variant}>
      <Link
        to={to}
        target={internal ? null : target}
        className='absolute'
      >
      </Link>
      <span className='button'>{children}</span>
      {(variant === 'primary' || variant === 'white' || variant === 'white-alt') && (
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
}

const Wrapper = styled.span`
  padding: 26px 16px;
  position: relative;
  background-color: transparent;
  color: var(--color-blue);
  max-width: 300px;
  overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

  .absolute{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 3;
  }

  &:focus-visible {
    outline: 2px solid ${props => (props.variant === 'white' || props.variant === 'white-alt') ? 'var(--color-yellow)' : 'var(--color-blue)'};
  }

  &::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--color-yellow)' : variant === 'white-alt' ? 'var(--color-yellow)' : 'var(--color-white)'};
    z-index: 0;
  }

  &::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--color-blue)' : variant === 'white-alt' ? 'var(--color-white)' : 'var(--color-yellow)'};
    z-index: 0;
    transform: translateY(100%);
    transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  span{
    color: var(--color-blue);
  }

  path{
    fill: ${({ variant }) =>
    variant === 'primary' ? 'var(--color-blue)' : variant === 'white-alt' ? 'var(--color-blue)' : 'var(--color-yellow)'};
  }

&:hover{
  span{
    color: ${({ variant }) =>
    variant === 'primary' ? '#fff' : 'var(--color-blue)'};
  }
  path{
    fill: ${({ variant }) =>
    variant === 'primary' ? 'var(--color-yellow)' : 'var(--color-blue)'};
    }
  &::after{
    transform: unset;
  }
    .angle {
      right: 5px;
      bottom: 5px;
    }
}

span, path{
  position: relative;
  z-index: 1;
  transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
}


  @media (max-width: 520px) {
    width: fit-content;
    min-width: 200px;
    padding: 22px 8px;
  }

  width: 100%;
  text-align: center;

  > span {
    color: var(--color-blue);
  }

  .angle {
    position: absolute;
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    right: 10px;
    bottom: 10px;
    z-index: 2;
  }
`
