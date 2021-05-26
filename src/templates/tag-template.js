import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"

const TagTemplate = ({ data, pageContext }) => {
  const blogs = data.allBloggerPost.nodes

  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.label}</h2>
        <div className="tag-recipes">
          <BlogList blogs={blogs} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogByLabel($label: String) {
    allBloggerPost(
      sort: { fields: published, order: DESC }
      filter: { labels: { eq: $label } }
    ) {
      nodes {
        title
        id
        slug
        labels
        published
        content
      }
    }
  }
`

export default TagTemplate
