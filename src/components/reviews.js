import React from "react"
import styled from "styled-components"
import { TwoColumnFlexVariants } from "../constants/two-column-flex-variants"
import ReviewsSlider from "./reviews-slider"
import TwoColumnFlex from "./two-column-flex"

export default function Reviews({ data, reverse = true, variant = TwoColumnFlexVariants.buttonUnderText }) {
    return (
        <Wrapper>
            <TwoColumnFlex variant={variant} data={data} reverse={reverse} />
            <ReviewsSlider data={{ header: data.reviewsHeader, title: data.reviewsTitle }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`