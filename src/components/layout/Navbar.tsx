import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <div className="menu-buttons">
        <div>
          <button>Menus</button>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <button>Find a table</button>
        </div>
      </div>
    </nav>
  )
}
