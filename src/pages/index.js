import { graphql } from "gatsby"
import * as React from "react"
import TwoColumnFlex from "../components/two-column-flex"

const IndexPage = ({ data: { wpPage } }) => {
  return (
    <main>
      <TwoColumnFlex />
    </main >
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
