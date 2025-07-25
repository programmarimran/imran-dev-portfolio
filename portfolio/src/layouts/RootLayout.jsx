import { NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";
import { FiDownload } from "react-icons/fi";
import useScrollToSection from "../hooks/useScrollToSection";
import { useRef } from "react";

const RootLayout = () => {
  const { scrollToSection } = useScrollToSection();
  const drawerRef = useRef(null);

  const handleScrollAndClose = (id) => {
    scrollToSection(id);
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  return (
    <>
      <div className="drawer drawer-end bg-black/70 text-white">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />

        {/* Main content */}
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-xs">
            <div className="navbar max-w-[1440px] mx-auto w-full justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2 px-2">
                <NavLink to="/" className="flex items-center gap-2">
                  <img src={logo} className="h-10 w-10 rounded-full" alt="Logo" />
                  <h1 className="font-semibold">Md Imran Hasan</h1>
                </NavLink>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-2 gap-2">
                  <li><button onClick={() => scrollToSection("hero")}>Home</button></li>
                  <li><button onClick={() => scrollToSection("Projects")}>Projects</button></li>
                  <li><button onClick={() => scrollToSection("Skills")}>Skills</button></li>
                  <li><button onClick={() => scrollToSection("About")}>About</button></li>
                  <li><button onClick={() => scrollToSection("Education")}>Education</button></li>
                  <li><button onClick={() => scrollToSection("Contact")}>Contact</button></li>
                </ul>
              </div>

              {/* Resume & Hamburger */}
              <div className="flex items-center">
                <div className="hidden lg:flex">
                  <a
                    href="https://drive.google.com/file/d/1vXu69-GoyTvlJS1GbMuUHi2uamKpx_8K/view"
                    target="_blank"
                    className="btn btn-primary border-none bg-gradient-to-r from-indigo-500 to-primary hover:from-primary/50 hover:to-indigo-500"
                  >
                    <FiDownload />
                    Resume
                  </a>
                </div>
                <div className="lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <main>
            <section className="max-w-7xl mx-auto">
              <div className="w-11/12 mx-auto min-h-[calc(100vh-120px)]">
                <Outlet />
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="text-center p-4 mt-auto">
            © 2025 Md Imran Hasan. All rights reserved.
          </footer>
        </div>

        {/* Drawer for Mobile */}
        <div className="drawer-side fixed top-16 z-50 h-[calc(100vh-64px)]">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="menu w-3/4 max-w-xs bg-base-200 text-base-content p-4 pt-10 h-full z-[60]">
            <div className="flex flex-col space-y-24 justify-between h-full">
              <ul className="menu menu-vertical gap-2">
                <li><button onClick={() => handleScrollAndClose("hero")}>Home</button></li>
                <li><button onClick={() => handleScrollAndClose("Projects")}>Projects</button></li>
                <li><button onClick={() => handleScrollAndClose("Skills")}>Skills</button></li>
                <li><button onClick={() => handleScrollAndClose("About")}>About</button></li>
                <li><button onClick={() => handleScrollAndClose("Education")}>Education</button></li>
                <li><button onClick={() => handleScrollAndClose("Contact")}>Contact</button></li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1vXu69-GoyTvlJS1GbMuUHi2uamKpx_8K/view"
                    target="_blank"
                    className="btn bg-gradient-to-r from-indigo-500 to-primary hover:from-primary/50 hover:to-indigo-500 border-none btn-primary"
                  >
                    <FiDownload /> Download My CV
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
