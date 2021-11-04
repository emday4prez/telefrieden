import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import BlogList from "../components/BlogList"
import SEO from "../components/SEO"

const about = ({
  data: {
    allBloggerPost: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <p>
              Rob Frieden is former Pioneers Chair and retired Professor of
              Telecommunications and Law at Penn State University in the United
              States. Frieden holds a B.A., with distinction, from the
              University of Pennsylvania (1977) and a J.D. from the University
              of Virginia (1980). Before accepting an academic appointment,
              Frieden practiced law in Washington, D.C., and served as Assistant
              General Counsel at PTAT Systems, Inc. where he handled corporate,
              transactional and regulatory issues for the nation's first private
              undersea fiber optic cable company. He continues to provide legal,
              management and market forecasting consultancy services. He has
              held senior policy making positions in international
              telecommunications at the United States Federal Communications
              Commission and the National Telecommunications and Information
              Administration.
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

export default about
