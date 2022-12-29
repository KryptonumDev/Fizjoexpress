import { graphql } from 'gatsby'
import React from 'react'

const WpCategoryPage = ({ data }) => {
  return <div>Kategoria: {data.wpCategory.name}</div>
}

export default WpCategoryPage

export const blogCategoryQuery = graphql`
  query ($id: String) {
    wpCategory(id: { eq: $id }) {
      name
      slug
      description
      seo {
        breadcrumbs {
          text
          url
        }
        canonical
        fullHead
      }
    }
  }
`
