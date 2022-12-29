import React from 'react'
import styled from 'styled-components'

const SocialMediaIcons = ({
  sectionVariant = 'dark',
  data: { socialMedia }
}) => {
  if (socialMedia?.length < 1) return null
  console.log(socialMedia)
  return (
    <SocialMediaWrapper color={sectionVariant}>
      <span className='text'>Social Media</span>
      <ul>
        {socialMedia?.map(({ linkDoSocialMedia, ikonaSocialMedia }) => (
          <li key={linkDoSocialMedia}>
            <a href={linkDoSocialMedia} target='_blank'>
              <img
                src={ikonaSocialMedia.localFile.publicURL}
                alt={linkDoSocialMedia}
              />
            </a>
          </li>
        ))}
      </ul>
    </SocialMediaWrapper>
  )
}

export default SocialMediaIcons

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: clamp(16px, 1.61vw, 22px);
  margin-top: clamp(30px, ${(60 / 1366) * 100}vw, 60px);
  align-items: center;

  @media (max-width: 480px) {
    span {
      display: none;
    }
  }

  > span {
    color: ${({ color }) =>
      color === 'dark' ? 'var(--color-white)' : 'var(--color-blue)'};
    font-weight: 300;
    font-size: 12px;
  }

  > ul {
    display: flex;
    gap: clamp(16px, 1.757vw, 24px);
  }
`
