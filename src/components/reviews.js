import React from "react"
import styled from "styled-components"
import ReviewsSlider from "./reviews-slider"
import TwoColumnFlex from "./two-column-flex"

export default function Reviews({ data }) {
    return (
        <Wrapper>
            <TwoColumnFlex data={data} reverse={true} />
            <ReviewsSlider data={{ header: data.reviewsHeader, title: data.reviewsTitle }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`