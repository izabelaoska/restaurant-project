import React, { useState } from "react"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  const [email, setEmail] = useState(
    "tracey.ramos@reqres.in"
  )
  const [password, setPassword] = useState("kurka")

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const token = await login(email, password)
    alert(token)
    // setEmail("")
    // setPassword("")
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
    <div>
      <Link to="/">GO BACK TO MAINPAGE</Link>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Enter email:</label>
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
          <label>Enter password:</label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
