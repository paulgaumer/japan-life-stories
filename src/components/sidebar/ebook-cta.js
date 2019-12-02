import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const EbookCta = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mockup_transparent_light.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="shadow text-center py-8">
      <h2 className="text-2xl text-gray-800 font-titles font-medium">
        Free Ebook Guide
      </h2>

      <div className="pt-4">
        <h3 className="text-red-600 text-lg font-titles">
          Travel to Japan for $0?
        </h3>

        <p className="text-sm text-gray-800 pt-4 px-12">
          Enjoy 20 pages of insider tips to explore Japan smarter, or even
          travel for free
        </p>
      </div>

      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="japan Life Stories Ebook"
        className=""
      />
      <form action="https://japanlifestories.ck.page/ebook" target="_blank">
        <input
          type="submit"
          value="Get a copy"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm"
        />
      </form>
    </div>
  )
}

export default EbookCta
