import React from "react"
import EbookCta from "./ebook-cta"
// import RecentStories from "./recent-stories"

const Sidebar = () => {
  return (
    <div>
      {/* <div>
        <h2 className="text-2xl text-gray-800 font-titles">
          Join our newsletter
        </h2>
        <form className="w-full flex items-center mt-4">
          <label className="hidden w-0" htmlFor="newsletter-email-input">
            Newsletter subscription input
          </label>
          <input
            type="email"
            id="newsletter-email-input"
            placeholder="bob@gmail.com"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-400 mr-4 w-2/3"
          />
          <button
            className="flex-shrink-0 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-sm border-4 text-white py-1 px-2 rounded-sm"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div> */}

      {/* <RecentStories /> */}

      <div className="">
        <EbookCta />
      </div>
    </div>
  )
}

export default Sidebar
