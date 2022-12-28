import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --color-white: #FFFFFF;
        --color-blue: #141C2B;
        --color-yellow: #F8D200;

        --color-light-gray: #F6F6F6;
        --color-medium-gray: #E9E9E9;
        --color-dark-gray: #212939;

        --margin-intersection: 100px;

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

    .button{
        font-size: 12px;
        line-height: 150%;
        font-weight: 700;
    }
`
export default GlobalStyles
