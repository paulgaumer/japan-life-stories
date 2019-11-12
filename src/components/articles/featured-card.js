import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const FeaturedCard = ({ article }) => {
  const art = article.node
  return (
    <Link to={`/${art.slug.current}`} className="">
      <div className="flex items-center mt-8 bg-gray-100 border-solid border-0 rounded">
        <div className="w-1/3">
          <Img
            fluid={art.mainImage.asset.fluid}
            alt={`portrait of ${art.interviewee}`}
            className="h-full object-cover rounded-tl rounded-bl"
            imgStyle={{ objectPosition: "top" }}
          />
        </div>
        <div className="w-2/3 pl-8 pr-4 py-4">
          <h3 className="text-2xl text-gray-800 font-semibold">{art.title}</h3>
          <p className="text-lg text-gray-600">- {art.interviewee}</p>
          <div className="break-words pt-4">{art.summary}</div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedCard
