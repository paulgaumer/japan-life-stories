import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  /* position: sticky;
  top: 0px;
  z-index: 2; */
`

const MainMenu = () => {
  return (
    <Nav className="md:max-w-7xl mx-auto px-8 flex justify-center py-4 bg-white border border-solid border-black border-b-4 border-l-0 border-r-0 uppercase text-lg text-gray-800">
      <Link to="/" className="pr-10 hover:font-bold">
        Podcast Stories
      </Link>
      <Link to="/about" className="pr-10 hover:font-bold">
        About
      </Link>
      <Link to="/contact" className="hover:font-bold">
        Contact
      </Link>
    </Nav>
  )
}

export default MainMenu
