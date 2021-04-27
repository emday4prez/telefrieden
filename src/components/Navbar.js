import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/teleFrieden.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="tele-frieden text logo" />
          </Link>
          <button onClick={() => setShow(!show)} className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            onClick={() => setShow(!show)}
            to="/"
            className="nav-link"
            activeClassName="active-link"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            onClick={() => setShow(!show)}
            className="nav-link"
            activeClassName="active-link"
          >
            Blogs
          </Link>
          <Link
            to="/tags"
            onClick={() => setShow(!show)}
            className="nav-link"
            activeClassName="active-link"
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setShow(!show)}
            activeClassName="active-link"
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="contact" onClick={() => setShow(!show)} className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
