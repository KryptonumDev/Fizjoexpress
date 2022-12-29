import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"

export default function Archive({ categories, posts }) {
    return (
        <Wrapper>
            <Container>
                <Content>

                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Content = styled.div`
    max-width: 1206px;
    margin: 0 auto;
`