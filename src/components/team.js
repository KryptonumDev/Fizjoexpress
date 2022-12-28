import React from "react"
import styled from "styled-components"
import TeamSlider from "./team-slider"
import TwoColumnFlex from "./two-column-flex"

export default function Team({ reverse, data, slider }) {
    return (
        <Wrapper>
            <TwoColumnFlex reverse={reverse} data={data} />
            <TeamSlider data={slider}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--margin-intersection);
    padding-bottom: var(--margin-intersection);
    background-color: var(--color-light-gray);
`