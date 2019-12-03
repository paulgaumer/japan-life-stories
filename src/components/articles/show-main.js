import React from "react"
import PortableText from "@sanity/block-content-to-react"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h2":
          return (
            <h2 className="text-3xl my-10 font-titles">{props.children}</h2>
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
      <div className="mt-16">
        <h4 className="font-titles italic text-gray-700">
          (This is a transcript of the episode. Shownotes are at the end.)
        </h4>
      </div>
      <div className="mt-10">
        <PortableText blocks={article._rawBody} serializers={serializers} />
      </div>
    </>
  )
}

export default ShowMain
