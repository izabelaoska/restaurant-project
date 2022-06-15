import React from "react"
import { Details } from "./Details"
import { MainTitle } from "./MainTitle"
import { Navbar } from "./Navbar"

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen ml-auto mr-auto text-white bg-gray-900">
      <div className="absolute top-0 left-0 z-0 w-full h-screen border hero-bg" />
      <div className="z-10 ">
        <Details />
        <Navbar />
        <div className="pt-44">
          <MainTitle />
        </div>
      </div>
    </div>
  )
}
