import { GatsbyImage } from "gatsby-plugin-image"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { Control } from "../organisms/slider-control"

export default function TeamSlider({ data: { header, title, team } }) {
    const slickRef = useRef(null);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Wrapper>
            <Container>
                <Control white={true} header={header} title={title} slickRef={slickRef} />
                <Slider ref={slickRef} {...settings}>
                    {team.map(el => (
                        <Item>
                            <GatsbyImage image={el.dodatkowePolaAutora.zdjecieAutora.localFile.childImageSharp.gatsbyImageData} alt={el.dodatkowePolaAutora.zdjecieAutora.altText} />
                            {el.name}
                        </Item>
                    ))}
                </Slider>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Item = styled.div`
    max-width: calc(100% - 10px);
    transform: translateX(5px);
`