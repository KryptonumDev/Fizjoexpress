import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/header'
import GlobalStyles from './../styles/global'

export default function Layout({ children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  min-height: 100vh;
`
