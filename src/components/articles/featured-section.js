import React from "react"
import FeaturedCard from "./featured-card"

const FeaturedSection = ({ article }) => {
  return (
    <div>
      <h2 className="text-2xl uppercase font-bold text-gray-800">
        Latest Life Story
      </h2>
      <FeaturedCard article={article} />
    </div>
  )
}

export default FeaturedSection
