import React from "react"

export const MainTitle = () => {
  return (
    <div className="main-title">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-20 border-t"></div>
        <header className="text-[21px]">WELCOME TO PATIOTIME</header>
        <div className="w-20 border-t"></div>
      </div>
      <h1 className="text-[60px]">
        Delicious Food & Wonderful Eating Experience
      </h1>
      <h2 className="text-[21px]">
        We Serve Food, Harmony and Laughter since 1998
      </h2>
      <button className="text-[1rem]">VIEW FULL MENUS</button>
    </div>
  )
}
