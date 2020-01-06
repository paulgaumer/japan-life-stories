import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

const About = ({ location }) => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "paul_speaker_mobile.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <SEO title="About us" url="https://japanlifestories.com/about/" />
      <div className="md:pb-8 md:leading-loose px-10">
        <h2 className="text-4xl text-center mt-8 md:mt-16 text-gray-700 font-titles">
          Thank you very much for visiting Japan Life Stories!
        </h2>

        <p className="mt-12 md:mt-20">
          Our platform started after hearing dozens of foreigners, from all
          nationalities and walks of life, ask the same question:
        </p>
        <p className="font-bold text-lg pt-8 pb-4 text-center">
          "How can I start a life in Japan?"
        </p>

        <p className="mt-5">
          Some were motivated by a passion for the country, others by family
          reasons but all were facing the same issue: the lack of insights on
          how to get started.
        </p>
        <p className="mt-5">
          The paperwork-heavy administration, complex layers in interpersonal
          communication, extensive language nuances and a very unique culture
          quickly add up, forming an overwhelming amount of challenges.
        </p>

        <p className="mt-5">
          In a similar situation, there is nothing more valuable than listening
          to the feedbacks of people who went through the exact same process,
          walked the exact same paths and found their way through the maze.
          Often very personal ways.
        </p>

        <h3 className="text-2xl mt-10 text-gray-700">
          To share the knowledge of foreigners who built a successful life in
          Japan!
        </h3>

        <p className="mt-5">
          This is our mission. We are here to help others achieve the same
          dream.
        </p>

        <p className="mt-5">
          While a few great blogs and platforms also understood this need and
          specialised in niche areas like startups & entrepreneurship, we chose
          diversity. We decided to share the stories of foreigners only, all
          from many different backgrounds, for one reason:{" "}
          <span className="italic font-semibold">
            one's dream is made of multiple threads and inspiration can be found
            in many stories.
          </span>
        </p>

        <h3 className="text-3xl mt-10 font-titles text-gray-700">
          Meet our team
        </h3>

        <div className="md:flex md:flex-row-reverse">
          <div className="my-6 md:my-0 md:w-1/3 flex justify-center">
            <Img
              fluid={image.file.childImageSharp.fluid}
              alt="Portrait Paul"
              className="w-32 md:w-full h-32 md:h-full rounded-full md:rounded"
              imgStyle={{ objectPosition: "top" }}
            />
          </div>
          <div className="md:w-2/3 md:pr-10">
            <h4 className="text-xl mt-5 font-medium font-semibold text-gray-800">
              Paul Gaumer{" "}
              <span className="text-sm text-gray-700">
                -{" "}
                <a
                  href="https://paulgaumer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faGlobeEurope} />
                </a>
              </span>
            </h4>
            <p className="mt-5">
              Born in France, Paul spent the past 10 years living, working and
              building a life in Japan.
            </p>
            <p className="mt-5">
              He experienced in a decade a wide range of situations an
              expatriate could face:
            </p>
            <ul className="mt-5 list-disc list-inside">
              <li>Studied in a Japanese University</li>
              <li>Employed by both Japanese & International firms</li>
              <li>Recruited for Forbes 500 companies</li>
              <li>Became entrepreneur & created his company in Japan</li>
              <li>
                Developed a whole new industry (coding bootcamps) and helped
                hundreds of people change their lives through learning how to
                code
              </li>
              <li>Hired and managed teams of talents</li>
              <li>Sold his company in Japan</li>
            </ul>
            <p className="mt-5">
              He is now traveling back and forth between France and Tokyo,
              helping people succeed in Japan and collaborating on several
              startup projects.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-10 mt-10 mb-16 p-6 pt-10 border-2 border-red-500 border-solid rounded text-center">
        <p className="text-xl text-blue-800 mb-3 font-medium">
          Would you enjoy a step-by-step guide to start your career in Japan?{" "}
        </p>
        <div>
          <p className="text-2xl text-blue-700 mt-8">
            Learn the 5 key steps to finding a job you love in Japan!
          </p>
          <p className="text-lg text-gray-800 mt-8">
            Our upcoming mentorship program provides a clear & actionable
            roadmap to reach your dream career.
          </p>
          <p className="text-lg text-gray-800 mt-3">
            Let us share with you a decade worth of experience on the Japanese
            job market.
          </p>
        </div>

        <Link
          to="/mentorship"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-400 border-red-500 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded mt-6 inline-block uppercase"
        >
          Get Started
        </Link>
      </div>
    </Layout>
  )
}

export default About
