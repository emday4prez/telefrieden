import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"
import SEO from "../components/SEO"
const contact = ({ data }) => {
  const blogs = data.allBloggerPost.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mnqldjqq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">e-mail address</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
                <button className="btn block">submit</button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-blogs">
          <h5>Latest Posts</h5>
          <BlogList blogs={blogs} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allBloggerPost(limit: 6) {
      nodes {
        author {
          displayName
        }
        title
        content
        published
        slug
        id
      }
    }
  }
`

export default contact
