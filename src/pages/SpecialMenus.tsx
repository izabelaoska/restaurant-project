import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const SpecialMenus = () => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    getMenus()
  }, [])

  const getMenus = async () => {
    const response = await fetch(
      "https://foodbukka.herokuapp.com/api/v1/menu"
    )
    const menu = await response.json()
    setMenus(menu.Result)
    console.log(menu)
  }

  return (
    <div>
      <div>SPECIAL MENUS</div>
      <div>
        {menus
          .map((item: any) => {
            return (
              <h4 key={item.menuname}>
                <h3>{item.menuname}</h3>
                <h3>{item.description}</h3>
                <img src={item.images} alt={item}></img>
              </h4>
            )
          })
          .slice(1, 10)}
      </div>
      <div>
        <Link to="/">GO BACK TO MAINPAGE</Link>
      </div>
    </div>
  )
}
