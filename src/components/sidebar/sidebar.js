import React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-2xl underline">Join our newsletter</h2>
        <form className="w-full flex items-center mt-4">
          <label className="invisible w-0" for="newsletter-email-input">
            Newsletter subscription input
          </label>
          <input
            type="email"
            id="newsletter-email-input"
            placeholder="bob@gmail.com"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-400 mr-4 w-2/3"
          />
          <button
            class="flex-shrink-0 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl underline mb-4">Recent Stories</h2>
        <div>
          <ul>
            <li className="hover:text-orange-400 mb-4 text-sm">
              <Link>The man with multiple lives</Link>
            </li>
            <li className="hover:text-orange-400 mb-4 text-sm">
              <Link>The man with multiple lives</Link>
            </li>
            <li className="hover:text-orange-400 mb-4 text-sm">
              <Link>The man with multiple lives</Link>
            </li>
            <li className="hover:text-orange-400 mb-4 text-sm">
              <Link>The man with multiple lives</Link>
            </li>
            <li className="hover:text-orange-400 mb-4 text-sm">
              <Link>The man with multiple lives</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
