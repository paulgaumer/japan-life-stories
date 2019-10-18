import React from "react"
import ArticleCard from "./article-card"

const ArticlesList = props => {
  const { articles } = props
  return (
    <div className="mt-12">
      {articles.map(({ node }) => {
        return <ArticleCard article={node} key={node.id} />
      })}
    </div>
  )
}

export default ArticlesList
