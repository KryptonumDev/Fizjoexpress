import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { TwoColumnFlexVariants } from "../constants/two-column-flex-variants"
import { Button } from "../moleculas/link"
import { TextBlock } from "../organisms/text-block"

export default function Reserve({ data: { header, title, text, link, steps } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="text-wrap">
                        <TextBlock
                            header={header}
                            title={title}
                            text={text}
                            link={false}
                            cytate={false}
                            variant={TwoColumnFlexVariants.buttonUnderText}
                        />
                        <Button className={'white'}>{link.title}</Button>
                    </div>
                    <Steps>
                        {steps.map((el, index) => (
                            <Step>
                                <span className="bix-text">{index + 1}</span>
                                <p className="text">{el.nazwaKroku}</p>
                            </Step>
                        ))}
                    </Steps>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Steps = styled.div`
    display: grid;
    grid-gap: 20px;
    position: relative;

    margin: var(--margin-intersection) 0;
    margin-right: 100px;

    &::after{
        content: '';
        position: absolute;
        left: 25px;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: var(--color-yellow);
    }
`

const Step = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 50px auto;
    grid-gap: 30px;

    span{
        width: 50px;
        height: 50px;
        background-color: var(--color-yellow);
        color: var(--color-blue);
        position: relative;
        z-index: 3;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text{
        font-size: 13px;
        font-weight: 600;
    }
`

const Wrapper = styled.section`
    margin-top: var(--margin-intersection);
    background-color: var(--color-blue);
    padding-top: 0;

    *{
        color: var(--color-white);
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 100px;

    .text-wrap{
        position: relative;
        padding-left: 100px;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .text-block{
            position: relative;
            z-index: 2;
        }

        &::after{
            content: "";
            position: absolute;
            width: 208px;
            height: 208px;
            background-color: #212939;
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`