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
    // setData(dogs)
    setData(dogs.message)
    console.log(dogs)
  }

  return (
    <>
      <div>DUCKS</div>
      <div>
        {data.map((dog: string) => (
          <img src={dog} alt={dog}></img>
        ))}
      </div>
      <Link to="/">GO BACK TO MAINPAGE</Link>
    </>
  )
}
