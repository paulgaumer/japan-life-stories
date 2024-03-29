import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/sidebar"
import ShowHeader from "../components/articles/show-header"
import ShowMain from "../components/articles/show-main"
import PodcastPlayer from "../components/widget/podcast-player"

const ArticleShow = ({ data, location }) => {
  const article = data.sanityPost
  return (
    <Layout location={location}>
      <SEO
        title={`${article.title} - ${article.interviewee}`}
        description={article.summary}
        url={`https://japanlifestories.com/stories/${article._rawSlug.current}/`}
      />
      {article.podcastEpisodeId && (
        <PodcastPlayer podcastEpisodeId={article.podcastEpisodeId} />
      )}
      <ShowHeader article={article} />
      <div id="article-show-body" className="px-8 pt-16 md:flex">
        <div className="md:w-3/4 md:pr-16">
          <ShowMain article={article} />
        </div>
        <div id="sidebar" className="hidden w-1/4 pt-16 md:block">
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
      author {
        name
      }
      interviewee
      socials {
        website
        facebook
        twitter
        instagram
      }
      publishedAt(formatString: "LL")
      summary
      _rawSlug
      _rawBody
      _rawShowNotes
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
`
