import React from "react"

export const Drawer = () => {
  return (
    <label htmlFor="my-drawer">
      <input type="checkbox" className=" drawer-toggle" />
      <div>
        <div className="drawer-button">
          <svg
            className="text-gray-300 fill-current "
            viewBox="0 0 80 60"
            width="20"
            height="20"
          >
            <rect width="100" height="8"></rect>
            <rect y="30" width="100" height="8"></rect>
            <rect y="60" width="100" height="8"></rect>
          </svg>
        </div>
      </div>
    </label>
  )
}
