import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PodcastPlayer from "../widget/podcast-player"

const FeaturedCard = ({ article }) => {
  const art = article.node
  return (
    <>
      <Link to={`/stories/${art.slug.current}`} className="">
        {/* <div className="lg:flex items-center mt-8 bg-orange-100 border-solid border-0 rounded"> */}
        <div
          className="lg:flex items-center mt-8 rounded"
          style={{
            borderTop: "1px solid #e2e8f0",
            borderLeft: "1px solid #e2e8f0",
            borderRight: "1px solid #e2e8f0",
          }}
        >
          <div className="lg:w-1/3">
            <Img
              fluid={art.mainImage.asset.fluid}
              alt={`portrait of ${art.interviewee}`}
              className="h-56 md:h-64 object-cover rounded-tl rounded-bl"
              imgStyle={{ objectPosition: "top" }}
            />
          </div>
          <div className="lg:w-2/3 pl-8 pr-4 py-4">
            <h3 className="text-3xl text-gray-900 font-semibold">
              {art.title}
            </h3>
            <p className="text-xl text-gray-700">- with {art.interviewee}</p>
            <div className="break-words pt-6">{art.summary}</div>
            <Link
              to={`/stories/${art.slug.current}`}
              className="text-sm text-orange-500 font-semibold hover:text-orange-400"
            >
              Read the full interview...
            </Link>
          </div>
        </div>
      </Link>
      <PodcastPlayer />
    </>
  )
}

export default FeaturedCard
