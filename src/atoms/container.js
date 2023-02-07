import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 clamp(15px, ${(70 / 1366) * 100}vw, 70px);
  margin: 0 auto;
  @media (max-width: 407px) {
    padding-bottom: 32px;
  }

  ${({ heroWithImageContainer }) =>
    heroWithImageContainer &&
    css`
      display: flex;
    `}
`
