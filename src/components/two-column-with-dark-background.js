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
    overflow: hidden;

    
    @media (max-width: 968px) {
        .text-block{
            max-width: 640px;
        }
    }
`

const Content = styled.div`
    padding: 70px 0;
    padding-left: clamp(30px, ${100 / 1366 * 100}vw, 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(30px, ${100 / 1366 * 100}vw, 100px);
    position: relative;

    @media (max-width: 1140px) {
        gap: 50px;
        padding-left: 0;
    }

    @media (max-width: 968px) {
        flex-direction: column-reverse;
        padding: var(--margin-intersection) 0;
    }

    &::after{
        content: '';
        position: absolute;
        background-color: var(--color-blue);
        top: 0;
        bottom: 0;
        right: 100px;
        left: -70px;
        z-index: -1;

        @media (max-width: 968px){
            left: calc(-1 * clamp(15px, ${70 / 1366 * 100}vw, 70px));
            right: calc(-1 * clamp(15px, ${70 / 1366 * 100}vw, 70px));
        }
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
    margin-right: calc(-1 * clamp(15px, ${70 / 1366 * 100}vw, 70px));
    position: relative;

    @media (max-width: 968px){
        margin-left: calc(-1 * clamp(15px, ${70 / 1366 * 100}vw, 70px));
        margin-right: calc(-1 * clamp(15px, ${70 / 1366 * 100}vw, 70px));
    }

    .yellow{
        width: 50px;
        height: 50px;
        background-color: var(--color-yellow);
        position: absolute;
        right: 0;
        top: 0;
    }

`