import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --color-white: #FFFFFF;
        --color-blue: #141C2B;
        --color-yellow: #F8D200;

        --color-light-gray: #F6F6F6;
        --color-medium-gray: #E9E9E9;

        --color-transparent: transparent;

        --margin-intersection: 100px;

        --button-padding-vertical: 26px;
        --button-padding-horizontal: 96px;

        --box-shadow: 0px 3px 30px #00000016;
    }

    *{
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: var(--color-blue);
        font-family: Poppins;
    }

    section{
        padding-top: var(--margin-intersection);
    }

    body{
        max-width: 1920px;
        margin: 0 auto !important;
    }

    .main-title{
        font-size: 45px;
        font-weight: 600;
        line-height: 133%;
    }

    .sub-title{
        font-size: 25px;
        font-weight: 600;
        line-height: 154%;
    }

    .big-text{
        font-size: 18px;
        line-height: 160%;
        font-weight: 600;
    }

    .text{
        font-size: 12px;    
        line-height: 185%;
        font-weight: 400;
    }

    .button {
        font-size: 12px;
        line-height: 150%;
        font-weight: 700;
        display: inline-block;
        padding: var(--button-padding-vertical) var(--button-padding-horizontal);
        position: relative;
        color: var(--color-blue);
        background-color: var(--color-yellow);
        border: 0;
        transition: color .2s ease-out, background-color .2s ease-out;
        outline: 1px solid var(--color-blue);
        outline-offset: 2px;
    }

    .button-underline {
        background-color: var(--color-transparent);
        color: var(--color-blue);
        &:after {
            content: '';
            position: absolute;
            bottom: 13px;
            left: var(--button-padding-horizontal);
            height: 2px;
            width: calc(100% - 2 * var(--button-padding-horizontal));
            transition: transform .2s ease-out;
            background-color: var(--color-blue);
            transform: scaleX(0.5);
            transform-origin: left center;
        }

        &:focus-visible:after, &:hover:after {
            transform: scaleX(1);
            outline: 1px solid var(--color-blue);
        }
        &:focus {
            outline: none;
        }
    }
`
export default GlobalStyles
