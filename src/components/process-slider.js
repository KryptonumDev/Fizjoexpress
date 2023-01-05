import React, { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'

import Slider from 'react-slick'
import { Control } from '../organisms/slider-control'

export const ProcessSlider = ({
  data: { header, title, steps }
}) => {
  const slickRef = useRef(null)
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <Wrapper>
      <Container>
        <Control
          header={header}
          title={title}
          slickRef={slickRef}
        />
        <Slider ref={slickRef} {...settings}>
          {steps.map((el, index) => (
            <Item key={`item-${index}`}>
              <span className='number'>{index + 1}</span>
              <span className='line' />
              <p className='text semi'>{el.nazwaEtapu}</p>
              <p
                className='text regular'
                dangerouslySetInnerHTML={{
                  __html: textParser(
                    el.trescPodTytulemOpcjonalna
                  )
                }}
              />
            </Item>
          ))}
        </Slider>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  h2 {
    font-weight: 700;
    color: var(--color-yellow);
  }
  .sub-title {
    display: block;
    color: var(--color-white);
    margin-top: 10px;
  }
  .header {
  }

  .slick-slider {
    max-width: 1026px;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 600px;
    }
  }

  @media (max-width: 768px) {
    .control {
      max-width: 590px;
    }
  }

  @media (max-width: 600px) {
    overflow: hidden !important;
    .slick-list {
      overflow: unset !important;
    }
  }
`

const Item = styled.div`
  background-color: var(--color-light-gray);
  position: relative;
  max-width: 248px;
  min-height: 200px;
  width: calc(100% - 10px) !important;
  transform: translateX(5px);

  @media (max-width: 940px) {
    max-width: unset;
  }

  @media (max-width: 820px) {
  }

  @media (max-width: 600px) {
    aspect-ratio: unset;
    height: 200px;
  }

  .semi {
    font-weight: 600;
    margin-top: clamp(55px, ${(80 / 1366) * 100}vw, 80px);

    @media (max-width: 940px) {
      margin-top: clamp(55px, ${(80 / 940) * 100}vw, 80px);
    }
  }

  .regular {
    margin-top: clamp(0px, ${(20 / 1366) * 100}vw, 20px);
    padding-bottom: 50px;

    @media (max-width: 940px) {
      margin-top: clamp(0px, ${(20 / 940) * 100}vw, 20px);
    }

    @media (max-width: 600px) {
      margin-top: 0;
    }
  }

  .text {
    color: var(--color-blue);
    margin-left: clamp(20px, ${(30 / 1366) * 100}vw, 30px);
    margin-right: clamp(12px, ${(30 / 1366) * 100}vw, 30px);
    line-height: 170%;

    @media (max-width: 940px) {
      margin-left: clamp(12px, ${(30 / 940) * 100}vw, 30px);
      margin-right: clamp(
        12px,
        ${(30 / 940) * 100}vw,
        30px
      );
    }

    * {
      color: var(--color-blue);
    }
  }

  .line {
    width: 64px;
    height: 1px;
    position: absolute;
    left: 32px;
    bottom: 32px;
    background-color: var(--color-yellow) !important;
  }

  .number {
    position: absolute;
    width: clamp(35px, ${(50 / 1366) * 100}vw, 50px);
    height: clamp(35px, ${(50 / 1366) * 100}vw, 50px);

    @media (max-width: 940px) {
      width: clamp(35px, ${(50 / 940) * 100}vw, 50px);
      height: clamp(35px, ${(50 / 940) * 100}vw, 50px);
    }
    background-color: var(--color-yellow);
    left: 0;
    top: 0;
    color: var(--color-blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`
