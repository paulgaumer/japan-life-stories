import React from "react"
import { Link } from "gatsby"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import podcastBannerNoCity from "../../images/podcast-banner-no-city.png"
// import podcastBanner from "../../images/podcast-banner.png"

const Hero = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "podcast-banner-no-city.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 2000, quality: 90) {
  //           ...GatsbyImageSharpFluid_withWebp_noBase64
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    // <div className="flex flex-col items-center">
    <div className="">
      <Link to="/">
        {/* <Img
          fluid={data.file.childImageSharp.fluid}
          alt="JLS Logo"
          className=""
        /> */}
        <img src={podcastBannerNoCity} alt="JLS Logo" className="" />
      </Link>
    </div>
  )
}

export default Hero
