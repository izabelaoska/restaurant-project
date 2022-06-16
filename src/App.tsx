import React, { useState } from "react"

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

import { LoginPage, MainPage } from "./pages"

import "./index.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
