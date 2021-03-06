import { Link } from "gatsby"
import React from "react"
import setupTags from "../../utils/setupTags"
import slugify from "slugify"

const TagsList = ({ blogs }) => {
  const newTags = setupTags(blogs)

  return (
    <div className="tag-container">
      <h4>Tags</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const tagSlug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${tagSlug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
