import React from "react"
import {
  Hero,
  Introsection,
  Menus,
} from "../components/layout"

export const MainPage = () => {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-white">
        <div className="container mx-auto ">
          <Introsection />
        </div>
      </section>
      <section className="bg-white ">
        <div className="container mx-auto ">
          <Menus />
        </div>
      </section>
    </div>
  )
}
