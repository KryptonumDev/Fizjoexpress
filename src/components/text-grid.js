import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"

export default function TextGrid({ data: { gridTopText, gridBotText, grid } }) {
    return (
        <Wrapper>
            <Container>
                <div className="big-text" dangerouslySetInnerHTML={{ __html: gridTopText }} />
                <Grid>
                    {grid.map(el => (
                        <Item className="big-text">
                            {el.cecha}
                            <svg xmlns="http://www.w3.org/2000/svg" width="6.746" height="6.745" viewBox="0 0 6.746 6.745">
                                <path id="Path_208" data-name="Path 208" d="M4345.127,95.471l-6.746,6.745h6.746Z" transform="translate(-4338.381 -95.471)" fill="#141c2b" />
                            </svg>
                        </Item>
                    ))}
                </Grid>
                <div className="big-text" dangerouslySetInnerHTML={{ __html: gridBotText }} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .big-text{
        font-weight: 400;
    }
`

const Grid = styled.div`
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: clamp(20px, ${30 / 1366 * 100}vw, 30px) 0 clamp(30px, ${60 / 1366 * 100}vw, 60px) 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 350px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    height: 120px;
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700 !important; 
    position: relative;

    svg{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    &:nth-child(7){
        background-color: var(--color-yellow);
    }
`