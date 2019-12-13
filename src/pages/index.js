import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FeaturedSection from "../components/articles/featured-section"
import Sidebar from "../components/sidebar/sidebar"
import ArticlesList from "../components/articles/articles-list"
import PodcastSubscribeList from "../components/widget/podcast-subscribe-btn"

const IndexPage = ({ data, location }) => {
  const allArticles = data.allSanityPost.edges
  const latestArticle = allArticles[0]
  const archives = allArticles.slice(1)

  return (
    <Layout location={location}>
      <SEO title="Podcast Homepage" />
      <div className="justify-center pt-2 hidden md:flex md:pl-4">
        <PodcastSubscribeList />
      </div>
      <FeaturedSection article={latestArticle} />
      <div id="home-body" className="pt-24 px-8 md:flex">
        <div id="articles" className="md:w-3/4 md:pr-16">
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
    allSanityPost(sort: { order: DESC, fields: _createdAt }) {
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
          podcastEpisodeId
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
