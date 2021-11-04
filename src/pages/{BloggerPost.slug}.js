import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import slugify from "slugify"
import { FcCalendar } from "react-icons/fc"
import SEO from "../components/SEO"
const BlogTemplate = ({ data }) => {
  const { title, published, labels, content } = data.bloggerPost
  const date = new Date(published)
  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="blog-page">
          <section className="blog-hero">
            <article className="recipe-info">
              <h2>{title}</h2>

              <div className="blog-icons">
                <p>
                  {" "}
                  <FcCalendar /> {date.toDateString()}
                </p>
              </div>

              {labels !== null && (
                <p className="blog-tags">
                  {labels.map((tag, index) => {
                    const tagSlug = slugify(tag, { lower: true })
                    return (
                      <Link to={`/tags/${tagSlug}`} key={index}>
                        {tag}
                      </Link>
                    )
                  })}
                </p>
              )}
            </article>
          </section>{" "}
          <section className="blog-content">
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
