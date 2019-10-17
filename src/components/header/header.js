import React from "react"

import PropTypes from "prop-types"

import TopBar from "./topbar"
import Hero from "./hero"
import MainMenu from "./main-menu"

const Header = ({ siteTitle }) => (
  <header className="">
    <TopBar />
    <div className="md:max-w-6xl mx-auto px-8">
      <Hero />
      <MainMenu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
