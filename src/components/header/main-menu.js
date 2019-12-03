import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
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
    <nav className="md:sticky-nav md:max-w-7xl mx-auto px-8 flex justify-around md:justify-between items-center pt-6 pb-4 bg-white border border-solid border-gray-300 border-t-0 border-r-0 border-b-2 border-l-0 uppercase text-sm md:text-lg text-gray-800 font-medium md:font-normal font-titles">
      <Link to="/" aria-label="Link to the Homepage">
        <MenuIcon>
          <Img
            fluid={icon.file.childImageSharp.fluid}
            alt="Japan Life Stories Logo"
            className={isVisible ? "w-10 showing" : "w-10 invisible"}
          />
        </MenuIcon>
      </Link>
      <div>
        <Link to="/" className="px-4 md:px-8 hover:font-medium">
          Stories
        </Link>
        <Link to="/about" className="px-4 md:px-8 hover:font-medium">
          About
        </Link>
        <Link to="/contact" className="px-4 md:px-8 hover:font-medium">
          Contact
        </Link>
        <a
          href="https://japanlifestories.ck.page/ebook"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-8 hover:font-medium"
        >
          Ebook
        </a>
      </div>
      {/* Empty div to allow space-between */}
      <div></div>
    </nav>
  )
}

export default MainMenu
