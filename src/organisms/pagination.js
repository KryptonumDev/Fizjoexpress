import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from '../components/transition-link'

export const Pagination = ({ pageUrl, setCurrentPage, page, posts }) => {
  const pagesCount = useMemo(() => {
    return Math.ceil(posts.length / 9)
  }, [posts])

  const buttons = useMemo(() => {
    let arr = []

    for (let i = 0; i < pagesCount; i++) {
      arr.push(i)
    }

    return arr
  }, [pagesCount])

  if (pagesCount < 2) {
    return null
  }

  return (
    <Wrapper>
      <Content>
        <Left>
          <Link
            onClick={(e) => {
              setCurrentPage(page === 1 ? 1 : page - 1)
            }}
            to={page < 3 ? pageUrl : pageUrl + '?page=' + (page - 1)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5.434'
              height='5.746'
              viewBox='0 0 5.434 5.746'>
              <path
                id='Path_132'
                data-name='Path 132'
                d='M.819-1.677h2.8L6.253-4.55,3.614-7.423H.819L3.471-4.55Z'
                transform='translate(-0.819 7.423)'
                fill='#141c2b'
              />
            </svg>
          </Link>
        </Left>
        <Paging>
          {buttons.map((el, index) => {
            let url = index === 0 ? pageUrl : pageUrl + '?page=' + (el + 1)
            if (
              page === 1 &&
              (index === page - 1 ||
                index === page ||
                index === page + 1 ||
                index === page + 2 ||
                index === page + 3 ||
                index === page + 4 ||
                index === pagesCount - 1)
            ) {
              return (
                <Button key={el} active={page === el + 1}>
                  <Link
                    to={url}
                    onClick={(e) => {
                      setCurrentPage(el + 1)
                    }}>
                    <span>{el + 1}</span>
                  </Link>
                </Button>
              )
            }
            if (
              page === pagesCount &&
              (index === 0 ||
                index === page - 6 ||
                index === page - 5 ||
                index === page - 4 ||
                index === page - 3 ||
                index === page - 2 ||
                index === page - 1 ||
                index === page ||
                index === page + 1 ||
                index === pagesCount - 1)
            ) {
              return (
                <Button key={el} active={page === el + 1}>
                  <Link
                    to={url}
                    onClick={(e) => {
                      setCurrentPage(el + 1)
                    }}>
                    <span>{el + 1}</span>
                  </Link>
                </Button>
              )
            }
            if (page === 2) {
              if (
                index === 0 ||
                index === page - 1 ||
                index === page ||
                index === page + 1 ||
                index === page + 2 ||
                index === page + 3 ||
                index === pagesCount - 1
              ) {
                return (
                  <Button key={el} active={page === el + 1}>
                    <Link
                      to={url}
                      onClick={(e) => {
                        setCurrentPage(el + 1)
                      }}>
                      <span>{el + 1}</span>
                    </Link>
                  </Button>
                )
              }
              return null
            }
            if (page === 3) {
              if (
                index === 0 ||
                index === page - 2 ||
                index === page - 1 ||
                index === page ||
                index === page + 1 ||
                index === page + 2 ||
                index === pagesCount - 1
              ) {
                return (
                  <Button key={el} active={page === el + 1}>
                    <Link
                      to={url}
                      onClick={(e) => {
                        setCurrentPage(el + 1)
                      }}>
                      <span>{el + 1}</span>
                    </Link>
                  </Button>
                )
              }
              return null
            }
            if (page === pagesCount - 2) {
              if (
                index === 0 ||
                index === page - 4 ||
                index === page - 3 ||
                index === page - 2 ||
                index === page - 1 ||
                index === page ||
                index === page + 1
              ) {
                return (
                  <Button key={el} active={page === el + 1}>
                    <Link
                      to={url}
                      onClick={(e) => {
                        setCurrentPage(el + 1)
                      }}>
                      <span>{el + 1}</span>
                    </Link>
                  </Button>
                )
              }
              return null
            }
            if (page === pagesCount - 1) {
              if (
                index === 0 ||
                index === page - 5 ||
                index === page - 4 ||
                index === page - 3 ||
                index === page - 2 ||
                index === page - 1 ||
                index === page ||
                index === page + 1
              ) {
                return (
                  <Button key={el} active={page === el + 1}>
                    <Link
                      to={url}
                      onClick={(e) => {
                        setCurrentPage(el + 1)
                      }}>
                      <span>{el + 1}</span>
                    </Link>
                  </Button>
                )
              }
              return null
            }
            if (
              page !== 1 &&
              page !== pagesCount &&
              (index === page - 3 ||
                index === page - 2 ||
                index === page - 1 ||
                index === page ||
                index === page + 1 ||
                index === 0 ||
                index === pagesCount - 1)
            ) {
              return (
                <Button key={el} active={page === el + 1}>
                  <Link
                    to={url}
                    onClick={(e) => {
                      setCurrentPage(el + 1)
                    }}>
                    <span>{el + 1}</span>
                  </Link>
                </Button>
              )
            }
            return null
          })}
        </Paging>
        <Right>
          <Link
            onClick={(e) => {
              setCurrentPage(page === pagesCount ? pagesCount : page + 1)
            }}
            to={
              page > pagesCount - 2
                ? pageUrl + '?page=' + pagesCount
                : pageUrl + '?page=' + (page + 1)
            }>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5.434'
              height='5.746'
              viewBox='0 0 5.434 5.746'>
              <path
                id='Path_132'
                data-name='Path 132'
                d='M.819-1.677h2.8L6.253-4.55,3.614-7.423H.819L3.471-4.55Z'
                transform='translate(-0.819 7.423)'
                fill='#141c2b'
              />
            </svg>
          </Link>
        </Right>
      </Content>
    </Wrapper>
  )
}

const Paging = styled.div`
  display: flex;
  gap: 4px;
`

const Left = styled.div`
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light-gray);
  transform: rotateZ(180deg);
  cursor: pointer;
`

const Right = styled.div`
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light-gray);
  cursor: pointer;
`

const Button = styled.div`
  padding: 4px 6px;
  font-size: 14px;
  ${(props) =>
    props.active &&
    `
    text-decoration: underline;
    font-weight: 700;
        
    `}
`

const Wrapper = styled.div`
  position: relative;

  padding-bottom: var(--margin-intersection);

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: -450px;
    right: -450px;
    top: 0;
    bottom: 0;
    background-color: var(--color-light-gray);
  }
`

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
