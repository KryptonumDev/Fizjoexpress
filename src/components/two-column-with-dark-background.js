import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { TwoColumnFlexVariants } from "../constants/two-column-flex-variants"
import { textParser } from "../helpers/text-parser"
import { TextBlock } from "../organisms/text-block"

export default function TwoColumnWithDarkBackground({ variant = TwoColumnFlexVariants.buttonUnderText, data: { image, header, title, text, link } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextBlock
                        header={header}
                        title={title}
                        text={text}
                        link={link}
                        variant={variant}
                    />
                    <ImageBlock>
                        <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                        <span className="yellow" />
                    </ImageBlock>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Content = styled.div`
    padding: 70px 0;
    padding-left: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        background-color: var(--color-blue);
        top: 0;
        bottom: 0;
        right: 100px;
        left: -70px;
        z-index: -1;
    }

    .text-block{
        *{
            color: var(--color-white);
        }
        a span{
            color: var(--color-blue);
        }
    }
`

const ImageBlock = styled.div`
    margin-right: -70px;
    position: relative;

    .yellow{
        width: 50px;
        height: 50px;
        background-color: var(--color-yellow);
        position: absolute;
        right: 0;
        top: 0;
    }

`