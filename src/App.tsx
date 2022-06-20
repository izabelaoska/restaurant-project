import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

import {
  LoginPage,
  MainPage,
  MenusPage,
  PrivatePage,
  SpecialMenus,
  TablePage,
} from "./pages"

import "./index.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route
            path="/private"
            element={<PrivatePage />}
          />
          <Route path="/table" element={<TablePage />} />
          <Route
            path="specials"
            element={<SpecialMenus />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
