import React from "react"
import styled from "styled-components"
import { textParser } from "../helpers/text-parser"

export const Control = ({ white = false, header, title, slickRef }) => (
    <Wrapper className="control">
        <div>
            <span className="small-header header">{header}</span>
            <h2 className="sub-title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
        </div>
        <Buttons className={white ? 'white' : ''}>
            {/* disabled={slickRef?.current?.innerSlider?.state?.currentSlide === 0} */}
            <button className="prev" aria-label='poprzedni slide' onClick={() => { slickRef.current.slickPrev() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5.434" height="5.746" viewBox="0 0 5.434 5.746">
                    <path id="Path_132" data-name="Path 132" d="M.819-1.677h2.8L6.253-4.55,3.614-7.423H.819L3.471-4.55Z" transform="translate(-0.819 7.423)" fill="#141c2b" />
                </svg>
            </button>
            <button disabled={slickRef?.current?.innerSlider?.state?.slideCount === 0} className="next" aria-label='następny slide' onClick={() => { slickRef.current.slickNext() }}>
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
        transition: background-color .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        border: none;
        cursor: pointer;
        position: relative;
        background-color: transparent;
        overflow: hidden;

        svg{
            position: relative;
            z-index: 1;
        }

        &::before{
            content: '';
            position: absolute;
            z-index: 0;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: var(--color-light-gray);
        }

        &::after{
            content: '';
            position: absolute;
            z-index: 0;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: var(--color-yellow);
            transform: translateY(100%);
            transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:first-child{
            transform: rotateZ(180deg);

            &::after{
                transform: translateY(-100%);
            }
        }

        svg{
            transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            &::after{
                transform: unset;
            }

            &.prev{
                svg{
                    transform: translateX(1px);
                }
            }

            &.next{
                svg{
                    transform: translateX(1px);
                }
            }
        }
    }

    &.white{
        button::before{
            background-color: var(--color-white);
        }
    }

`