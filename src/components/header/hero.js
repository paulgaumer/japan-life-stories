import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-3">
      <Link to="/">
        <h1 className="">
          <span className="invisible">Lives in Japan</span>
          <svg
            width="464px"
            height="74px"
            viewBox="0 0 464 74"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Lives in Japan</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              fontFamily="NanumBrush, Nanum Brush Script"
              fontSize="100"
              fontWeight="normal"
            >
              <text id="Lives-in-Japan" fill="#000000">
                <tspan x="-6" y="67">
                  Lives in Japan
                </tspan>
              </text>
            </g>
          </svg>
        </h1>

        <h2 className="py-6 text-center">
          Inspiring stories from foreigners who built a life in Japan
        </h2>
      </Link>
    </div>
  )
}

export default Hero
