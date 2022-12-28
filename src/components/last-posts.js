import React from "react"
import styled from "styled-components"
import BlogSlider from "./blog-slider"
import TwoColumnFlex from "./two-column-flex"

export default function LastPosts({ reverse, variant, data }) {
    return (
        <Wrapper>
            <TwoColumnFlex reverse={reverse} variant={variant} data={data} />
            {data.blogSlider && <BlogSlider />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--margin-intersection);
    padding-bottom: var(--margin-intersection);
    background-color: var(--color-light-gray);
`