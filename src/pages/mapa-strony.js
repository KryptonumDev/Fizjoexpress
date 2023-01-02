import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Container } from '../atoms/container'

export function Head({ data }) {
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'pl' }} />
        </>
    )
}

const MapaPage = ({ data: { allSitePage } }) => {

    const nodes = allSitePage.nodes.filter(el => !el.path.includes('404'))

    return (
        <Wrapper id='content'>
            <Container>
                {nodes.map(el => (
                    <Link to={el.path}>{el.path}</Link>
                ))}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    a{
        display: block;
        margin-top: 30px;

        &:last-child{
            margin-bottom: 30px;
        }
    }
`

export default MapaPage

export const mapaQuery = graphql`
  query {
    allSitePage(sort: {path: ASC}) {
      nodes {
        path
        pageContext
      }
    }
  }
`
