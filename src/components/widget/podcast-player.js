import React from "react"

const PodcastPlayer = ({ podcastEpisodeId }) => {
  return (
    <iframe src={`https://podcasters.spotify.com/pod/show/paul-gaumer/embed/episodes/${podcastEpisodeId}`}height="200px" width="100%" frameborder="0" scrolling="no"></iframe>
  )
}

export default PodcastPlayer
