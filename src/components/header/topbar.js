import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Moment from "react-moment"
import "moment-timezone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const TopBar = () => {
  const [currentTokyoTime, setCurrentTokyoTime] = useState("")
  const [currentTokyoWeather, setCurrentTokyoWeather] = useState({
    weather: [{ icon: "10d" }],
  })

  useEffect(() => {
    setInterval(() => {
      const time = new Date()
      setCurrentTokyoTime(time)
    }, 1000)
  }, [])

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.GATSBY_API_WEATHER}`
    )
      .then(res => res.json())
      .then(data => {
        setCurrentTokyoWeather(data)
      })
  }, [])

  return (
    <header className="bg-red-500">
      <div className="md:max-w-7xl mx-auto my-0 px-2 text-xs text-white flex items-center justify-center md:justify-between">
        <div className="hidden md:block font-medium">
          <Link to="/" className="flex items-center">
            <img
              src={`https://openweathermap.org/img/wn/${currentTokyoWeather.weather[0].icon}.png`}
              alt="weather status"
              className="w-8"
            />
            <span className="px-1">Tokyo</span>
            <Moment date={currentTokyoTime} format="LT" tz="Asia/Tokyo" />
          </Link>
        </div>

        <div className="flex items-center">
          <a
            href="https://twitter.com/JPLifeStories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg pr-3 hover:text-red-200"
            aria-label="Link to Twitter"
          >
            <FontAwesomeIcon icon={faTwitterSquare} width=".75rem" />
          </a>
          <a
            href="https://www.facebook.com/JapanLifeStories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg pr-3 hover:text-red-200"
            aria-label="Link to Facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} width=".75rem" />
          </a>
          <a
            href="https://www.instagram.com/japan_life_stories_podcast/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-red-200"
            aria-label="Link to Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} width=".75rem" />
          </a>
          {/* <p className="hover:text-orange-400">Search</p> */}
        </div>
      </div>
    </header>
  )
}

export default TopBar
