import React from "react"
import { Link } from "react-router-dom"

export const MainTitle = () => {
  return (
    <div className="main-title-container">
      <div className="flex items-center justify-center mb-12 lg:mb-10 lg:space-x-4 patiotime-title-container">
        <div className="border-t lg:w-20"></div>
        <header className="text-lg lg:text-3xl title-welcome">
          WELCOME TO PATIOTIME
        </header>
        <div className="border-t lg:w-20"></div>
      </div>
      <h1 className="text-3xl title-center lg:text-9xl md:text-6xl">
        Delicious Food & Wonderful Eating Experience
      </h1>
      <h2 className="mt-10 lg:text-3xl harmony-title">
        We Serve Food, Harmony and Laughter since 1998
      </h2>
      <Link
        to="/menus"
        className="text-lg inline-block px-7 py-2 text-white bg-[#DD5903] hover:scale-110 duration-300 mt-10"
      >
        VIEW FULL MENUS
      </Link>
    </div>
  )
}
