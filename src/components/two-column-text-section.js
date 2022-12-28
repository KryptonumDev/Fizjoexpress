import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { textParser } from '../helpers/text-parser'
import { Button } from '../moleculas/link'

const TwoColumnTextSection = ({
  smallHeader,
  title,
  firstColumnContent,
  secondColumnContent,
  link
}) => {
  return (
    <TwoColSectionWrapper>
      <Container>
        <div className='headers-wrapper'>
          <span
            className='small-header'
            dangerouslySetInnerHTML={{
              __html: smallHeader
            }}
          />
          <h2
            className='sub-title'
            dangerouslySetInnerHTML={{
              __html: title
            }}
          />
        </div>
        <TwoColSectionContainer>
          <ColumnsWrapper>
            <FirstColumnText
              dangerouslySetInnerHTML={{
                __html: firstColumnContent
              }}
            />
            <SecondColumnWrapper>
              <p
                dangerouslySetInnerHTML={{
                  __html: secondColumnContent
                }}
              />
              {link && link.title && (
                <Button to={link.url} target={link.target}>
                  {link.title}
                </Button>
              )}
            </SecondColumnWrapper>
          </ColumnsWrapper>
        </TwoColSectionContainer>
      </Container>
    </TwoColSectionWrapper>
  )
}

const TwoColSectionWrapper = styled.section`
  .headers-wrapper{
    margin: 0 100px 30px 100px;
  }
  .sub-title{
    margin-top: 10px;
  }
`

const TwoColSectionContainer = styled(Container)`
  padding: 0 100px;
  position: relative;
  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--color-blue);
    width: 1px;
    height: clamp(85px, 7.68vw, 105px);
  }

  :after {
    left: 0;
  }

  :before {
    right: 0;
  }

  .sub-title {
    margin: 6px 0 28px;
    display: inline-block;
  }
`

const ColumnsWrapper = styled.div`
  display: flex;
  gap: ${10 / 16}rem;

  p {
    font-size: ${12 / 16}rem;
    line-height: 185%;
    font-weight: 400;
  }

  p + p {
    margin-top: 1.5em;
  }

  p + a {
    margin-top: ${30 / 16}rem;
  }

  a {
    max-width: ${266 / 16}rem;
  }
`

const FirstColumnText = styled.p`
  background-color: var(--color-light-gray);
  padding: clamp(28px, 2.92vw, 40px) clamp(44px, 5vw, 66px)
    clamp(48px, 5.12vw, 70px) clamp(28px, 2.92vw, 40px);
`

const SecondColumnWrapper = styled.div`
  background-color: var(--color-light-gray);
  padding: clamp(28px, 2.92vw, 40px) clamp(44px, 5vw, 66px)
    clamp(48px, 5.12vw, 70px) clamp(28px, 2.92vw, 40px);
`

export default TwoColumnTextSection
