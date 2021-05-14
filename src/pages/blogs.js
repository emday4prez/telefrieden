import React from "react"
import Layout from "../components/Layout"
import AllBlogs from "../components/AllBlogs"
const blogs = () => {
  return (
    <Layout>
      <main className="page">
        <AllBlogs />
      </main>
    </Layout>
  )
}

export default blogs
