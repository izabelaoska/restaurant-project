import React, { useState } from "react"
import { Hero } from "./components/Hero"
import { SpinnerDotted } from "spinners-react"

function App() {
  const [counter, setCounter] = useState(42)

  function onClick() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <SpinnerDotted
        size={20}
        thickness={172}
        speed={61}
        color="rgba(172, 57, 160, 1)"
      />
      <div>{counter}</div>
      <Hero />
      <button onClick={onClick}>add</button>
    </div>
  )
}

export default App
