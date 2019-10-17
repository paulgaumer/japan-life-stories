import React from "react"

const FeaturedCard = () => {
  return (
    <div className="flex mt-8 bg-gray-100 border-solid border-0 rounded">
      <div className="w-1/3">
        <img
          src="https://via.placeholder.com/600"
          alt="portrait of the featured expat"
          className="h-full object-cover rounded-tl rounded-bl"
        />
      </div>
      <div className="w-2/3 pl-8 pr-4 py-4">
        <h3 className="text-2xl text-gray-800 font-semibold">
          The Man with Multiple Lives
        </h3>
        <p className="text-lg text-gray-600">- Thomas Glucksmann</p>
        <p className="break-words pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default FeaturedCard
