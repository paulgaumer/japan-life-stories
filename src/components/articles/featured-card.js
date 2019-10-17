import React from "react"
import Img from "gatsby-image"

const FeaturedCard = ({ article }) => {
  const art = article.node
  return (
    <div className="flex mt-8 bg-gray-100 border-solid border-0 rounded">
      <div className="w-1/3">
        <Img
          fluid={art.mainImage.asset.fluid}
          alt={`portrait of ${art.interviewee}`}
          className="h-full object-cover rounded-tl rounded-bl"
        />
      </div>
      <div className="w-2/3 pl-8 pr-4 py-4">
        <h3 className="text-2xl text-gray-800 font-semibold">{art.title}</h3>
        <p className="text-lg text-gray-600">- {art.interviewee}</p>
        <div className="break-words pt-4">
          {/* {art._rawBody.map(el => {
            return <p>{el.children[0].text}</p>
          })} */}
          {/* {art._rawBody[1].children[0].text} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum...
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
