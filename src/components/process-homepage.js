import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { ProcessSlider } from "../organisms/process-slider"
import Cta from "./cta"
import TwoColumnFlex from "./two-column-flex"

export default function Process({ data: { tytulSekcjiTwoCol, tytulSekcji, trescPodTytulemTwoCol, tresc, malyNaglowekTwoColSection, malyNaglowek, linkPrzyciskuPobocznego, linkPrzyciskuGlownego, zdjecieWSekcji, etapy } }) {
    return (
        <Wrapper>
            <ProcessSlider data={{ header: malyNaglowek, title: tytulSekcji, steps: etapy }} />
            <TwoColumnFlex data={{ header: malyNaglowekTwoColSection, title: tytulSekcjiTwoCol, text: trescPodTytulemTwoCol, link: null, image: zdjecieWSekcji }} />
            <Cta data={{ linkOne: linkPrzyciskuGlownego, linkTwo: linkPrzyciskuPobocznego, text: tresc }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--color-blue);
    padding: 0 100px;
    margin-top: var(--margin-intersection);

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
            margin-left: -100px;
            margin-right: 100px;

        .two-column-content{
            margin-right: 0;
        }
    }

    .cta{
        margin-right: -100px;
    }
`