import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllBlogs from "../components/AllBlogs"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"

export default function Home({ data }) {
  const blogs = data.allBloggerPost.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/phones.jpg"
            alt="old telephones"
            className="hero-img"
            placeholder="tracedSVG"
            layout="constrained"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h4>Awarded Top 100 Telecom Blog</h4>
            </div>
          </div>
        </header>

        <section className="featured-blogs">
          <h5>
            A provocative, un-sponsored assessment of current and future legal,
            regulatory, marketplace, and cultural issues affecting
            telecommunications and information policy.
          </h5>
          <h5>Latest Posts</h5>
          <BlogList blogs={blogs} />
        </section>
        {/* <AllBlogs /> */}
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allBloggerPost(limit: 12) {
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
