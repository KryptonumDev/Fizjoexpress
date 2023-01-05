import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'

export default function Faq({ data: { header, title } }) {
  const {
    wpPage: {
      globalneDaneIUstawienia: {
        faq: { pytaniaIOdpowiedzi }
      }
    }
  } = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDo1Mg==" }) {
        globalneDaneIUstawienia {
          faq {
            pytaniaIOdpowiedzi {
              pytanie
              odpowiedz
            }
          }
        }
      }
    }
  `)

  const arr = useMemo(() => {
    let a = []
    pytaniaIOdpowiedzi.forEach(el => {
      a.push({
        "@type": "Question",
        "name": el.pytanie,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": el.odpowiedz
        }
      })
    })
    return a
  }, [pytaniaIOdpowiedzi])

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": arr
  };

  return (
    <Wrapper>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <Container>
        <Content>
          <h2 className='text'>{header}</h2>
          <span
            className='sub-title'
            dangerouslySetInnerHTML={{
              __html: textParser(title)
            }}
          />
          <Grid>
            {pytaniaIOdpowiedzi.map((el) => (
              <Item key={el.pytanie}>
                <summary className='big-text'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: el.pytanie
                    }}
                  />
                  <span className='control'>
                    <svg
                      className='plus'
                      xmlns='http://www.w3.org/2000/svg'
                      width='8.047'
                      height='8.047'
                      viewBox='0 0 8.047 8.047'>
                      <path
                        id='Path_103'
                        data-name='Path 103'
                        d='M5.032-15.275v3.061H2.05v1.925H5.032v3.061H7.115v-3.061H10.1v-1.925H7.115v-3.061Z'
                        transform='translate(-2.05 15.275)'
                        fill='#707070'
                      />
                    </svg>
                    <svg
                      className='minus'
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='2'
                      viewBox='0 0 8 2'>
                      <g
                        id='Rectangle_105'
                        data-name='Rectangle 105'
                        fill='#d2d2d2'
                        strokeWidth='1'>
                        <rect
                          width='8'
                          height='2'
                          stroke='none'
                        />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='7'
                          height='1'
                          fill='none'
                        />
                      </g>
                    </svg>
                  </span>
                </summary>
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: el.odpowiedz
                  }}
                />
              </Item>
            ))}
          </Grid>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2.text {
    font-weight: 700;
    color: var(--color-yellow);
  }
  .sub-title {
    display: block;
    margin-bottom: clamp(
      30px,
      ${(40 / 1366) * 100}vw,
      40px
    );
    margin-top: 10px;
  }
`

const Content = styled.div`
  max-width: 1026px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
`

const Item = styled.details`
  background-color: var(--color-light-gray);
  summary {
  padding: 24px clamp(24px, ${(40 / 1366) * 100}vw, 40px) 0;
  padding-bottom: 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 32px;
    .control {
      min-width: 30px;
      width: 30px;
      height: 30px;
      background-color: transparent;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      svg{
        position: relative;
        z-index: 1;
      }

      &::before{
        content: '';
        position: absolute;
        z-index: 0;
        inset: 0;
        background-color: var(--color-white);
      }

      &::after{
        content: '';
        position: absolute;
        z-index: 0;
        inset: 0;
        background-color: var(--color-yellow);
        transform: translateY(100%);
        transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }
  }

  .text {
  padding: 0 clamp(24px, ${(40 / 1366) * 100}vw, 40px) 24px ;
  }

  .minus {
    display: none;
  }

  &[open] {
    summary{
      padding-bottom: clamp(20px, ${(32 / 1366) * 100}vw, 32px);
    }
    .minus {
      display: block;
    }
    .plus {
      display: none;
    }
  }

  path, g{
    transition: stroke .2s cubic-bezier(0.39, 0.575, 0.565, 1), fill .2s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  summary:hover{
    .control::after{
      transform: unset;
    }
    svg{
      path, g{
        stroke: var(--colro-blue);
        fill: var(--color-blue);
      }
    }
  }
`
