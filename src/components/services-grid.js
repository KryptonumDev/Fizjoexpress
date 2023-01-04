import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'

export default function ServicesGrid({
  data: {
    tytulSekcji,
    malyNaglowekNadTytulem,
    listaCoLeczymy
  }
}) {
  return (
    <Wrapper>
      <Container>
        <span className='text'>
          {malyNaglowekNadTytulem}
        </span>
        <h2
          className='sub-title'
          dangerouslySetInnerHTML={{
            __html: textParser(tytulSekcji)
          }}
        />
        <Grid>
          {listaCoLeczymy.map((el, index) => (
            <Item key={`grafika-${el.grafika.altText + index}`}>
              <img
                src={el.grafika.localFile.publicURL}
                alt={el.grafika.altText}
              />
              <p
                className='big-text'
                dangerouslySetInnerHTML={{
                  __html: textParser(el.podpisPodIkona)
                }}></p>
            </Item>
          ))}
          <Item>
            <Link to='/jak-dzialamy/' aria-label='Poznaj nasza ofertę'>
            </Link>
            <p className='text'>Poznaj naszą ofertę</p>
          </Item>
        </Grid>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  span {
    color: var(--color-yellow);
    font-weight: 700;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 1366px) {
      padding: 0 30px;
    }

    @media (max-width: 840px) {
      padding: 0;
    }
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 30px;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 1366px) {
      padding: 0 30px;
    }

    @media (max-width: 840px) {
      padding: 0;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  position: relative;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: 1366px) {
    padding: 0 30px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  &::after {
    position: absolute;
    content: '';
    height: 100px;
    width: 1px;
    background-color: var(--color-yellow);
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 840px) {
      display: none;
    }
  }

  &::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 1px;
    background-color: var(--color-yellow);
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 840px) {
      display: none;
    }
  }
`

const Item = styled.div`
  background-color: var(--color-light-gray);
  padding: 50px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1150px) {
    padding: 40px 12px;
  }

  @media (max-width: 540px) {
    padding: 22px 4px;
  }

  img {
    margin-bottom: 24px;
  }

  

  p {
  }

  &:last-child {
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: transparent;

    &::before{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: var(--color-yellow);
      z-index: -1;
    }

    &::after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: var(--color-blue);
      z-index: -1;
      transform: translateY(100%);
      transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover{
      p{
        color: #fff;
        &::after{
          background-color: #fff;
        }
      }
      &::after{
        transform: unset;
      }
    }
    a{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }
    p {
      pointer-events: none;
      font-weight: 700;
      padding-bottom: 10px;
      position: relative;
      transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);

      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        height: 1px;
        background-color: var(--color-blue);
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
      transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }
  }
`
