import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FeaturedSection from "../components/articles/featured-section"
import Sidebar from "../components/sidebar"
import ArticlesList from "../components/articles/articles-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Stories" />
    <div id="home-body" className="pt-16 md:flex">
      <div id="articles" className="md:w-2/3 md:pr-16">
        <FeaturedSection />
        <ArticlesList />
      </div>
      <div id="sidebar" className="bg-orange-200 w-1/3 invisible md:visible">
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default IndexPage
