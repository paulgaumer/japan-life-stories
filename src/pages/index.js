import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FeaturedSection from "../components/articles/featured-section"
import Sidebar from "../components/sidebar/sidebar"
import ArticlesList from "../components/articles/articles-list"

const IndexPage = ({ data }) => {
  const allArticles = data.allSanityPost.edges
  const latestArticle = allArticles[0]
  return (
    <Layout>
      <SEO title="Stories" />
      <div id="home-body" className="pt-16 md:flex">
        <div id="articles" className="md:w-3/4 md:pr-16">
          <FeaturedSection article={latestArticle} />
          <ArticlesList />
        </div>
        <div id="sidebar" className="w-1/4 invisible md:visible">
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
