import React from "react"
import styled from "styled-components"
import { ProcessSlider } from "./process-slider"
import Cta from "./cta"
import TwoColumnFlex from "./two-column-flex"

export default function Process({ variant, data: { tytulSekcjiTwoCol, tytulSekcji, trescPodTytulemTwoCol, tresc, malyNaglowekTwoColSection, malyNaglowek, linkPrzyciskuPobocznego, linkPrzyciskuGlownego, zdjecieWSekcji, etapy } }) {
    return (
        <Wrapper>
            <ProcessSlider data={{ header: malyNaglowek, title: tytulSekcji, steps: etapy }} />
            <TwoColumnFlex underline={true} variant={variant} data={{ header: malyNaglowekTwoColSection, title: tytulSekcjiTwoCol, text: trescPodTytulemTwoCol, link: null, image: zdjecieWSekcji }} />
            <Cta data={{ linkOne: linkPrzyciskuGlownego, linkTwo: linkPrzyciskuPobocznego, text: tresc }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--color-blue);
    margin-top: var(--margin-intersection);
    padding-bottom: var(--margin-intersection);

    .text-block{

        *{
            color: var(--color-white);
        }
        span{
            color: var(--color-yellow);
        }
    }

    .line{
        background-color: var(--color-white);
    }

        .two-column{

        .two-column-content{
        }
    }

    .cta{
    }
`