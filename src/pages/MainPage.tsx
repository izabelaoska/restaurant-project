import React from "react"
import { Link } from "react-router-dom"
import {
  Hero,
  Introsection,
  Menus,
  Philosophy,
} from "../components/layout"

export const MainPage = () => {
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
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
        <section>
          <Philosophy />
        </section>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
        ></label>
        <ul className="w-56 p-4 overflow-y-auto text-gray-900 menu bg-base-100">
          <li>
            <Link to="/menus">Menus</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/table">Find a table</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
