import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ mounted = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const desktopLinks = [
    { label: "Events", path: "/events", type: "route" },
    { label: "Timeline", path: "#timeline", type: "scroll" },
    { label: "Contact", path: "#contact", type: "scroll" },
    { label: "FAQ", path: "#faq", type: "scroll" },
     { label: "Team", path: "/team", type: "route" },
  ];

  const mobileLinks = [...desktopLinks];

  // 🔥 Handles scroll (even from other pages)
  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Go to homepage first
    navigate("/");

    // Wait for page to render, then scroll
    setTimeout(() => {
      const target = document.querySelector(path);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`absolute top-6 md:top-10 left-6 md:left-10 right-6 md:right-10 z-[60] flex items-center justify-between gap-6 md:gap-10 transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center space-x-3 cursor-pointer group z-[60]">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-8 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-12 text-[10px] md:text-xs tracking-[0.2em] syncopate-regular text-gray-400">
          {desktopLinks.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.path}
                className="relative uppercase hover:text-white transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="relative uppercase hover:text-white transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
              </a>
            )
          )}
        </div>

        {/* ACTION BUTTON + MENU */}
        <div className="flex items-center gap-4 lg:gap-6 z-[60]">
          {/* REGISTER BUTTON */}
          <Link
    to="/login"
    className="hidden sm:block text-[10px] md:text-xs uppercase tracking-[0.2em] px-6 py-2 md:px-8 md:py-3 border border-white/20 rounded-full hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-500 backdrop-blur-md syncopate-regular font-bold cursor-pointer text-white no-underline"
  >
    Login
  </Link>

          {/* HAMBURGER */}
          <button
            className="lg:hidden flex flex-col p-2 group cursor-pointer relative w-8 h-8 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute h-px bg-white transition-all duration-500 ${
                isMenuOpen ? "w-6 rotate-45" : "w-6 -translate-y-2"
              }`}
            />
            <span
              className={`absolute h-px bg-white transition-all duration-300 ${
                isMenuOpen ? "w-0 opacity-0" : "w-4 translate-x-1"
              }`}
            />
            <span
              className={`absolute h-px bg-white transition-all duration-500 ${
                isMenuOpen ? "w-6 -rotate-45" : "w-6 translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-[#020202]/95 backdrop-blur-xl transition-all duration-700 lg:hidden flex flex-col items-center justify-center ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-8 text-center z-10 w-full px-6">
          {mobileLinks.map((item, i) =>
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl sm:text-4xl uppercase text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-xl sm:text-4xl uppercase text-white"
              >
                {item.label}
              </a>
            )
          )}

          {/* MOBILE REGISTER */}
          <a
            href="https://forms.gle/SgSDRDcgDK4fmM877"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-6 py-3 border border-cyan-400 text-cyan-300 rounded-full"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
}