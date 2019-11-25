import React from "react"
import { Link } from "gatsby"
// import styled from "styled-components"

// const Nav = styled.nav`
//   position: sticky;
//   top: 0px;
//   z-index: 2;
// `

const MainMenu = () => {
  return (
    <nav className="md:sticky-nav md:max-w-7xl mx-auto px-8 flex justify-around md:justify-center pt-6 pb-4 bg-white border border-solid border-gray-700 border-t-0 border-r-0 border-b-4 border-l-0  uppercase text-sm md:text-lg text-gray-800 font-medium md:font-normal font-titles">
      <Link to="/" className="md:pr-10 hover:font-medium">
        Podcast Stories
      </Link>
      <Link to="/about" className="md:pr-10 hover:font-medium">
        About
      </Link>
      <Link to="/contact" className="hover:font-medium">
        Contact
      </Link>
    </nav>
  )
}

export default MainMenu
