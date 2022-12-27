import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from "../helpers/text-parser"

export const ProcessSlider = ({ data: {header, title, steps} }) => {
    return (
        <Wrapper>
            <Container>
                <span className="text">{header}</span>
                <h2 className="sub-title" dangerouslySetInnerHTML={{__html: textParser(title)}}/>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    span{
        font-weight: 700;
        color: var(--color-yellow);
    }
    h2{
        color: var(--color-white);
        margin-bottom: 30px;
    }
`