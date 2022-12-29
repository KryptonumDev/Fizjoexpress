import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from "../helpers/text-parser"
import { Pagination } from "../organisms/pagination"

export default function Archive({ categories, posts }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Categories>
                        <span className="big-text">Kategorie</span>
                        {categories.map(el => (
                            <Link activeClassName="active" to={'/blog/' + el.slug + '/'}>
                                {el.name}
                            </Link>
                        ))}
                    </Categories>
                    <div className="title sub-title">
                        Najnowsze wpisy:
                    </div>
                    <Grid>
                        {posts.map(el => (
                            <Item>
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
                        ))}
                    </Grid>
                    <Pagination />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .title{
        margin-top: 50px;
        margin-bottom: 30px;

        span{
            color: var(--color-text-light-gray);
        }
    }
`

const Content = styled.div`
    max-width: 1020px;
    margin: 0 auto;
`

const Categories = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
    align-items: center;

    .big-text{
        color: var(--color-text-light-gray);
        margin-right: 12px;
    }

    .active{
        font-weight: 700;

        position: relative;

        &::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: var(--color-blue);
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 10px;
    position: relative;
    padding-bottom: 30px;

    &::after{
        content: '';
        position: absolute;
        z-index: -1;
        left: -450px;
        right: -450px;
        top: 200px;
        bottom: 0;
        background-color: var(--color-light-gray);
    }
`

const Item = styled.div`
    background-color: #fff;

    .image{
        height: 200px;
    }

    .content{
    height: calc(100% - 200px);
        padding: 30px 30px 24px 30px;

        .big-text{
            padding-top: 15px;
            padding-bottom: 20px;
        }
    }
`