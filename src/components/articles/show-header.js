import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const ArticleHeader = styled.header`
  .background-gradient {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -9;
    background-size: cover;
    background: linear-gradient(
      to bottom,
      rgba(120, 119, 121, 0.37) 0%,
      rgba(103, 68, 119, 0.63) 100%
    );
    /* opacity: 0.9; */
  }
`

const ShowHeader = ({ article }) => {
  const image = useStaticQuery(graphql`
    query {
      podcastImage: file(relativePath: { eq: "city.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blogImage: file(relativePath: { eq: "street.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const postType =
    article.categories[0].title === "podcast"
      ? image.podcastImage.childImageSharp.fluid
      : image.blogImage.childImageSharp.fluid

  return (
    <ArticleHeader className="relative mt-1">
      <BackgroundImage
        Tag="div"
        fluid={postType}
        className=""
        style={{ backgroundPosition: "center center" }}
      >
        {/* <div className="flex flex-col items-center relative pb-20 md:pb-8"> */}
        <div className="flex flex-col items-center relative pb-20 md:pb-8">
          {article.categories[0].title === "podcast" && (
            <Img
              fluid={article.mainImage.asset.fluid}
              alt={`portrait of ${article.interviewee}`}
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full my-8"
              imgStyle={{
                objectPosition: "top",
              }}
            />
          )}
          {article.categories[0].title !== "podcast" && (
            <div className="w-40 h-24 md:h-40 bg-transparent"></div>
          )}
          {/* <div className="w-4/5 md:w-2/3 absolute bottom-0 py-6 bg-white rounded text-center -bottom-20"> */}
          <div
            className="w-4/5 md:w-2/3 absolute bottom-0 py-6 bg-white rounded text-center"
            style={
              article.categories[0].title === "podcast"
                ? { bottom: "-5rem" }
                : { bottom: "-3rem" }
            }
          >
            <h3 className="text-2xl md:text-3xl text-gray-800 font-medium font-titles">
              {article.title}
            </h3>
            {article.categories[0].title === "podcast" && (
              <p className="text-lg text-gray-600 font-titles">
                - with {article.interviewee} -
              </p>
            )}
            {article.categories[0].title !== "podcast" && (
              <p className="text-gray-600 font-titles pt-2">
                - {article.author.name} -
              </p>
            )}
          </div>
        </div>
        <div className="background-gradient"></div>
      </BackgroundImage>
    </ArticleHeader>
  )
}

export default ShowHeader
