import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"

export default function ThreeCards({ data }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {data.map((el, index) => (
                        <Item key={el.tytulKarty + index}>
                            <span className="big-text number">{index + 1}</span>
                            <div>
                                <p className="big-text">{el.tytulKarty}</p>
                                <div className="text" dangerouslySetInnerHTML={{ __html: el.trescPodTytulem }} />
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
`

const Grid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 1366px) {
        padding: 0 30px;
    }
    @media (max-width: 840px) {
        grid-template-columns: 1fr 1fr;
        padding: 0;
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }


  &::after {
    position: absolute;
    content: '';
    height: 100px;
    width: 1px;
    background-color: var(--color-blue);
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
    background-color: var(--color-blue);
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 840px) {
      display: none;
    }
  }
`

const Item = styled.div`
    position: relative;
    background-color: var(--color-light-gray);
    padding: clamp(66px, ${90 / 1366 * 100}vw, 90px) 24px 50px clamp(24px, ${40 / 1366 * 100}vw, 40px);

    @media (max-width: 840px){
        padding: 90px 24px 50px 40px;
    }

    .number{
        position: absolute;
        left: 0;
        top: 0;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-yellow);
    }
    .text{
        margin-top: 20px;
    }
`