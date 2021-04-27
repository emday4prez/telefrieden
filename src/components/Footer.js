import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        {" "}
        &copy; 2008 - {new Date().getFullYear()} <span>TeleFrieden</span>. Built
        with <a href="https://www.gatsbyjs.com">GatsbyJS</a>
      </p>
    </footer>
  )
}

export default Footer
