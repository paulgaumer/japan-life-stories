import React from "react"
import apple from "../../images/podcast_buttons/new_apple.svg"
import overcast from "../../images/podcast_buttons/new_overcast.svg"
import spotify from "../../images/podcast_buttons/new_spotify.svg"
import rss from "../../images/podcast_buttons/new_rss.svg"

const PodcastSubscribeList = () => {
  return (
    <div className="md:flex md:pl-4">
      <a
        href="https://podcasts.apple.com/podcast/japan-life-stories/id1490080061"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={apple} alt="Apple Podcast" className="m-2" />
      </a>
      <a
        href="https://overcast.fm/itunes1490080061/japan-life-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={overcast} alt="Overcast" className="m-2" />
      </a>
      <a
        href="https://open.spotify.com/show/3mFkhjHzhE4IknTGhwUJvj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={spotify} alt="Spotify" className="m-2" />
      </a>
      <a
        href="https://feeds.buzzsprout.com/740042.rss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={rss} alt="RSS" className="m-2" />
      </a>
    </div>
  )
}

export default PodcastSubscribeList
