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
  const allPodcasts = allArticles.filter(article => {
    return article.node.categories[0].title === "podcast"
  })
  const latestPodcast = allPodcasts[0]
  const latestPodcastId = allPodcasts[0].node.id
  console.log(latestPodcastId)

  // const archives = allArticles.slice(1)
  const archives = allArticles.filter(article => {
    return article.node.id !== latestPodcastId
  })

  return (
    <Layout location={location}>
      <SEO title="Podcast Homepage" />
      <div className="justify-center hidden pt-2 md:flex md:pl-4">
        <PodcastSubscribeList />
      </div>
      <FeaturedSection article={latestPodcast} />
      <div id="home-body" className="px-8 md:pt-24 md:flex">
        <div id="articles" className="md:w-3/4 md:pr-16">
          <ArticlesList articles={archives} />
        </div>
        <div id="sidebar" className="hidden w-1/4 md:block">
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
          author {
            name
          }
          _createdAt
          id
          slug {
            current
          }
          interviewee
          summary
          _rawBody
          podcastEpisodeId
          categories {
            title
          }
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
