import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = ({ article }) => {
  return (
    <div className="flex h-64 border-2 border-solid border-black pt-8 border-b-0 border-l-0 border-r-0 mb-8">
      <div className="w-3/4 pr-8">
        <h3 className="text-2xl text-gray-800">{article.title}</h3>
        <p className="text-base text-gray-600">- {article.interviewee}</p>
        <p className="pt-4 break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor ...
        </p>
        <Link
          to={`/${article.slug.current}`}
          className="text-sm text-gray-600 font-light underline hover:text-orange-400"
        >
          Read more...
        </Link>
      </div>
      <div className="w-1/4">
        <Img
          fluid={article.mainImage.asset.fluid}
          alt={`portrait of ${article.interviewee}`}
          className="h-full object-cover"
          imgStyle={{ objectPosition: "center" }}
        />
      </div>
    </div>
  )
}

export default ArticleCard
