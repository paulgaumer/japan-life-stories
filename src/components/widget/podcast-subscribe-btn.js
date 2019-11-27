import React from "react"
import apple from "../../images/podcast_buttons/new_apple.svg"
import overcast from "../../images/podcast_buttons/new_overcast.svg"
import spotify from "../../images/podcast_buttons/new_spotify.svg"
import rss from "../../images/podcast_buttons/new_rss.svg"

const PodcastSubscribeList = () => {
  return (
    <div className="md:flex">
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={apple} alt="Apple Podcast" className="m-2" />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={overcast} alt="Overcast" className="m-2" />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={spotify} alt="Spotify" className="m-2" />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={rss} alt="RSS" className="m-2" />
      </a>
    </div>
  )
}

export default PodcastSubscribeList
