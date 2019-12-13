import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import cloud from "../../images/cloud-computing.svg"
// import Icon from "../../images/sun-mic.png"

const MenuIcon = styled.div`
  .showing {
    animation: slidein 0.5s ease-in forwards;
  }

  @keyframes slidein {
    0% {
      transform: translateX(-200px);
    }
    100% {
    }
  }
`

const MainMenu = () => {
  const icon = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sun-mic.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  }, [])

  const listenToScroll = () => {
    window.pageYOffset > 270 ? setIsVisible(true) : setIsVisible(false)
  }

  return (
    <nav className="md:sticky-nav md:max-w-7xl mx-auto px-4 md:px-8 flex justify-center md:justify-between items-center pt-6 pb-2 bg-white border border-solid border-gray-300 border-t-0 border-r-0 border-b-2 border-l-0 uppercase text-sm md:text-lg text-gray-800 font-medium md:font-normal font-titles">
      <Link
        to="/"
        aria-label="Link to the Homepage"
        className="hidden md:inline-block"
      >
        <MenuIcon>
          <Img
            fluid={icon.file.childImageSharp.fluid}
            alt="Japan Life Stories Logo"
            className={isVisible ? "w-10 showing" : "w-10 invisible"}
          />
        </MenuIcon>
      </Link>
      <div className="flex justify-center">
        <Link
          to="/"
          className="mx-4 md:mr-8 hover:font-medium border-b-2 border-white hover:border-red-400"
        >
          Stories
        </Link>
        <Link
          to="/about"
          className="mx-4 md:mx-8 hover:font-medium border-b-2 border-white hover:border-red-400"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="mx-4 md:mx-8 hover:font-medium hidden md:inline-block border-b-2 border-white hover:border-red-400"
        >
          Contact
        </Link>
        <a
          href="https://japanlifestories.ck.page/ebook"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 md:mx-8 hover:font-medium"
        >
          <div className="flex items-start border-b-2 border-white hover:border-red-400">
            <span className="hidden md:inline-block">Free Travel Guide</span>
            <span className="md:hidden">Free Guide</span>
            <img
              src={cloud}
              alt="download ebook"
              className="w-4 md:w-6 ml-1 md:ml-2"
            />
          </div>
        </a>
      </div>
      {/* Empty div to allow space-between */}
      <div></div>
    </nav>
  )
}

export default MainMenu
