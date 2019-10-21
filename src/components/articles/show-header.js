import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

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
    <header>
      <BackgroundImage Tag="div" fluid={image.file.childImageSharp.fluid}>
        <div className="flex flex-col items-center relative pb-20">
          <Img
            fluid={article.mainImage.asset.fluid}
            alt={`portrait of ${article.interviewee}`}
            className="w-40 h-40 object-cover rounded-full my-8"
            // imgStyle={{ objectPosition: "top" }}
          />

          <div className="w-2/3 absolute bottom-0 py-6 bg-white rounded text-center -bottom-20 ">
            <h3 className="text-3xl text-gray-800 font-semibold">
              {article.title}
            </h3>
            <p className="text-lg text-gray-600">- {article.interviewee} -</p>
            <ul className="mt-4">
              {socials.map(social => {
                switch (social) {
                  case "website":
                    return (
                      <a
                        href={article.socials[social]}
                        className="text-gray-900 pr-2"
                      >
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="text-xl text-orange-400 hover:text-orange-500"
                        />
                      </a>
                    )
                  case "facebook":
                    return (
                      <a
                        href={article.socials[social]}
                        className="text-gray-900 pr-2"
                      >
                        <FontAwesomeIcon
                          icon={faFacebookSquare}
                          className="text-xl text-orange-400 hover:text-orange-500"
                        />
                      </a>
                    )
                  case "twitter":
                    return (
                      <a
                        href={article.socials[social]}
                        className="text-gray-900 pr-2"
                      >
                        <FontAwesomeIcon
                          icon={faTwitterSquare}
                          className="text-xl text-orange-400 hover:text-orange-500"
                        />
                      </a>
                    )
                  case "instagram":
                    return (
                      <a
                        href={article.socials[social]}
                        className="text-gray-900"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-xl text-orange-400 hover:text-orange-500"
                        />
                      </a>
                    )
                  default:
                    break
                }
                return null
              })}
            </ul>
            {/* <div className="break-words pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div> */}
          </div>
        </div>
      </BackgroundImage>
    </header>
  )
}

export default ShowHeader
