import React from "react"
import styled from "styled-components"
import TextGrid from "./text-grid"
import TwoColumnFlex from "./two-column-flex"

export default function WayOfWork({ data }) {
    return (
        <Wrapper>
            <TwoColumnFlex data={data} />
            <TextGrid data={data} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--color-light-gray);  
    margin-top: var(--margin-intersection);
    padding-bottom: var(--margin-intersection);
`