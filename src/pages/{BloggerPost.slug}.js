import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Tags from "./tags"
import { FcCalendar } from "react-icons/fc"
const BlogTemplate = ({ data }) => {
  const { title, slug, published, labels, content } = data.bloggerPost
  const date = new Date(published)
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <article className="recipe-info">
              <h2>{title}</h2>

              <div className="recipe-icons">
                <p>
                  {" "}
                  <FcCalendar /> {date.toDateString()}
                </p>
              </div>

              <p className="recipe-tags">
                {labels.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>{" "}
          <section className="recipe-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleBlog($slug: String) {
    bloggerPost(slug: { eq: $slug }) {
      id
      title
      slug
      published
      labels
      content
    }
  }
`

export default BlogTemplate
