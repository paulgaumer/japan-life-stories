import React from "react"

const PodcastPlayer = ({ podcastEpisodeId }) => {
  return (
    <iframe
      src={`https://www.buzzsprout.com/740042/${podcastEpisodeId}?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F726084.js%3Fplayer%3Dsmall`}
      title={podcastEpisodeId}
      width="100%"
      height="200"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  )
}

export default PodcastPlayer
