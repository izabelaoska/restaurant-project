import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"

export const MenusPage = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    )
    const users = await response.json()
    setPeople(users)
    console.log(users)
  }

  return (
    <div>
      <div className="m-6 text-xl">FETCH EXAMPLE</div>
      <div className="m-6">
        {people
          .map((person: any) => {
            return (
              <h1 key={person.id}>
                <div>
                  {person.title}
                  <div>{person.albumId}</div>
                </div>
              </h1>
            )
          })
          .slice(1, 10)}
      </div>
      <h2>
        <Link
          to="/"
          className="m-8 text-xl rounded-none btn-outline btn"
        >
          GO BACK TO MAINPAGE
        </Link>
      </h2>
    </div>
  )
}
