import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --color-white: #FFFFFF;
        --color-blue: #141C2B;
        --color-yellow: #F8D200;

        --color-light-gray: #F6F6F6;
        --color-text-light-gray: #B2B2B2;
        --color-darker-light-gray: #70707040;
        --color-medium-gray: #E9E9E9;
        --color-dark-gray: #212939;

        --margin-intersection: clamp(40px,  ${100 / 1366 * 100}vw, 100px);

        --box-shadow: 0px 3px 30px #00000016;
    }

    *{
        text-decoration: none;
        list-style: none;
        padding: 0;
        margin: 0;
        color: var(--color-blue);
        font-family: Poppins;
        box-sizing: border-box;
    }

    section{
        padding-top: var(--margin-intersection);
    }

    body{
        max-width: 1920px;
        margin: 0 auto !important;
    }

    .main-title{
        font-size: clamp(28px, ${45 / 1366 * 100}vw, 45px);
        font-weight: 600;
        line-height: 133%;
    }

    .sub-title{
        font-size: clamp(22px, ${25 / 1366 * 100}vw, 25px);
        font-weight: 600;
        line-height: 154%;
    }

    .small-header {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.5;
        color: var(--color-yellow) !important;
    }

    .big-text{
        font-size: clamp(16px,  ${18 / 1366 * 100}vw, 18px);
        line-height: 160%;
        font-weight: 600;
    }

    .text{
        font-size: 12px;    
        line-height: 185%;
        font-weight: 400;
    }

    .button{
        font-size: 12px;
        line-height: 150%;
        font-weight: 700;
    }

    .read-more {
        font-size: 12px;
        font-weight: bold;
        color: var(--color-blue);
        background-color: var(--color-yellow);
        padding: 26px 113px;
        max-width: clamp(200px, 21.96vw, 300px);
        text-align: center;
    }

    .btn--triangle {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-right: 0;
            border-bottom: 0;
            border-right: 8px solid var(--color-blue);
            transition: transform .15s ease-out;
        }
        &:hover:after {
            transform: translate(2px, 2px);
        }
    }

    .category-wrapper {
        display: flex;
        gap: 4px;
        > li {
            display: flex;
            align-items: stretch;
            justify-content: stretch;
            > a {
                display: inline-block;
                color: var(--color-yellow);
                font-weight: 600;
                padding: 4px 8px;

            }
                &:first-of-type > a {
                    margin-left: -8px;
                }
        }
    }
`
export default GlobalStyles
