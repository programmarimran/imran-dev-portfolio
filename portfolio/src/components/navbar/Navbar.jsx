// import React from "react";
// import logo from "../../assets/logo.png";
// import { NavLink } from "react-router";
// const Navbar = () => {
//   const links = (
//     <>
//       <li>
//         <NavLink to={"/"}>Home</NavLink>
//       </li>
//       <li>
//         <NavLink to={""}>About</NavLink>
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>

//         <div className=" flex items-center gap-1">
//           <img className=" rounded-full h-10 w-10" src={logo} alt="" />
//           <h1 className=" text-xl">Md Imran Hasan</h1>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Resume</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// *****************************************
import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content border flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className=" flex items-center gap-1">
            <img className=" rounded-full h-10 w-10" src={logo} alt="" />
            <h1 className=" text-xl">Md Imran Hasan</h1>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <button className=" btn btn-ghost">Resume</button>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
