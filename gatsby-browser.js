import React from 'react'
import { Script } from 'gatsby'
import Layout from './src/layout'
import './src/styles/normalize.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import './src/styles/fonts.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    {element}
    <Script src='https://user.callnowbutton.com/domain_562f93e1_baeb_4c20_b6e0_4a491ff760ab.js' />
  </Layout>
)
