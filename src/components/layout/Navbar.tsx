import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="mt-10 nav-container">
      <div className="menu-buttons">
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
    </nav>
  )
}
