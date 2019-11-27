import React, { useState, useEffect } from "react"
import Moment from "react-moment"
import "moment-timezone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const TopBar = () => {
  const [currentTokyoTime, setCurrentTokyoTime] = useState("")
  const [currentTokyoWeather, setCurrentTokyoWeather] = useState({
    weather: [{ icon: "https://openweathermap.org/img/wn/10d.png" }],
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
      <div className="md:max-w-7xl mx-auto my-0 text-xs text-white flex items-center justify-center md:justify-between">
        <div className="hidden md:block font-medium">
          <a
            href="https://www.accuweather.com/en/jp/tokyo/226396/weather-forecast/226396"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={`https://openweathermap.org/img/wn/${currentTokyoWeather.weather[0].icon}.png`}
              alt="weather status"
              className="w-8"
            />
            <span className="px-1">Tokyo</span>
            <Moment date={currentTokyoTime} format="LT" tz="Asia/Tokyo" />
          </a>
        </div>

        <div className="flex items-center">
          <a
            href="https://twitter.com/JPLifeStories"
            className="text-lg pr-3 hover:text-red-200"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a
            href="https://www.facebook.com/JapanLifeStories"
            className="text-lg pr-3 hover:text-red-200"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://www.instagram.com/japan_life_stories/"
            className="text-lg hover:text-red-200"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <p className="hover:text-orange-400">Search</p> */}
        </div>
      </div>
    </header>
  )
}

export default TopBar
