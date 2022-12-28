import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 1366px;
  padding: 0 70px;
  margin: 0 auto;

  ${({ heroWithImageContainer }) =>
    heroWithImageContainer &&
    css`
      margin: 0;
      display: flex;
    `}
`
