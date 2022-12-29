import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'
import { TwoColumnFlexVariants } from '../constants/two-column-flex-variants'
import { Button } from '../moleculas/link'
import { TextBlock } from '../organisms/text-block'

export default function Reserve({
  data: { header, title, text, link, steps }
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div className='text-wrap'>
            <TextBlock
              header={header}
              title={title}
              text={text}
              link={false}
              cytate={false}
              variant={
                TwoColumnFlexVariants.buttonUnderText
              }
            />
          </div>
          <Steps>
            {steps.map((el, index) => (
              <Step key={el.nazwaKroku}>
                <span className='bix-text'>
                  {index + 1}
                </span>
                <p className='text'>{el.nazwaKroku}</p>
              </Step>
            ))}
          </Steps>
        </Content>
        <div className='button-wrap'>
          <Button className={'white'}>{link.title}</Button>
        </div>
      </Container>
    </Wrapper>
  )
}

const Steps = styled.div`
  display: grid;
  grid-gap: 20px;
  position: relative;

  margin: var(--margin-intersection) 0 15px 0;
  margin-right: clamp(0px, ${(100 / 1366) * 100}vw, 100px);

  @media (max-width: 1140px) {
    margin-right: 50px;
  }
  @media (max-width: 1024px) {
    margin-right: 0;
  }

  @media (max-width: 840px) {
    margin-top: 0;
    margin-bottom: 50px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 25px;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: var(--color-yellow);
  }
`

const Step = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 50px auto;
  grid-gap: 30px;

  span {
    width: 50px;
    height: 50px;
    background-color: var(--color-yellow);
    color: var(--color-blue);
    position: relative;
    z-index: 3;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    font-size: 13px;
    font-weight: 600;
  }
`

const Wrapper = styled.section`
  margin-top: var(--margin-intersection);
  background-color: var(--color-blue);
  padding-top: 0;

  * {
    color: var(--color-white);
  }

  .white {
    margin-left: 100px;

    @media (max-width: 1080px) {
      margin-left: 40px;
    }
    @media (max-width: 840px) {
      margin-left: 0;
    }
  }

  @media (max-width: 840px) {
    .button-wrap {
      max-width: 500px;
      margin: 0 auto;
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(30px, ${(100 / 1366) * 100}vw, 100px);

  .text-wrap {
    position: relative;
    padding-left: 100px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1080px) {
      padding-left: 40px;
    }

    .text-block {
      position: relative;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      width: 208px;
      height: 208px;
      background-color: #212939;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }

  @media (max-width: 840px) {
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;

    .text-wrap {
      margin-top: var(--margin-intersection);
      margin-left: -40px;
      .text {
        padding-bottom: 0;
      }
    }
  }
`
