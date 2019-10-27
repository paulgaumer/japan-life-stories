import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

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
    /* opacity: 0.7; */
  }
`

const SocialIcon = props => {
  return (
    <a
      href={props.article.socials[props.social]}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-900 px-2"
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="text-xl text-orange-400 hover:text-orange-500"
      />
    </a>
  )
}

const ShowHeader = ({ article }) => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "city.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const socials = Object.keys(article.socials)
  return (
    <ArticleHeader className="relative mt-1">
      <BackgroundImage
        Tag="div"
        fluid={image.file.childImageSharp.fluid}
        className=""
      >
        <div className="flex flex-col items-center relative pb-20">
          <Img
            fluid={article.mainImage.asset.fluid}
            alt={`portrait of ${article.interviewee}`}
            className="w-40 h-40 object-cover rounded-full my-8"
            // imgStyle={{ objectPosition: "top" }}
          />

          <div className="w-2/3 absolute bottom-0 py-6 bg-white rounded text-center -bottom-20 ">
            <h3 className="text-4xl text-gray-800 font-semibold">
              {article.title}
            </h3>
            <p className="text-lg text-gray-600">- {article.interviewee} -</p>
            <ul className="mt-4">
              {socials.map(social => {
                let icon = null
                switch (social) {
                  case "website":
                    icon = faGlobe
                    break
                  case "facebook":
                    icon = faFacebookSquare
                    break
                  case "twitter":
                    icon = faTwitterSquare
                    break
                  case "instagram":
                    icon = faInstagram
                    break
                  default:
                    break
                }
                return (
                  <SocialIcon icon={icon} article={article} social={social} />
                )
              })}
            </ul>
          </div>
        </div>
        <div className="background-gradient"></div>
      </BackgroundImage>
    </ArticleHeader>
  )
}

export default ShowHeader
