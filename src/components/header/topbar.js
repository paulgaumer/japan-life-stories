import React from "react"
import { Link } from "gatsby"

const TopBar = () => (
  <header className="bg-black">
    <div className="md:max-w-6xl mx-auto px-8 my-0 py-2 text-xs text-white flex justify-center md:justify-between">
      <div className="hidden md:block">
        <Link to="/">Sunny Tokyo, 1:00PM</Link>
      </div>

      <div className="flex">
        <Link to="#" className="pr-3 hover:text-orange-400">
          Twitter
        </Link>
        <Link to="#" className="pr-3 hover:text-orange-400">
          Facebook
        </Link>
        <Link to="#" className="pr-3 hover:text-orange-400">
          Instagram
        </Link>
        <p className="hover:text-orange-400">Search</p>
      </div>
    </div>
  </header>
)

export default TopBar
