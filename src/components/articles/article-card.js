import React from "react"
import { Link } from "gatsby"

const ArticleCard = () => {
  return (
    <div className="flex border-2 border-solid border-black pt-8 border-b-0 border-l-0 border-r-0 mb-8">
      <div className="w-3/4 pr-8">
        <h3 className="text-2xl text-gray-800">A story of entrepreneurship</h3>
        <p className="text-base text-gray-600">- Lina Boudier</p>
        <p className="pt-4 break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor ...
        </p>
        <Link
          to="#"
          className="text-sm text-gray-600 font-light underline hover:text-orange-400"
        >
          Read more...
        </Link>
      </div>
      <div className="w-1/4">
        <img
          src="https://via.placeholder.com/600"
          alt="portrait of the featured expat"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}

export default ArticleCard
