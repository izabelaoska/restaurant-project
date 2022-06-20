import React from "react"
import { Link } from "react-router-dom"
import { Dropdown } from "./Dropdown"

export const Navbar = () => {
  return (
    <nav className="mt-10 nav-container">
      <div className="space-x-4 menu-buttons">
        <div>
          <Link to="/menus">Menus</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/table">Find a table</Link>
        </div>
      </div>
      <div className="container flex justify-end px-4 mx-auto md:hidden">
        <Dropdown />
      </div>
    </nav>
  )
}
