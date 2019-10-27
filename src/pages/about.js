import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="pb-8">
        <h2 className="text-4xl text-center mt-10">About Us</h2>

        <p className="mt-5">
          Thank you very much for visiting Japan Life Stories!
        </p>

        <p className="mt-5">
          The idea of JLS started after hearing dozens of foreigners, from all
          nationalities and walks of life, ask the same question:
        </p>
        <p className="font-bold">"How can I start a life in Japan?"</p>

        <p className="mt-5">
          Some were motivated by a passion for the country, others by family
          reasons but all were facing the same issue: the lack of insights on
          how to get started. The paperwork-heavy administration, complex layers
          in interpersonal communication, extensive language nuances and a very
          unique culture quickly add up, forming an impressive amount of
          challenges.
        </p>

        <p className="mt-5">
          In a similar situation, there is often little more valuable than
          listening to the feedbacks of people who went through the exact same
          process, walked the exact same paths and found their way through the
          maze. Often very personal ways.
        </p>

        <p className="mt-5">
          This is our mission at Japan Life Stories: share the knowledge of
          foreigners who built a successful life in Japan and help others
          achieve the same dream.
        </p>

        <p className="mt-5">
          While a few great blogs and platforms also understood this need and
          specialised in niche areas like startups & entrepreneurship, we chose
          diversity. We decided to share the stories of foreigners only, all
          from many different backgrounds for one reason: one's dream is made of
          multiple threads and inspiration can be found in many stories.
        </p>

        <div className="mt-5 p-6 border-2 border-black border-solid rounded text-center">
          <p className="text-lg text-gray-800 mb-3 font-medium">
            Interested in a more systemic approach?{" "}
          </p>
          <p>
            Would enjoy step-by-step process to structure your move to Japan?
            Join our newsletter and we'll keep you updated on our upcoming
            guidebook on how to get your life in Japan started.
          </p>
          <form className="w-full flex items-center justify-center mt-4">
            <label className="invisible w-0" htmlFor="newsletter-email-input">
              Newsletter subscription input
            </label>
            <input
              type="email"
              id="newsletter-email-input"
              placeholder="bob@gmail.com"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-400 mr-4"
            />
            <button
              className="flex-shrink-0 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        <h3 className="text-2xl underline mt-8">About the author</h3>
        <p className="mt-5">
          Paul Gaumer spent the past 10 years living, working and building a
          life in Japan. French national, Paul experienced in a decade a wide
          range of situations an expatriate could face. From graduating from a
          Japanese university to working and recruiting for both international
          and local companies. From creating a company, disrupting a whole
          industry, hiring and managing talents to selling a company. He is now
          traveling back and forth between France and Japan, helping people
          succeed in Japan and collaborating on several startup projects.
        </p>
      </div>
    </Layout>
  )
}

export default About
