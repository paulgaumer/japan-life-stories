import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About us" />
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

        <h3 className="text-2xl mt-10">
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

        <h3 className="text-3xl mt-10 font-titles">Meet our team</h3>
        <h4 className="text-xl mt-5 font-medium">Paul Gaumer</h4>
        <p className="mt-5">
          Paul spent the past 10 years living, working and building a life in
          Japan.
        </p>
        <p className="mt-5">
          French national, Paul experienced in a decade a wide range of
          situations an expatriate could face:
        </p>
        <ul className="mt-5 list-disc list-inside">
          <li>Studied in a Japanese University</li>
          <li>Employed by both Japanese & International firms</li>
          <li>Recruited for Forbes 500 companies</li>
          <li>Became entrepreneur & created his company in Japan</li>
          <li>
            Developed a whole new industry and helped hundreds of people change
            their lives through learning how to code
          </li>
          <li>Hired and managed talents</li>
          <li>Sold his company</li>
        </ul>
        <p className="mt-5">
          He is now traveling back and forth between France and Tokyo, helping
          people succeed in Japan and collaborating on several startup projects.
        </p>
      </div>

      <div className="mx-10 mt-10 mb-16 p-6 pt-10 border-4 border-red-500 border-solid rounded text-center">
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
        <form
          className="w-full md:flex md:items-center md:justify-center mt-4"
          name="about-page-mentorship-optin"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field-about"
        >
          <input
            type="hidden"
            name="form-name"
            value="about-page-mentorship-optin"
          />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human:{" "}
              <input name="bot-field-about" />
            </label>
          </p>
          <label className="invisible w-0" htmlFor="newsletter-email-input">
            Newsletter subscription input
          </label>
          <input
            type="email"
            id="newsletter-email-input"
            name="email"
            placeholder="alex@gmail.com"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-400 mr-4 w-full md:w-auto"
          />
          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-400 border-red-500 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded mt-4 md:mt-0 w-full md:w-auto"
            type="submit"
          >
            Keep me updated
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default About
