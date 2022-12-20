import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data: { wpPage } }) => {
  return (
    <main>
      {wpPage.homepage.text}
    </main>
  )
}

export default IndexPage

export const query = graphql`
query homepage {
  wpPage{
    id
    homepage{
      text
    }
  }
}
`
