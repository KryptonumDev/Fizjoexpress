import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Control } from '../organisms/slider-control'

export default function TeamSlider({
  data: { header, title, team }
}) {
  const slickRef = useRef(null)
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
        responsive: [{
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
            }
        }]
  }
  return (
    <Wrapper>
      <Container>
        <Control
          white={true}
          header={header}
          title={title}
          slickRef={slickRef}
        />
        <Slider ref={slickRef} {...settings}>
          {team.map((el) => (
            <Item key={el.name}>
              <GatsbyImage
                image={
             className="image"      el.dodatkowePolaAutora.zdjecieAutora
                    .localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={
                  el.dodatkowePolaAutora.zdjecieAutora
                    .altText
                }
              />
              <div className="overlay text">Dowiedz się więcej</div>
                            <div className="hover">
                                <p className="big-text">{el.name}</p>
                                <div className="text" dangerouslySetInnerHTML={{ __html: el.description }} />
                            </div>
            </Item>
          ))}
        </Slider>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .slick-slider{
        max-width: 1026px;
        margin: 0 auto;

        @media (max-width: 740px) {
            max-width: 500px;
        }
    }

    @media (max-width: 740px) {
        .control{
            max-width: 490px;
        }
    }

    @media (max-width: 480px) {
        overflow: hidden;
        .slick-list{
            overflow: unset !important;
        }
    }
`

const Item = styled.div`
  max-width: calc(100% - 10px);
  transform: translateX(5px);
    position: relative;

    .overlay{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        font-weight: 700;
        color: var(--color-white);
        transition: opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1);

        &::after{
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            height: 1px;
            width: 42px;
            background-color: var(--color-white);
        }
    }
    .hover{
        opacity: 0;
        pointer-events: none;
        background-color: #141C2Bb6;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 40px;
        transition: opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        .big-text{
            margin-bottom: 20px;
        }
        .text{
            display: grid;
            grid-gap: 12px;

            @media (max-width: 359px) {
                font-size: 11px;
            }
            @media (max-width: 330px) {
                font-size: 10px;
            }
        }
        *{
            color: var(--color-white);
        }
    }

    &:hover{
        .overlay{
            opacity: 0;
        }
        .hover{
            opacity: 1;
            pointer-events: all;
        }
    }
`
