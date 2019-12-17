import React from "react"
import PortableText from "@sanity/block-content-to-react"
import ShowNotes from "./shownotes"
import getYoutubeId from "get-youtube-id"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h2":
          return (
            <h2 className="text-3xl mt-20 mb-10 font-titles">
              {props.children}
            </h2>
          )
        case "h3":
          return (
            <h3 className="text-2xl my-10 font-titles">{props.children}</h3>
          )
        case "h4":
          return (
            <h4 className="text-xl mt-8 mb-6 font-titles">{props.children}</h4>
          )
        case "speaker_1":
          return (
            <h5 className="text-sm mt-8 mb-2 font-titles text-gray-800">
              {props.children}
            </h5>
          )
        case "speaker_2":
          return (
            <h5 className="text-sm mt-8 mb-2 font-titles text-red-500">
              {props.children}
            </h5>
          )
        default:
          return <p className="mb-6 leading-relaxed">{props.children}</p>
      }
    },
    youtube(props) {
      const id = getYoutubeId(props.node.url)
      const url = `https://www.youtube.com/embed/${id}`
      return (
        <div className="flex justify-center">
          <iframe
            title="Youtube Preview"
            width="560"
            height="315"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )
    },
  },
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a
          href={mark.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600"
        >
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
  },
}

const ShowMain = ({ article }) => {
  return (
    <>
      {article._rawShowNotes && (
        <div className="mt-16">
          <ShowNotes shownotes={article._rawShowNotes} />
        </div>
      )}
      <div className="mt-16">
        {article.podcastEpisodeId && (
          <h4 className="text-xl font-titles font-medium text-gray-800">
            TRANSCRIPT
          </h4>
        )}
      </div>
      <div className="mt-8">
        <PortableText blocks={article._rawBody} serializers={serializers} />
      </div>
    </>
  )
}

export default ShowMain
