import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogList = ({ blogs = [] }) => {
  return (
    <div className="recipes-list">
      {blogs.map(blog => {
        const { id, title, published, slug, labels } = blog
        const date = new Date(published)

        return (
          <Link className="recipe" key={id} to={`/${slug}`}>
            <h5>{title}</h5>
            <p> {date.toDateString()}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogList
