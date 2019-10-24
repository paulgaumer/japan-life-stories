import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-3">
      <Link to="/">
        <h1 className="invisible">Japan Life Stories</h1>
        <svg
          width="100%"
          height="81"
          viewBox="0 0 623 81"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            fill="#000"
            fill-rule="evenodd"
            font-family="NanumBrush, Nanum Brush Script"
            font-size="100"
          >
            <tspan x="0" y="74">
              Japan Life Stories
            </tspan>
          </text>
        </svg>

        <h2 className="py-6 text-center">
          Inspiring stories from foreigners who built a life in Japan
        </h2>
      </Link>
    </div>
  )
}

export default Hero
