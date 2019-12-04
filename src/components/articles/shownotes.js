import React from "react"
import PortableText from "@sanity/block-content-to-react"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return (
            <li className="mt-6 leading-relaxed list-circle">
              {props.children}
            </li>
          )
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
          className="text-red-500 hover:underline hover:text-red-600"
        >
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
  },
}

const Shownotes = props => {
  return (
    <div className="bg-gray-100 p-8 rounded font-titles">
      <h4 className="text-xl font-medium text-gray-800">SHOWNOTES</h4>
      <ul className="">
        <PortableText blocks={props.shownotes} serializers={serializers} />
      </ul>
    </div>
  )
}

export default Shownotes
