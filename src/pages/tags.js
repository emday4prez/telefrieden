import React from "react"
import Layout from "../components/Layout"
import TagsList from "../components/TagsList"
import { graphql, Link } from "gatsby"
import setupTags from "../../utils/setupTags"
import slugify from "slugify"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allBloggerPost.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text, { lower: true })
            return (
              <Link to={`/${tagSlug}`} key={index} className="tag">
                <h5>{text}</h5> <p>({value}) </p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allBloggerPost {
      nodes {
        labels
      }
    }
  }
`

export default Tags
