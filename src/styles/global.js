import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --color-white: #FFFFFF;
        --color-blue: #141C2B;
        --color-yellow: #F8D200;

        --color-light-gray: #F6F6F6;
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
`
export default GlobalStyles
