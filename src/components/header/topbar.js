import React from "react"
import { Link } from "gatsby"

const TopBar = () => (
  <header className="bg-black">
    <div className="max-w-6xl mx-auto my-0 px-8 py-2 text-xs text-white flex justify-between">
      <div>
        <Link to="/">Sunny Tokyo, 1:00PM</Link>
      </div>

      <div className="flex">
        <Link to="#" className="pr-3">
          Twitter
        </Link>
        <Link to="#" className="pr-3">
          Facebook
        </Link>
        <Link to="#" className="pr-3">
          Instagram
        </Link>
        <p className="">Search</p>
      </div>
    </div>
  </header>
)

export default TopBar
