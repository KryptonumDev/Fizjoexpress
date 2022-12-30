import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { textParser } from "../helpers/text-parser"

export const Card = ({data: el }) => (
    <Item >
        <Link to={'/blog/' + el.slug + '/'}>
            <GatsbyImage className="image" image={el.singlePostData.szablonArtykuluDodatkoweDane.singlePostObrazekWyrozniajacyNaListinguBloga.localFile.childImageSharp.gatsbyImageData}
                alt={el.singlePostData.szablonArtykuluDodatkoweDane.singlePostObrazekWyrozniajacyNaListinguBloga.altText} />
            <div className="content">
                <span className="small-header">{el.date}</span>
                <p className="big-text">{el.title}</p>
                <p className="text" dangerouslySetInnerHTML={{ __html: textParser(el.excerpt) }} />
            </div>
        </Link>
    </Item>
)

const Item = styled.div`
    background-color: #fff;

    .image{
        height: 200px;
    }

    .content{
        height: calc(100% - 200px);
        padding: clamp(20px, ${30 / 1366 * 100}vw, 30px) clamp(20px, ${30 / 1366 * 100}vw, 30px) 24px clamp(20px, ${30 / 1366 * 100}vw, 30px);

        .big-text{
            padding-top: 15px;
            padding-bottom: 20px;
        }
    }
`