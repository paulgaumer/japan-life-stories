import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = ({ article }) => {
  return (
    <div className="last:border-b-0 border-b-2 border-solid border-gray-200 pb-10 mb-10">
      <Link to={`/stories/${article.slug.current}`} className="">
        <div className="md:flex">
          <div className="md:w-3/5 lg:w-3/4 md:pr-8">
            <div className="flex justify-between items-start md:block">
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl text-gray-900 font-titles">
                  {article.title}
                </h3>
                <p className="text-xl text-gray-700 font-titles pt-2">
                  <span className="text-orange-500">- </span>with{" "}
                  {article.interviewee}
                </p>
              </div>
              {/* Image displays on Mobile only */}
              <div className="md:hidden flex-shrink-0">
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
              to={`/stories/${article.slug.current}`}
              className="text-sm text-orange-500 font-semibold hover:text-orange-400"
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
    </div>
  )
}

export default ArticleCard
