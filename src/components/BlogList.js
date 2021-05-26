import React from "react"
import { Link } from "gatsby"

const BlogList = ({ blogs = [] }) => {
  return (
    <div className="recipes-list">
      {blogs.map(blog => {
        const { id, title, published, slug } = blog
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
