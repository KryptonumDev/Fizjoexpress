import React, { useRef } from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from "../helpers/text-parser"

import Slider from "react-slick";
import { Control } from "../organisms/slider-control";

export const ProcessSlider = ({ data: { header, title, steps } }) => {
    const slickRef = useRef(null);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Wrapper>
            <Container>
                <Control header={header} title={title} slickRef={slickRef} />
                <Slider ref={slickRef} {...settings}>
                    {steps.map((el, index) => (
                        <Item>
                            <span className="number">{index + 1}</span>
                            <span className="line" />
                            <p className="text semi">{el.nazwaEtapu}</p>
                            <p className="text regular" dangerouslySetInnerHTML={{ __html: textParser(el.trescPodTytulemOpcjonalna) }} />
                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="6.765" height="6.765" viewBox="0 0 6.765 6.765">
                                <path id="Path_207" data-name="Path 207" d="M4345.146,95.471l-6.765,6.765h6.765Z" transform="translate(-4338.381 -95.471)" fill="#141c2b" />
                            </svg>
                        </Item>
                    ))}
                </Slider>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    span{
        font-weight: 700;
        color: var(--color-yellow);
    }
    h2{
        color: var(--color-white);
        margin-top: 10px;
    }
    .header{
    }

    .slick-slider{
        margin: 0 100px;
    }

`

const Item = styled.div`
    background-color: var(--color-light-gray);
    aspect-ratio: 1/1;
    position: relative;
    max-width: 248px;
    min-height: 200px;

    .semi{
        font-weight: 600;
        margin-top: 80px;
    }

    .regular{
        margin-top: 20px;
    }

    .text{
        color: var(--color-blue);
        margin-left: 30px;
        margin-right: 30px;
        line-height: 170%;

        *{
            color: var(--color-blue);
        }
    }

    .line{
        width: 64px;
        height: 1px;
        position: absolute;
        left: 32px;
        bottom: 32px;
        background-color: var(--color-yellow) !important;
    }

    .number{
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: var(--color-yellow);
        left: 0;
        top: 0;
        color: var(--color-blue);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .arrow{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
`