import React from "react"

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
          <div className="hero-container">
            <div className="hero-text">
              <h1>TeleFrieden</h1>
              <h4>Awarded Top 100 Telecom Blog</h4>
            </div>
          </div>
        </header>
      </main>
      
    
    </Layout>
  )
}
