import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/${article.slug.current}`} className="">
      <div className="md:flex border-2 border-solid border-black pt-8 border-b-0 border-l-0 border-r-0 mb-8">
        <div className="md:w-3/5 lg:w-3/4 md:pr-8">
          <div className="flex justify-between items-center md:block">
            <div>
              <h3 className="text-2xl text-gray-800">{article.title}</h3>
              <p className="text-base text-gray-600">- {article.interviewee}</p>
            </div>
            {/* Image displays on Mobile only */}
            <div className="md:hidden w-1/3">
              <Img
                fluid={article.mainImage.asset.fluid}
                alt={`portrait of ${article.interviewee}`}
                className="h-24 w-24 object-cover rounded-full"
                imgStyle={{ objectPosition: "center" }}
              />
            </div>
            {/* .. */}
          </div>
          <p className="pt-6 break-words">{article.summary}</p>
          <Link
            to={`/${article.slug.current}`}
            className="text-sm text-gray-600 font-light underline hover:text-orange-400"
          >
            Read more...
          </Link>
        </div>
        <div className="hidden md:block md:w-2/5 lg:w-1/4">
          <Img
            fluid={article.mainImage.asset.fluid}
            alt={`portrait of ${article.interviewee}`}
            className="h-full lg:h-56 object-cover"
            imgStyle={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
