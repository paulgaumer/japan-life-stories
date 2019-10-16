import React from "react"

import PropTypes from "prop-types"

import TopBar from "./topbar"
import Hero from "./hero"

const Header = ({ siteTitle }) => (
  <header className="">
    <TopBar />
    <Hero />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
