import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FeaturedSection from "../components/articles/featured-section"
import Sidebar from "../components/sidebar/sidebar"
import ArticlesList from "../components/articles/articles-list"

const IndexPage = ({ data, location }) => {
  const allArticles = data.allSanityPost.edges
  const latestArticle = allArticles[0]
  const archives = allArticles.slice(1)
  return (
    <Layout location={location}>
      <SEO title="Stories" />
      <div id="home-body" className="pt-16 px-8 md:flex">
        <div id="articles" className="md:w-3/4 md:pr-16">
          <FeaturedSection article={latestArticle} />
          <ArticlesList articles={archives} />
        </div>
        <div id="sidebar" className="w-1/4 hidden md:block">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const articlesQuery = graphql`
  query ArticlesQuery {
    allSanityPost(sort: { order: ASC, fields: _createdAt }) {
      edges {
        node {
          title
          _createdAt
          id
          slug {
            current
          }
          interviewee
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
    }
  }
`
