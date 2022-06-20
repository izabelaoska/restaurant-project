import React from "react"
import { Details } from "./Details"
import { MainTitle } from "./MainTitle"
import { Navbar } from "./Navbar"

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen ml-auto mr-auto text-white bg-gray-900 ">
      <div className="absolute top-0 left-0 z-0 w-full h-screen border hero-bg " />
      <div className="container z-10 h-full mx-auto hero-container">
        <div className="hidden mt-10 md:block">
          <Details />
        </div>
        <Navbar />
        <div
          className="container flex items-center justify-center mx-auto"
          style={{ height: "calc(100% - 116px)" }}
        >
          <MainTitle />
        </div>
      </div>
    </div>
  )
}
