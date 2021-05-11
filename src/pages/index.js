import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/phones.jpg"
            alt="old telephones"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
        </header>
      </main>
      <h1>home page</h1>
      <Link to="/about">about</Link>
    </Layout>
  )
}
