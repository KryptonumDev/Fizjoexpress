import { graphql, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import Slider from "react-slick";
import styled from "styled-components"
import { Container } from "../atoms/container"
import { Control } from "../organisms/slider-control";

export default function ReviewsSlider({ data: { header, title } }) {
    const slickRef = useRef(null);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            }
        }]
    };

    const { wpPage: { globalneDaneIUstawienia: { opinie: { opinieKlientow } } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo1Mg=="}) {
            globalneDaneIUstawienia {
                opinie {
                    opinieKlientow {
                        data
                        nazwa
                        trescOpinii
                    }
                }
            }
        }
    }
  `)

    return (
        <Wrapper>
            <Container>
                <Control header={header} title={title} slickRef={slickRef} />
                <Content>
                    <Slider ref={slickRef} {...settings}>
                        {opinieKlientow.map(el => (
                            <Item className="reviews-slider-items">
                                <svg className="quote" xmlns="http://www.w3.org/2000/svg" width="59.505" height="51.005" viewBox="0 0 59.505 51.005">
                                    <g id="quote" transform="translate(59.505 51.005) rotate(180)">
                                        <path id="Path_130" data-name="Path 130" d="M0,25.5V51H25.5V25.5H8.5a17.021,17.021,0,0,1,17-17V0A25.53,25.53,0,0,0,0,25.5Z" transform="translate(0 0)" fill="#f8d200" />
                                        <path id="Path_131" data-name="Path 131" d="M25.5,8.5V0A25.53,25.53,0,0,0,0,25.5V51H25.5V25.5H8.5A17.021,17.021,0,0,1,25.5,8.5Z" transform="translate(34.003)" fill="#f8d200" />
                                    </g>
                                </svg>
                                <div className="text" dangerouslySetInnerHTML={{ __html: el.trescOpinii }} />
                                <div className="flex">
                                    <span className="text">
                                        {el.nazwa}
                                    </span>
                                    <span className="text">
                                        {el.data}
                                    </span>
                                </div>
                            </Item>
                        ))}
                    </Slider>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Item = styled.div`
    background-color: var(--color-light-gray);
    padding: 85px clamp(20px, ${40 / 1366 * 100}vw, 40px) clamp(30px, ${50 / 1366 * 100}vw, 50px) clamp(20px, ${40 / 1366 * 100}vw, 40px);
    position: relative;
    max-width: calc(100% - 10px);
    transform: translateX(5px);

    display: flex !important;
    flex-direction: column;
    justify-content: space-between;

    .quote{
        position: absolute;
        left: clamp(20px, ${40 / 1366 * 100}vw, 40px);
        top: 0;
    }

    .text{
        margin-bottom: 30px;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        position: relative;
        padding-bottom: 30px;

        &::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background-color: var(--color-yellow);
        }

        span{
            font-weight: 700;
            color: var(--color-blue) !important;
            margin-bottom: 0;
        }
    }
`

const Wrapper = styled.section`
    span.text{
        color: var(--color-yellow);
        font-weight: 700;
    }
    h2{
        margin-top: 10px;
    }

    .slick-slider{
        max-width: 1026px;
        margin: 0 auto;

        /* @media (max-width: 768px) {
            max-width: 600px;
        } */
    }
`

const Content = styled.div`

`