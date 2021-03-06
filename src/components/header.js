import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../components/header.module.css"

const Header = ({ siteTitle, siteDescription, about, contact, blog }) => (
  <header
    style={{
      background: `rgb(242, 177, 92)`,
      marginBottom: `1.45rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: "0 0 0 0.9rem" }}>
        <Link
          to="/"
          style={{
            color: `purple`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <h3 style={{color: `blue`, margin: `0 0 0 0.9rem`, textAlign: `center`}}>{siteDescription}</h3>
        <div style={{margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.08rem`, display: `flex`}}>
          <h4 style={{marginRight: `0.9rem`}}>
        <Link to="/about" className={headerStyles.link}>{about}</Link>
          </h4>
          <h4 style={{marginRight: `0.9rem`}}>
        <Link to="/contact" className={headerStyles.link}>{contact}</Link>
          </h4>
          <h4 style={{marginRight: `0.9rem`}}>
        <Link to="/blog" className={headerStyles.link}>{blog}</Link>
          </h4>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  blog: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
