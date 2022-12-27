import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../helpers/text-parser'

export default function Hero({ data: { heroTitle, heroText, text, buttonLink, zdjecieWTle } }) {
    return (
        <Wrapper>
            <Container>
                <TextBlock>
                    <span className="text">{text}</span>
                    <h1 className="main-title" dangerouslySetInnerHTML={{ __html: textParser(heroTitle) }}/>
                    <p className="text" dangerouslySetInnerHTML={{ __html: textParser(heroText) }}/>
                    {buttonLink?.url && <Link className="button" to={buttonLink.url} target={buttonLink.target ? buttonLink.target : null}>{buttonLink.title}</Link>}
                </TextBlock>
                <GatsbyImage className="image" loading="eager" image={zdjecieWTle.localFile.childImageSharp.gatsbyImageData} alt={zdjecieWTle.altText}/>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-blue);
    min-height: 768px;
    position: relative;
    padding-top: 240px;
    box-sizing: border-box;

    .image{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
        max-height: 100%;
        height: fit-content;
        aspect-ratio: 1.1328125/1;

        img{
            max-height: 100%;
        }
    }
`

const TextBlock = styled.div`
    position: relative;
    z-index: 1;
    max-width: 515px;
    *{
        color: var(--color-white);
    }
    span{
        color: var(--color-yellow);
    }
    h1{
        margin-top: 10px;
        margin-bottom: 20px;
    }
    a{
        margin-top: 30px;
    }
`