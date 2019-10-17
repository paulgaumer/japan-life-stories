import React from "react"
import { Link } from "gatsby"

const MainMenu = () => {
  return (
    <nav>
      <div className="flex justify-center py-4 border border-solid border-black border-b-4 border-l-0 border-r-0">
        <Link to="/" className="pr-4 hover:text-orange-400">
          Stories
        </Link>
        <Link to="about" className="pr-4 hover:text-orange-400">
          About
        </Link>
        <Link to="contact" className="hover:text-orange-400">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default MainMenu
