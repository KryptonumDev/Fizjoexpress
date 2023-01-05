import { graphql, Link } from 'gatsby'
import React, { useMemo } from 'react'
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

    const nodes = useMemo(() => {
        let pages = allSitePage.nodes.filter(el => !el.path.includes('404') && el.path.includes('blog') && el.componentChunkName !== 'component---src-pages-blog-wp-post-slug-js')
        let namedPages = pages.map(el => {
            if (el.path === '/blog/') {
                return { path: el.path, name: 'Blog' }
            } else {
                let string = el.path.replace('/blog/', '').replace('/', '').split('-').join(' ')
                return { path: el.path, name: string.charAt(0).toUpperCase() + string.slice(1) }
            }
        })

        return namedPages
    }, [allSitePage])

    const posts = useMemo(() => {
        let pages = allSitePage.nodes.filter(el => !el.path.includes('404') && el.path.includes('blog') && el.componentChunkName === 'component---src-pages-blog-wp-post-slug-js')
        let namedPages = pages.map(el => {
            let string = el.path.replace('/blog/', '').replace('/', '').split('-').join(' ')
            return { path: el.path, name: string.charAt(0).toUpperCase() + string.slice(1) }
        })
        return namedPages
    }, [allSitePage])

    return (
        <Wrapper id='content'>
            <Container>
                <h1 className='sub-title'>Strony</h1>
                <Link to='/'>Strona główna</Link>
                <Link to='/jak-dzialamy/'>Jak działamy</Link>
                <Link to='/o-fizjoexpress/'>O fizjoexpress</Link>
                <Link to='/polityka-prywatnosci/'>Polityka prywatności</Link>
                <Link to='/kontakt/'>Kontakt</Link>
                <h2 className='sub-title'>Blog</h2>
                {nodes.map(el => (
                    <Link to={el.path}>{el.name}</Link>
                ))}
                <h2 className='sub-title'>Artykuły</h2>
                {posts.map(el => (
                    <Link to={el.path}>{el.name}</Link>
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

    h1,h2 {
        margin-top: 30px;
    }
`

export default MapaPage

export const mapaQuery = graphql`
  query {
    allSitePage(sort: {path: ASC}) {
      nodes {
        path
        pageContext
        componentChunkName
      }
    }
  }
`
