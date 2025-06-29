import { NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";

const RootLayout = () => {
  return (
    <>
      <div className="drawer bg-gradient-to-bl from-[#8742bc50] to-[#36174b50] text-white drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" bg-purple-700/95 sticky top-0 z-50 ">
            <div className="max-w-[1440px] mx-auto navbar  w-full justify-between ">
              {/* Left: logo+name */}
              <div className="flex items-center gap-2 px-2">
                <NavLink to="/" className="flex items-center gap-2">
                  <img
                    className="rounded-full h-10 w-10"
                    src={logo}
                    alt="Logo"
                  />
                  <h1 className="font-semibold">Md Imran Hasan</h1>
                </NavLink>
              </div>

              {/* Center: Home, About, Contact (only large screen) */}
              <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-2 gap-2">
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
                      to="/projects"
                      className={({ isActive }) =>
                        `transition-all duration-200 ${
                          isActive ? "border-b-2 border-primary" : ""
                        }`
                      }
                    >
                      Projects
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
                      <a
                        href="/resume.pdf"
                        download="resume.pdf"
                        className="btn btn-primary"
                      >
                        Resume
                      </a>
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
          </div>

          {/* Page content */}
          {/* <main className="bg-[#70e00010]"> */}
          <main className="">
            <section className="max-w-7xl mx-auto">
              <div className="w-11/12 mx-auto min-h-[calc(100vh-120px)]">
                <Outlet />
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-[#a878d8] text-center p-4 mt-auto">
            © 2025 Md Imran Hasan. All rights reserved.
          </footer>
        </div>

        {/* Drawer sidebar for mobile */}
        <div className="drawer-side fixed top-16 z-50 h-[calc(100vh-64px)]">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="menu z-[60] w-3/4 max-w-xs bg-base-200 p-4 pt-10 h-full">
            <div className=" flex flex-col space-y-24 justify-between">
              <ul>
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
                    to="/projects"
                    className={({ isActive }) =>
                      `transition-all duration-200 ${
                        isActive ? "border-b-2 border-primary" : ""
                      }`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="/resume.pdf"
                    download="resume.pdf"
                    className="btn btn-primary"
                  >
                    Download My CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
