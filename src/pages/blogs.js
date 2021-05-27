import React from "react"
import Layout from "../components/Layout"
import AllBlogs from "../components/AllBlogs"
import SEO from "../components/SEO"
const blogs = () => {
  return (
    <Layout>
      <SEO title="All Posts" />
      <main className="page">
        <AllBlogs />
      </main>
    </Layout>
  )
}

export default blogs
