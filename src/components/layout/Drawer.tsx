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
