import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from "../helpers/text-parser"

export default function Hero({ data: { header, title, noResults, text } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h1 className="small-header">{header}</h1>
                    <div className="flex">
                        <span className="sub-title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top: 0;
`

const Content = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: clamp(40px, ${60 / 1366 * 100}vw, 60px) 0 0 0;
    position: relative;

    .sub-title{
        min-width: 300px;

        @media (max-width: 640px) {
            min-width: unset;
            margin-bottom: 20px;
        }
    }

    .flex{
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
        padding-top: 10px;
        gap: 20px;

        @media (max-width: 640px){
            display: block;
        }
    }

    &::after{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: var(--color-light-gray);
    }

    .text{
        max-width: 400px;
        width: 100%;
    }
`

