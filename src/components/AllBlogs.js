import React from "react"
import TagsList from "./TagsList"
import BlogList from "./BlogList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allBloggerPost(limit: 500) {
      nodes {
        author {
          displayName
        }
        title
        content
        published(formatString: "")
        slug
        blog {
          id
        }
        id
        labels
      }
    }
  }
`

const AllBlogs = () => {
  const data = useStaticQuery(query)
  const blogs = data.allBloggerPost.nodes
  console.log(data)
  return (
    <section className="recipes-container">
      <h4>all blogs</h4>
      <TagsList blogs={blogs} />
      <BlogList blogs={blogs} />
    </section>
  )
}

export default AllBlogs
