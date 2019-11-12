import React from "react"
import { Link } from "gatsby"
import podcastBannerNoCity from "../../images/podcast-banner-no-city.png"
// import podcastBanner from "../../images/podcast-banner.png"

const Hero = ({ location }) => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/">
        <img src={podcastBannerNoCity} alt="JLS Logo" className="" />
      </Link>
    </div>
  )
}

export default Hero
