
import React from "react"
import styled from "styled-components"
import { textParser } from "../helpers/text-parser"
import { Link } from "./transition-link"

export const Aside = ({ posts }) => (
  <Wrapper>
    <span className='aside-header big-text'>
      Dowiedz się jeszcze więcej
    </span>
    <Posts>
      {posts.map((post, index) => {
        const {
          title,
          slug,
          excerpt,
          terms: { nodes: categories }
        } = post
        const category = categories.filter((category) => category.name)[0]
        return (
          <React.Fragment key={post.slug + index} >
            <Link className='other-post' to={`/blog/${slug}`}>
              <article>
                <span className='post-category'>{category.name}</span>
                <h3 className='post-header big-text'>{title}</h3>
                <div
                  className='post-excerpt'
                  dangerouslySetInnerHTML={{
                    __html: textParser(excerpt)
                  }}
                />
                <span className='button button--secondary'>
                  Poznaj więcej szczegółów
                </span>
              </article>
            </Link>
          </React.Fragment>
        )
      })}
    </Posts>
  </Wrapper>
)

const Posts = styled.div`
a{
  display: block;
}
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 10px;

@media (max-width: 860px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

@media (max-width: 580px) {
  grid-template-columns: 1fr;
  max-width: 380px;
}
`

const Wrapper = styled.aside`
position: sticky;
top: 40px;
max-height: min(80vh, 655px);
padding-right: 100px;

@media (max-width: 1200px) {
  padding-right: 0;
}

@media (max-width: 860px){
  position: unset;
  margin-top: 30px;
  grid-area: aside;
}

.aside-header {
  margin-bottom: 10px;
}
.other-post {
  padding: 20px 30px 16px;
  background-color: var(--color-light-gray);
  aspect-ratio: 1/1;

  @media (max-width: 680px) {
  min-height: 285px;
  aspect-ratio: unset;
    
  }


  > article {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }

  &:hover .button--secondary:after, &:focus-visible .button--secondary:after {
    transform: scaleX(1);
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--color-blue);
  }
}

.post-category {
  color: var(--color-yellow);
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
}

.post-excerpt {
  margin: 10px 0 6px;
  font-size: 12px;
  line-height: 1.7;
}

.button {
  margin-top: auto;
  position: relative;
  font-size: 12px;
  font-weight: bold;
  padding: 4px;
  margin-left: -4px; 
  display: inline-block;
}

.button--secondary:after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 4px;
  width: calc(100% - 8px);
  height: 2px;
  background-color: var(--color-blue);
  transition: transform .15s ease-out;
  transform-origin: left center;
  transform: scaleX(0.5);
  &:hover:after {
    transform: scaleX(1);
  }
}
`