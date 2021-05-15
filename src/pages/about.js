import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import BlogList from "../components/BlogList"
const about = ({
  data: {
    allBloggerPost: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <p>
              A provocative, unsponsored assessment of current and future legal,
              regulatory, marketplace, and cultural issues affecting
              telecommunications and information policy.
            </p>
            <p>
              Presented by Rob Frieden, Pioneers Chair and Professor of
              Telecommunications and Law, Penn State University.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/prof.jpg"
            alt="Rob Frieden"
            placeholder="tracedSVG"
            layout="constrained"
            className="about-img"
            as="section"
          />
        </section>
        <section className="featured-recipes">
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

export default about
