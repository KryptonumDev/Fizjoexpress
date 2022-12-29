import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 clamp(15px, ${70 / 1366 * 100}vw, 70px);
  margin: 0 auto;

  ${({ heroWithImageContainer }) =>
    heroWithImageContainer &&
    css`
      display: flex;
    `}
`
