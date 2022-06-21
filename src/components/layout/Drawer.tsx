import React from "react"
import { Link } from "react-router-dom"

// export const Dropdown = () => {
//   return (
//     <div className="dropdown dropdown-end">
//       <label tabIndex={0} className="m-1">
//         <svg
//           className="text-gray-300 fill-current"
//           viewBox="0 0 100 80"
//           width="30"
//           height="30"
//         >
//           <rect width="100" height="10"></rect>
//           <rect y="30" width="100" height="10"></rect>
//           <rect y="60" width="100" height="10"></rect>
//         </svg>
//       </label>
//       <ul
//         tabIndex={0}
//         className="p-2 text-gray-900 shadow dropdown-content menu bg-base-100 rounded-box w-52"
//       >
//         <li>
//           <Link to="/menus">Menus</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/table">Find a table</Link>
//         </li>
//       </ul>
//     </div>
//   )
// }

export const Drawer = () => {
  return (
    <div className="drawer drawer-end h-[300px]">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-outline"
        >
          <svg
            className="text-gray-300 fill-current"
            viewBox="0 0 80 60"
            width="20"
            height="20"
          >
            <rect width="100" height="8"></rect>
            <rect y="30" width="100" height="8"></rect>
            <rect y="60" width="100" height="8"></rect>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
        ></label>
        <ul className="w-56 p-4 overflow-y-auto text-gray-900 menu bg-base-100">
          <li>
            <Link to="/menus">Menus</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/table">Find a table</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
