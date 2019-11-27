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
            <h2 className="text-2xl my-10 font-titles">{props.children}</h2>
          )
        case "h4":
          return (
            <h2 className="text-xl mt-8 mb-6 font-titles">{props.children}</h2>
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
    <div className="mt-16">
      <PortableText blocks={article._rawBody} serializers={serializers} />
    </div>
  )
}

export default ShowMain
