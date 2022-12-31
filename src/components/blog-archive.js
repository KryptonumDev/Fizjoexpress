import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { Card } from "../moleculas/blog-card"
import { Pagination } from "../organisms/pagination"

export default function Archive({ noResults, url, location, category, categories, posts }) {
    const [page, setPage] = useState(() => {
        if (!location.search) {
            return 1
        }

        if (location.search === '') {
            return 1
        }

        const urlParams = new URLSearchParams(location.search)

        return parseInt(urlParams.get('page'))
    })
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Categories>
                        <span className="big-text">Kategorie</span>
                        <div className="flex">
                            {categories.map((el, index) => (
                                <Link key={el.name + index} activeClassName="active" to={'/blog/' + el.slug + '/'}>
                                    {el.name}
                                </Link>
                            ))}
                        </div>
                    </Categories>
                    <div className="title sub-title">
                        Najnowsze wpisy{category && ':'} <span>{category}</span>
                    </div>
                    <Grid>
                        {posts.map((el, index) => {
                            if (((index >= (8 * (page - 1) + (page - 1))) && index <= (8 * page) + (page - 1))) {
                                return (
                                    <React.Fragment key={el.title + index}>
                                        <Card data={el} />
                                    </React.Fragment>
                                )
                            }
                        })}
                    </Grid>
                    {posts.length < 1 && (
                        <Placeholder>
                            {noResults}
                        </Placeholder>
                    )}

                    <Pagination pageUrl={url} posts={posts} setCurrentPage={setPage} page={page} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Placeholder = styled.div`

`

const Wrapper = styled.section`
overflow: hidden;
    padding-top: 0;
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
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;

    .flex{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 30px;
    }

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

    @media (max-width: 940px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        max-width: 440px;
        margin: 0 auto;
    }

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