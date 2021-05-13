import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        {" "}
        &copy; 2007 - {new Date().getFullYear()} <span>TeleFrieden</span>. Built
        with{" "}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
          Gatsby{" "}
        </a>
        and{"  "}
        <a
          href="https://telefrieden.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          Blogger
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
