import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllBlogs from "../components/AllBlogs"
import SEO from "../components/SEO"

export default function Home() {
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
        <AllBlogs />
      </main>
    </Layout>
  )
}
