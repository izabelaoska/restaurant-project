import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const SpecialMenus = () => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    getMenus()
  }, [])

  const getMenus = async () => {
    const response = await fetch(
      "zappos/api/v1/restaurants/starbucks-san-jose/menus/coffee"
    )
    const menu = await response.json()
    setMenus(menu)
    console.log(menu)
  }
  return (
    <div>
      <div>
        <Link to="/">GO BACK TO MAINPAGE</Link>
      </div>
    </div>
  )
}
