import React from "react"
import styled from "styled-components"
import { ImageWithButton } from "../organisms/image-with-button"
import { TextBlock } from "../organisms/text-block"
import { Container } from './../atoms/container'

export default function TwoColumnFlex({ data: { header, title, text, image, link } }) {
    return (
        <Wrapper className="two-column">
            <Container>
                <Content className="two-column-content"> 
                    <ImageWithButton link={link} image={image} />
                    <TextBlock header={header} title={title} text={text} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
`

const Content = styled.div`
    display: flex;
    gap: 100px;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;

`