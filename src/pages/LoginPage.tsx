import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState(
    "tracey.ramos@reqres.in"
  )
  const [password, setPassword] = useState("password")

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const token = await login(email, password)
    localStorage.setItem("token", token)
    navigate("/private")
  }

  const login = async (email: string, password: string) => {
    const body = { email, password }
    const response = await fetch(
      "https://reqres.in/api/login",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      }
    ).then((res) => res.json())
    return response.token
  }

  return (
    <div className="m-10">
      <div className="mb-10 text-lg text-red-700">
        EXAMPLE OF LOGIN/LOGOUT PAGE
      </div>
      <div className="mb-5 text-lg">
        Please enter your email and password to login:
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label>Enter email: </label>
          <input
            className="border"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Enter password: </label>
          <input
            className="border"
            required
            type="password"
            minLength={3}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button
          className="mt-8 rounded-none text-md btn-outline btn"
          type="submit"
        >
          LOGIN
        </button>
      </form>
      <Link
        to="/"
        className="mt-8 text-xl rounded-none btn-outline btn"
      >
        GO BACK TO MAINPAGE
      </Link>
    </div>
  )
}
