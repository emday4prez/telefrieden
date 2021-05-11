import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>this is the about page</h2>
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
      </main>
    </Layout>
  )
}

export default about
