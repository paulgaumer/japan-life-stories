import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"

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
}

const ShowMain = ({ article }) => {
  return (
    <div className="mt-16">
      <BaseBlockContent blocks={article._rawBody} serializers={serializers} />
    </div>
  )
}

export default ShowMain
