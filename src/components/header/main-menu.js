import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Icon from "../../images/sun-mic.png"

const MenuIcon = styled.img`
  &.showing {
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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  }, [])

  const listenToScroll = () => {
    window.pageYOffset > 270 ? setIsVisible(true) : setIsVisible(false)
  }

  return (
    <nav className="md:sticky-nav md:max-w-7xl mx-auto px-8 flex justify-around md:justify-between items-center pt-6 pb-4 bg-white border border-solid border-gray-300 border-t-0 border-r-0 border-b-2 border-l-0 uppercase text-sm md:text-lg text-gray-800 font-medium md:font-normal font-titles">
      <Link to="/">
        <MenuIcon
          src={Icon}
          alt="Japan Life Stories icon"
          className={isVisible ? "w-10 showing" : "w-10 invisible"}
        />
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
