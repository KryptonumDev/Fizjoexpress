import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'

export default function Faq({ data: { header, title } }) {

    const { wpPage: { globalneDaneIUstawienia: { faq: { pytaniaIOdpowiedzi } } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo1Mg=="}) {
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

    return (
        <Wrapper>
            <Container>
                <span className='text'>{header}</span>
                <h2 className='sub-title' dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Grid>
                    {pytaniaIOdpowiedzi.map(el => (
                        <Item>
                            <summary className='big-text' >
                                <div dangerouslySetInnerHTML={{ __html: el.pytanie }} />
                                <span className='control' >
                                    <svg className='plus' xmlns="http://www.w3.org/2000/svg" width="8.047" height="8.047" viewBox="0 0 8.047 8.047">
                                        <path id="Path_103" data-name="Path 103" d="M5.032-15.275v3.061H2.05v1.925H5.032v3.061H7.115v-3.061H10.1v-1.925H7.115v-3.061Z" transform="translate(-2.05 15.275)" fill="#707070" />
                                    </svg>
                                    <svg className='minus' xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2">
                                        <g id="Rectangle_105" data-name="Rectangle 105" fill="#fff" stroke="#d2d2d2" stroke-width="1">
                                            <rect width="8" height="2" stroke="none" />
                                            <rect x="0.5" y="0.5" width="7" height="1" fill="none" />
                                        </g>
                                    </svg>
                                </span>
                            </summary>
                            <div className='text' dangerouslySetInnerHTML={{ __html: el.odpowiedz }} />
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    span.text{
        margin: 0 100px;
        font-weight: 700;
        color: var(--color-yellow);
    }
    h2{
        margin: 0 100px;
        margin-bottom: 40px;
        margin-top: 10px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    margin: 0 100px;
`

const Item = styled.details`
padding: 24px 40px;
background-color: var(--color-light-gray);
    summary{
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        gap: 32px;
        .control{
            width: 30px;
            height: 30px;   
            background-color: var(--color-white);

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .text{
        margin-top: 32px;
    }

    .minus{
        display: none;
    }

    &[open]{
        .minus{
            display: block;
        }
        .plus{
            display: none;
        }
    }
`