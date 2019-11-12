import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/sidebar"
import ShowHeader from "../components/articles/show-header"
import ShowMain from "../components/articles/show-main"

const ArticleShow = ({ data }) => {
  const article = data.sanityPost
  return (
    <Layout>
      <SEO
        title={`${article.title} - ${article.interviewee}`}
        description={article.summary}
      />
      <ShowHeader article={article} />
      <div id="article-show-body" className="pt-16 px-8 md:flex">
        <div className="md:w-3/4 md:pr-16">
          <ShowMain article={article} />
        </div>
        <div id="sidebar" className="w-1/4 pt-16 invisible md:visible">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default ArticleShow

export const query = graphql`
  query($articleId: String!) {
    sanityPost(id: { eq: $articleId }) {
      title
      interviewee
      socials {
        website
        facebook
        twitter
        instagram
      }
      publishedAt(formatString: "LL")
      summary
      _rawBody
      mainImage {
        asset {
          fluid(maxWidth: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
