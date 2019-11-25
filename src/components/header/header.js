import React from "react"

import PropTypes from "prop-types"

import TopBar from "./topbar"
import Hero from "./hero"
import MainMenu from "./main-menu"

const Header = ({ siteTitle, location }) => {
  return (
    <>
      <header className="">
        <TopBar />
        {!location.pathname.includes("/stories/") && (
          <div className="md:max-w-4xl mx-auto px-8">
            <Hero location={location} />
          </div>
        )}
      </header>
      <MainMenu />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
