import { NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";
// import { BorderBeam } from "@stianlarsen/border-beam";
import DownloadFullCV from "../components/pdfCreator/DownloadFullCV";

const RootLayout = () => {
  return (
    <>
      <div className="drawer bg-gradient-to-bl from-[#323436] to-[#7851a0] text-white drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content z-10 flex flex-col">
          {/* Navbar */}
          <div className="navbar  w-full justify-between">
            {/* Left: logo+name */}
            <div className="flex items-center gap-2 px-2">
              <NavLink to="/" className="flex items-center gap-2">
                <img className="rounded-full h-10 w-10" src={logo} alt="Logo" />
                <h1 className="font-semibold">Md Imran Hasan</h1>
              </NavLink>
            </div>

            {/* Center: Home, About, Contact (only large screen) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `transition-all duration-200 ${
                        isActive ? "border-b-2 border-primary" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `transition-all duration-200 ${
                        isActive ? "border-b-2 border-primary" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `transition-all duration-200 ${
                        isActive ? "border-b-2 border-primary" : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Right: Resume (large screen) + hamburger (small screen) */}
            <div className="flex items-center">
              {/* Large screen: Resume */}
              <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <NavLink
                   
                      className={({ isActive }) =>
                        `transition-all duration-200 relative ${
                          isActive ? "border-b-2 border-primary" : ""
                        }`
                      }
                    >
                      <DownloadFullCV></DownloadFullCV>
                   
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Small screen: hamburger */}
              <div className="lg:hidden">
                <label
                  htmlFor="my-drawer-3"
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
            </div>
          </div>

          {/* Page content */}
          {/* <main className="bg-[#70e00010]"> */}
          <main className="bg-[#70e00010]">
            <section className="max-w-7xl mx-auto">
              <div className="w-11/12 mx-auto min-h-[calc(100vh-120px)]">
                <Outlet />
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-base-300 text-center p-4 mt-auto">
            © 2025 Md Imran Hasan. All rights reserved.
          </footer>
        </div>

        {/* Drawer sidebar for mobile */}
        <div className="drawer-side fixed top-16 z-50 h-[calc(100vh-64px)]">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu z-[60] w-3/4 max-w-xs bg-base-200 p-4 pt-10 h-full">
            <li className="z-50">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
