import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const TablePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random/3"
    )
    const dogs = await response.json()
    setData(dogs.message)
    console.log(dogs)
  }

  return (
    <>
      <div className="m-8 text-lg text-red-700">
        FETCH API EXAMPLE
      </div>
      <div className="">
        {data.map((dog: string) => (
          <img
            src={dog}
            alt={dog}
            className="m-5 fetched-img"
          ></img>
        ))}
      </div>
      <Link
        to="/"
        className="m-8 text-xl rounded-none btn-outline btn"
      >
        GO BACK TO MAINPAGE
      </Link>
    </>
  )
}
