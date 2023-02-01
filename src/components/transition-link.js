import React from 'react'
// import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Link = ({
  title,
  partialyActive = false,
  arialabel,
  className = 'transitionLink',
  target,
  onClick = () => { },
  to = '/',
  activeClassName = 'activeLink',
  children,
  dataText = ''
}) => {
  const internal = /^\/(?!\/)/.test(to)
  if (to.includes('#') || !internal)
    return (
      <a
        title={title}
        href={to}
        aria-label={arialabel ? arialabel : 'link'}
        className={className}
        onClick={onClick}
        target={target}
      >
        {children}
      </a>
    )

  return (
    <AniLink
      fade
      duration='.5'
      title={title}
      aria-label={arialabel ? arialabel : 'link'}
      className={className}
      onClick={onClick}
      target={target}
      to={to}
      partiallyActive={partialyActive}
      activeClassName={activeClassName}
      data-link-text={dataText}
    >
      {children}
    </AniLink>
  )
}
