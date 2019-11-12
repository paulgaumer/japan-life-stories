import React from "react"
import PortableText from "@sanity/block-content-to-react"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h2":
          return <h2 className="text-3xl">{props.children}</h2>
        default:
          return <p className="mt-6 mb-12">{props.children}</p>
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
          className="text-orange-400 underline"
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
