import React from "react"
import styled from "styled-components"
import { textParser } from "../helpers/text-parser"

export const Control = ({ white = false, header, title, slickRef }) => (
    <Wrapper className="control">
        <div>
            <span className="text header">{header}</span>
            <h2 className="sub-title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
        </div>
        <Buttons className={white ? 'white' : ''}>
            <button aria-label='poprzedni slide' onClick={() => { slickRef.current.slickPrev() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5.434" height="5.746" viewBox="0 0 5.434 5.746">
                    <path id="Path_132" data-name="Path 132" d="M.819-1.677h2.8L6.253-4.55,3.614-7.423H.819L3.471-4.55Z" transform="translate(-0.819 7.423)" fill="#141c2b" />
                </svg>
            </button>
            <button aria-label='następny slide' onClick={() => { slickRef.current.slickNext() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5.434" height="5.746" viewBox="0 0 5.434 5.746">
                    <path id="Path_132" data-name="Path 132" d="M.819-1.677h2.8L6.253-4.55,3.614-7.423H.819L3.471-4.55Z" transform="translate(-0.819 7.423)" fill="#141c2b" />
                </svg>
            </button>
        </Buttons>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1019px;
    margin: 0 auto;
    margin-bottom: 30px;
`

const Buttons = styled.div`
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 1fr 1fr;
    width: fit-content;
    button{
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-light-gray);
        border: none;
        cursor: pointer;

        &:first-child{
            transform: rotateZ(180deg);
        }
    }

    &.white{
        button{
            background-color: var(--color-white);
        }
    }

`