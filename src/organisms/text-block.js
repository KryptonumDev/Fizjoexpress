import React from "react"
import styled from "styled-components"
import { textParser } from "../helpers/text-parser"

export const TextBlock = ({ header, title, text }) => (
    <Wrapper className="text-block">
        <span className="text">{header}</span>
        <h2 className="sub-title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
        <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
    </Wrapper>
)

const Wrapper = styled.div`
    max-width: 525px;
    
    span{
        color: var(--color-yellow);
        font-weight: 700;
    }

    h2{
        margin-top: 10px;
        margin-bottom: 20px;
    }

    div{
        display: grid;
        grid-gap: 16px;
        padding-bottom: 40px;
        position: relative;

        &::after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            max-width: 310px;
            bottom: 0;
            height: 1px;
            background-color: var(--color-yellow);
        }
    }
`