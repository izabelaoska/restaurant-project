import React from "react"
import { Link } from "react-router-dom"

export const MainTitle = () => {
  return (
    <div className="main-title-container">
      <div className="items-center justify-center mb-12 md:flex lg:mb-10 lg:space-x-4 patiotime-title-container">
        <div className="lg:border-t lg:w-20"></div>
        <header className="text-lg md:text-xl lg:text-3xl title-welcome">
          WELCOME TO PATIOTIME
        </header>
        <div className="lg:border-t lg:w-20"></div>
      </div>
      <h1 className="text-xl title-center lg:text-6xl md:text-3xl">
        Delicious Food & Wonderful Eating Experience
      </h1>
      <h2 className="mt-10 text-sm md:text-xl lg:text-3xl harmony-title">
        We Serve Food, Harmony and Laughter since 1998
      </h2>
      <Link
        to="/menus"
        className="hidden text-lg md:inline-block px-7 py-2 text-white bg-[#DD5903] hover:scale-110 duration-300 mt-10"
      >
        VIEW FULL MENUS
      </Link>
    </div>
  )
}
