import React from 'react'
import styled from 'styled-components'
import { Button } from '../moleculas/link'
import { ImageWithButton } from '../organisms/image-with-button'
import { TextBlock } from '../organisms/text-block'
import { Container } from './../atoms/container'

// const TwoColumnFlexVariants = {
//   buttonUnderText: 'BUTTON_UNDER_TEXT',
//   buttonOverImage: 'BUTTON_OVER_IMAGE'
// }

const TwoColumnFlexDirectionVariants = {
  ImageOnRight: 'IMAGE_ON_RIGHT',
  ImageOnLeft: 'IMAGE_ON_LEFT'
}

export default function TwoColumnFlex({
  // Może się przyda zrobić kilka wariantów
  //   variant = TwoColumnFlexVariants.buttonUnderText,
  direction = TwoColumnFlexDirectionVariants.ImageOnRight,
  data: { header, title, text, image, link }
}) {
  return (
    <Wrapper className='two-column'>
      <Container>
        <Content
          reverseColumns={
            direction ===
            TwoColumnFlexDirectionVariants.ImageOnRight
          }
          className='two-column-content'>
          <ImageWithButton link={link} image={image} />
          <TextBlock
            header={header}
            title={title}
            text={text}
            link={link}
          />
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Content = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
  flex-direction: ${({ reverseColumns }) =>
    reverseColumns ? 'row-reverse' : 'row'};
`
