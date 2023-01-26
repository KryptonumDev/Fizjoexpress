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

// export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
//     setHtmlAttributes({ lang: "pl" })
//     setHeadComponents([
//         <link
//             rel="preload"
//             href="/fonts/Arsenal-Bold.woff2"
//             as="font"
//             type="font/woff2"
//             crossOrigin="anonymous"
//             key="interFont"
//         />,
//         <link
//             rel="preload"
//             href="/fonts/Arsenal-Regular.woff2"
//             as="font"
//             type="font/woff2"
//             crossOrigin="anonymous"
//             key="interFont"
//         />,
//         <link
//             rel="preload"
//             href="/fonts/SourceSansPro-SemiBold.woff2"
//             as="font"
//             type="font/woff2"
//             crossOrigin="anonymous"
//             key="interFont"
//         />,
//         <link
//             rel="preload"
//             href="/fonts/SourceSansPro-Regular.woff2"
//             as="font"
//             type="font/woff2"
//             crossOrigin="anonymous"
//             key="interFont"
//         />,
//     ])
// }
