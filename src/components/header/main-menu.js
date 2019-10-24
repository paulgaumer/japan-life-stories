import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 2;
`

const MainMenu = () => {
  return (
    <Nav className="flex justify-center py-4 bg-white border border-solid border-black border-b-4 border-l-0 border-r-0 md:max-w-6xl mx-auto px-8">
      <Link to="/" className="pr-8 hover:text-orange-400">
        Stories
      </Link>
      <Link to="/about" className="pr-8 hover:text-orange-400">
        About
      </Link>
      <Link to="/contact" className="hover:text-orange-400">
        Contact
      </Link>
    </Nav>
  )
}

export default MainMenu
