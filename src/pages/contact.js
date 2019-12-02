import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <div className="pb-8 leading-loose">
        <h2 className="text-4xl text-center mt-16 text-gray-700 font-titles">
          Get in touch
        </h2>

        <div className="max-w-2xl flex flex-col mx-auto px-10">
          <form
            name="contact-page"
            method="POST"
            className=""
            data-netlify="true"
            netlify-honeypot="bot-field-contact"
          >
            <p className="hidden">
              <label>
                Don’t fill this out if you're human:{" "}
                <input name="bot-field-contact" />
              </label>
            </p>

            <div className="md:flex md:justify-between mt-6">
              <label className="block md:flex-grow">
                <span className="text-gray-700">Name</span>
                <input
                  className="form-input mt-1 block w-full"
                  placeholder="Alex Brown"
                  required
                />
              </label>
              <label className="block mt-6 md:mt-0 md:flex-grow md:ml-10">
                <span className="text-gray-700">Email</span>
                <input
                  className="form-input mt-1 block w-full"
                  placeholder="alex@gmail.com"
                  required
                />
              </label>
            </div>
            <label class="block mt-6">
              <span class="text-gray-700">Message</span>
              <textarea
                class="form-textarea mt-1 block w-full"
                rows="3"
                placeholder="How can we help you?"
                required
              ></textarea>
            </label>
            <button
              className="bg-red-500 hover:bg-red-400 border-red-500 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded-sm w-full mt-6"
              type="submit"
            >
              Send
            </button>
          </form>
          <p className="text-center text-gray-800 font-titles mt-16">
            Do you have question? A suggestion on a person or a topic we should
            cover? <br /> Would you like to collaborate with us?
          </p>
          <p className="text-center text-gray-800 font-titles mt-4 mb-8 md:mb-16">
            Feel free to let us know!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
