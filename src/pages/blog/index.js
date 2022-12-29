import { graphql, Link } from 'gatsby'
import React from 'react'

const BlogPage = ({ data }) => {
  const categories = data.categories.nodes
  const posts = data.posts.nodes

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        {categories?.map((category) => (
          <Link
            key={category.slug}
            to={`/blog/${category.slug}/`}>
            {category.name}
          </Link>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        {posts?.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}/`}>
            {post.title}
          </Link>
        ))}
      </div>
    </>
  )
}

export default BlogPage

export const blogQuery = graphql`
  query {
    categories: allWpCategory(
      filter: { id: { ne: "dGVybTox" } }
    ) {
      nodes {
        name
        slug
        id
      }
    }
    posts: allWpPost {
      nodes {
        title
        slug
        id
      }
    }
  }
`
