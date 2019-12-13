import React from "react"
import FeaturedCard from "./featured-card"

const FeaturedSection = ({ article }) => {
  return (
    <div className="pt-12 md:pt-20 px-8">
      <h2 className="text-xl uppercase font-bold text-gray-800 font-titles">
        Latest Life Story
      </h2>
      <FeaturedCard article={article} />
    </div>
  )
}

export default FeaturedSection
