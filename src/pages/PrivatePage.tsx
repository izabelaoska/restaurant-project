import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const PrivatePage = () => {
  const navigate = useNavigate()

  const handleOnLogout = () => {
    window.localStorage.removeItem("token")
    navigate("/")
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)
    if (!token) {
      navigate("/")
    }
  }, [])

  return (
    <div>
      <div>PrivatePage</div>
      <button onClick={handleOnLogout}>LOGOUT</button>
    </div>
  )
}
