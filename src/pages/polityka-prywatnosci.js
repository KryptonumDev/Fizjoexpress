import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Aside } from '../components/aside'
import SocialMediaIcons from '../components/social-media-icons'
import { ContentWrapper, SocialWrapper } from './blog/{WpPost.slug}'

const PolitykaPage = ({ data: { global, otherPosts, wpPage: { politykaPrywatnosci: { tresciPolitykiPrywatnosci } } } }) => {
    return (
        <main>
            <MainWrapper>
                <div>
                    <span className='small-header'>{tresciPolitykiPrywatnosci.malyNaglowekNadTytulem}</span>
                    <h1 className='sub-title'>{tresciPolitykiPrywatnosci.tytulSekcji}</h1>
                    <ContentWrapper>
                        <div dangerouslySetInnerHTML={{ __html: tresciPolitykiPrywatnosci.trescPolityki }} />
                    </ContentWrapper>
                </div>
                <Aside posts={otherPosts.nodes} />
                <SocialWrapper>
                    <SocialMediaIcons
                        text='Udostępnij'
                        sectionVariant='light'
                        data={global.globalneDaneIUstawienia.globalneGrafiki}
                    />
                </SocialWrapper>
            </MainWrapper>
        </main>
    )
}

export default PolitykaPage


const MainWrapper = styled(Container)`
  max-width: 1366px;
  margin-top: 40px;
  padding-top: 60px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 2fr 400px;
  grid-column-gap: clamp(80px, 8.2vw, 112px);
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 2fr 300px;
  }
  @media (max-width: 900px) {
    grid-column-gap: clamp(40px, 6.2vw, 72px);
  }

  .small-header, .sub-title{
    margin-left: 100px;

    @media (max-width: 1200px) {
    margin-left: 0;
    }
  }
  .sub-title{
    margin-bottom: 30px;
    margin-top: 10px;
  }
`

export const politykasQuery = graphql`
  query {
    global: wpPage(id: { eq: "cG9zdDo1Mg==" }) {
      globalneDaneIUstawienia {
        globalneGrafiki {
          socialMedia {
            linkDoSocialMedia
            ikonaSocialMedia {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo0NA==" }){
        politykaPrywatnosci {
          tresciPolitykiPrywatnosci {
            malyNaglowekNadTytulem
            tytulSekcji
            trescPolityki
          }
        }
    }
    otherPosts: allWpPost(limit: 2) {
      nodes {
        terms {
          nodes {
            ... on WpCategory {
              name
              slug
            }
          }
        }
        title
        slug
        excerpt
      }
    }
  }
`
