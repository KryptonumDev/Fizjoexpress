import { graphql, useStaticQuery } from 'gatsby'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { Card } from '../moleculas/blog-card'
import { Control } from '../organisms/slider-control'

export default function BlogSlider({ data }) {
  const {
    allWpPost: { nodes }
  } = useStaticQuery(graphql`
    query {
      allWpPost(limit: 4) {
        nodes {
          title
          slug
          id
          singlePostData {
            szablonArtykuluDodatkoweDane {
              singlePostObrazekWyrozniajacyNaListinguBloga {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          date(formatString: "DD.MM.YYYY")
          excerpt
        }
      }
    }
  `)

  const slickRef = useRef(null)
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 876,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  let header = 'Blog'
  let title = 'Najnowsze wpisy na blogu'

  return (
    <Wrapper>
      <Container>
        <Content>
          <Control
            white={true}
            header={header}
            title={title}
            slickRef={slickRef}
          />
          <Slider ref={slickRef} {...settings}>
            {nodes.map((el, iterator) => (
              <React.Fragment key={`${el.id}-blogPost-${iterator}`}>
                <Card data={el} />
              </React.Fragment>
            ))}
          </Slider>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (max-width: 640px) {
    overflow: hidden;
    .slick-slider {
      max-width: 400px;
    }
    .slick-list {
      overflow: unset !important;
    }
  }
`

const Content = styled.div`
  max-width: 1026px;
  margin: 0 auto;
  position: relative;

  .item {
    max-width: calc(100% - 10px);
    transform: translateX(5px);
  }
`
