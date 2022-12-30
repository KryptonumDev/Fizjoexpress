import React from 'react'
import styled from 'styled-components'

const SocialMediaIcons = ({
  sectionVariant = 'dark',
  text = 'Social Media',
  data: { socialMedia }
}) => {
  if (socialMedia?.length < 1) return null

  return (
    <SocialMediaWrapper variant={sectionVariant}>
      <span className='text'>{text ? text : 'Social Media'}</span>
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
  margin-top: ${({ variant }) =>
    variant === 'footer' ? '0px' : 'clamp(30px, 4.392vw, 60px)'};
  align-items: center;

  @media (max-width: 480px) {
    /* span {
      display: ${({ variant }) => (variant === 'footer' ? 'inline' : 'none')};
    } */
  }

  > span {
    variant: ${({ variant }) =>
      variant === 'dark' ? 'var(--color-white)' : 'var(--color-blue)'};
    font-weight: 300;
    font-size: 12px;

    line-height: 1;
  }

  > ul {
    display: flex;
    gap: clamp(16px, 1.757vw, 24px);
    a {
      line-height: 1;
      display: inline-flex;
      align-items: center;
      height: 100%;
    }
  }
`
