import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import PodcastSubscribeList from "../widget/podcast-subscribe-btn"

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10">
      <div className="container mx-auto md:max-w-7xl">
        <div
          id="main-footer"
          className="pt-10 text-gray-400 md:flex justify-center text-center"
        >
          <div className="md:pr-20">
            <h4 className="uppercase pb-3 md:pb-5 text-gray-100">Services</h4>
            <ul className="list-none list-outside font-light md:text-left">
              <li className="hover:text-orange-400">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-orange-400">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-orange-400">
                <Link to="/">Stories</Link>
              </li>
            </ul>
          </div>
          <div className="md:pr-20 pt-10 md:pt-0">
            <h4 className="uppercase pb-3 md:pb-5 text-gray-100 ">
              Connect with us
            </h4>
            <div className="flex flex-col md:items-start">
              <a
                href="https://twitter.com/JPLifeStories"
                className="md:pr-3 hover:text-orange-400 font-light"
              >
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  width="16"
                  className="mr-2"
                />
                Twitter
              </a>
              <a
                href="https://www.facebook.com/JapanLifeStories"
                className="md:pr-3 hover:text-orange-400 font-light"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  width="16"
                  className="mr-2"
                />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/japan_life_stories/"
                className="md:pr-3 hover:text-orange-400 font-light"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  width="16"
                  className="mr-2"
                />
                Instagram
              </a>
            </div>
          </div>
          <div className="md:text-left pt-10 md:pt-0">
            <h4 className="uppercase pb-3 md:pb-5 text-gray-100">
              Join the newsletter
            </h4>
            <form className="">
              <label className="hidden w-0" htmlFor="newsletter-email-input">
                Newsletter subscription input
              </label>
              <input
                type="email"
                id="newsletter-email-input"
                placeholder="alex@gmail.com"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-400 mr-4"
              />
              <button
                className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 border-orange-500 hover:border-orange-400 text-sm border-4 text-white py-1 px-2 rounded-sm"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start pt-10 md:pt-12 pb-12">
          <h4 className="uppercase pb-3 md:pb-5 text-gray-100">
            Subscribe to the podcast
          </h4>
          <PodcastSubscribeList />
        </div>

        {/* SUBFOOTER */}
        <div
          id="sub-footer"
          className="text-gray-600 font-light border-t border-gray-800 py-3 flex flex-col-reverse md:flex-row  items-center md:justify-between text-sm md:text-sm"
        >
          <a href="/">
            <p className="">© Japan Life Stories</p>
          </a>
          <Link className="pb-4 md:pb-0">
            <span>
              <Link to="/legal/terms" className="pr-4">
                Terms of Service
              </Link>
              <Link to="/legal/privacy" className="pr-4">
                Privacy Policy
              </Link>
              <a href="https://google.com">Site Map</a>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
