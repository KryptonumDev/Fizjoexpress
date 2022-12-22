import React from "react"
import styled from "styled-components"
import { ImageWithButton } from "../organisms/image-with-button"
import { Container } from './../atoms/container'

export default function TwoColumnFlex() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    {/* <ImageWithButton /> */}
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Content = styled.div`
    display: grid;
    grid-template-columns: 500fr 525fr;
    grid-gap: 100px;
`