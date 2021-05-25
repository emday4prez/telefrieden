import React from "react"
import TagsList from "./TagsList"
import BlogList from "./BlogList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allBloggerPost {
      nodes {
        author {
          displayName
        }
        title
        content
        published
        slug
        id
        labels
      }
    }
  }
`

const AllBlogs = () => {
  const data = useStaticQuery(query)
  const blogs = data.allBloggerPost.nodes

  return (
    <section className="recipes-container">
      <h4>all blogs</h4>
      <BlogList blogs={blogs} />
      <TagsList blogs={blogs} />
    </section>
  )
}

export default AllBlogs
