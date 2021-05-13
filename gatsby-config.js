require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "TeleFrieden",
    description: "Award Winning Telecom Blog",
    author: "Rob Frieden",
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-blogger",
      options: {
        apiKey: process.env.BLOGGER_API_KEY,
        blogId: process.env.BLOGGER_ID,
      },
    },
  ],
}
