import React from "react"
import styled from "styled-components"

export const Pagination = () => (
    <Wrapper>
        <Content>

        </Content>
    </Wrapper>
)

const Wrapper = styled.div`
    position: relative;

    padding-bottom: var(--margin-intersection);

    &::after{
        content: '';
        position: absolute;
        z-index: -1;
        left: -450px;
        right: -450px;
        top: 0;
        bottom: 0;
        background-color: var(--color-light-gray);
    }

`

const Content = styled.div`
    background-color: #fff;
    padding: 20px;

`