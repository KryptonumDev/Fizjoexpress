import { graphql } from 'gatsby'
import React from 'react'

const BlogPost = ({ data: { wpPost } }) => {
  const {
    title,
    terms: { nodes: taxonomies },
    date
  } = wpPost
  const author = taxonomies.find(
    (el) => el.taxonomyName === 'autor'
  )
  const category = taxonomies.find(
    (el) => el.taxonomyName === 'category'
  )

  return (
    <div>
      {' '}
      {title}
      {date}
      {author.name} | {category.name}
    </div>
  )
}

export default BlogPost

export const blogPostQuery = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      title
      terms {
        nodes {
          name
          taxonomyName
          slug
        }
      }
      date(formatString: "D.MM.YYYY")
    }
  }
`
