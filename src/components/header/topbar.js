import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const TopBar = () => (
  <header className="bg-black">
    <div className="md:max-w-6xl mx-auto px-8 my-0 py-2 text-xs text-white flex items-center justify-center md:justify-between">
      <div className="hidden md:block">
        <Link to="/">Sunny Tokyo, 1:00PM</Link>
      </div>

      <div className="flex items-center">
        <Link to="#" className="text-lg pr-3 hover:text-orange-400">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Link>
        <Link to="#" className="text-lg pr-3 hover:text-orange-400">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
        <Link to="#" className="text-lg pr-3 hover:text-orange-400">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <p className="hover:text-orange-400">Search</p>
      </div>
    </div>
  </header>
)

export default TopBar
