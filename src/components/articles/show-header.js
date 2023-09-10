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
    <ArticleHeader className="relative">
      <BackgroundImage
        Tag="div"
        fluid={postType}
        className=""
        style={{ backgroundPosition: "center center" }}
      >
        {/* <div className="relative flex flex-col items-center pb-20 md:pb-8"> */}
        <div className="relative flex flex-col items-center pb-20 -mt-24 md:pb-8 md:-mt-10">
          {article.categories[0].title === "podcast" && (
            <Img
              fluid={article.mainImage.asset.fluid}
              alt={`portrait of ${article.interviewee}`}
              className="object-cover w-40 h-40 my-8 rounded-full md:w-48 md:h-48"
              imgStyle={{
                objectPosition: "top",
              }}
            />
          )}
          {article.categories[0].title !== "podcast" && (
            <div className="w-40 h-24 bg-transparent md:h-40"></div>
          )}
          {/* <div className="absolute bottom-0 w-4/5 py-6 text-center bg-white rounded md:w-2/3 -bottom-20"> */}
          <div
            className="absolute bottom-0 w-4/5 py-6 text-center bg-white rounded md:w-2/3"
            style={
              article.categories[0].title === "podcast"
                ? { bottom: "-5rem" }
                : { bottom: "-3rem" }
            }
          >
            <h3 className="text-2xl font-medium text-gray-800 md:text-3xl font-titles">
              {article.title}
            </h3>
            {article.categories[0].title === "podcast" && (
              <p className="text-lg text-gray-600 font-titles">
                - with {article.interviewee} -
              </p>
            )}
            {article.categories[0].title !== "podcast" && (
              <p className="pt-2 text-gray-600 font-titles">
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
