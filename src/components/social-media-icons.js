import React from 'react'
import styled from 'styled-components'

const SocialMediaIcons = ({
  sectionVariant = 'dark',
  text = 'Social Media',
  className,
  data: { socialMedia }
}) => {
  if (socialMedia?.length < 1) return null

  return (
    <SocialMediaWrapper className={className} variant={sectionVariant}>
      <span className='text'>{text ? text : 'Social Media'}</span>
      <ul>
        {socialMedia?.map(({ linkDoSocialMedia, ikonaSocialMedia }) => (
          <li key={linkDoSocialMedia}>
            <a
              href={linkDoSocialMedia}
              target='_blank'
              rel='noreferrer noopener'>
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
  padding-top: ${({ variant }) =>
    variant === 'footer' ? '0px' : 'clamp(30px, 4.392vw, 60px)'};
  align-items: center;

  @media (min-width: 897px) {
    display: none;
  }

  position: relative;

  &.mobile--nav&:before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    width: 91px;
    height: 1px;
    background-color: var(--color-darker-light-gray);
  }

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
