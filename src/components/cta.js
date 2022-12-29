import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from "../helpers/text-parser"
import { Button } from './../moleculas/link'

export default function Cta({ gray, data: { text, linkOne, linkTwo } }) {
    return (
        <Wrapper className="cta">
            <Container>
                <TextBlock className={gray ? 'gray' : ''}>
                    <div className="big-text" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    <Buttons>
                        <Button>{linkOne.title}</Button>
                        <a className="link button">{linkTwo.title}</a>
                    </Buttons>
                </TextBlock>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .big-text{
        font-weight: 300;
        margin-bottom: 36px;
    }
`

const TextBlock = styled.div`
    background-color: var(--color-light-gray);
    padding: clamp(40px, ${70 / 1366 * 100}vw, 70px) clamp(20px, ${90 / 1366 * 100}vw, 90px);
    position: relative;
    margin: 0 100px 0 auto;
    max-width: 1026px;

    @media (max-width: 1080px) {
        margin-right: 40px;
    }

    @media (max-width: 768px) {
        margin: 0;
    }

    &::after{
        content: "";
        position: absolute;
        right: -100px;
        top: 50%;
        transform: translateY(-50%);
        height: 100px;
        width: 1px;
        background-color: var(--color-white);

        @media (max-width: 1080px) {
            right: -40px;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    &.gray{
        &::before{
            content: "";
            position: absolute;
            left: -100px;
            top: 50%;
            transform: translateY(-50%);
            height: 100px;
            width: 1px;
                background-color: var(--color-yellow);
        }
        &::after{
            background-color: var(--color-yellow);
        }
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;

    
    @media (max-width: 640px) {
        display: grid;
        grid-gap: 30px;
    }

    .link{
        position: relative;
        font-weight: 700;

        &::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 80px;
            height: 2px;
            background-color: var(--color-blue);
        }
    }
`