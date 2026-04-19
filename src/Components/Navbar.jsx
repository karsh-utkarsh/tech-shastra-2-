import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ mounted = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const desktopLinks = [
    { label: "Home", path: "/", type: "route" },
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
        className={`absolute -top-4 md:-top-6 left-4 md:left-8 right-4 md:right-8 z-[60] flex items-center justify-between gap-6 md:gap-7 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
      >
        {/* LOGO */}
        <div className="flex items-center space-x-3 cursor-pointer group z-[60]">
          <Link to="/">
            <img
              src="/IMGs/nsulogo1.png"
              alt="Logo"
              className="-mt-4 md:-mt-6 lg:-mt-8 h-32 md:h-38 lg:h-44 w-28 md:w-32 lg:w-40 object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
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
          <img
            src="/IMGs/tech-shastra1.jpeg"
            alt="TechShastra"
            className="block h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-500 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105"
          />

          {/* HAMBURGER */}
          <button
            className="lg:hidden flex flex-col p-2 group cursor-pointer relative w-8 h-8 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute h-px bg-white transition-all duration-500 ${isMenuOpen ? "w-6 rotate-45" : "w-6 -translate-y-2"
                }`}
            />
            <span
              className={`absolute h-px bg-white transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-4 translate-x-1"
                }`}
            />
            <span
              className={`absolute h-px bg-white transition-all duration-500 ${isMenuOpen ? "w-6 -rotate-45" : "w-6 translate-y-2"
                }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-[#020202]/95 backdrop-blur-xl transition-all duration-700 lg:hidden flex flex-col items-center justify-center ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center space-y-10 text-center z-10 w-full px-8">
          {mobileLinks.map((item, i) =>
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="group relative text-lg sm:text-2xl uppercase text-white/80 hover:text-white syncopate-regular tracking-[0.25em] transition-all duration-400 hover:tracking-[0.35em]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500 shadow-[0_0_8px_rgba(0,255,255,0.6)]"></span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="group relative text-lg sm:text-2xl uppercase text-white/80 hover:text-white syncopate-regular tracking-[0.25em] transition-all duration-400 hover:tracking-[0.35em]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500 shadow-[0_0_8px_rgba(0,255,255,0.6)]"></span>
              </a>
            )
          )}

          {/* DIVIDER */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-4"></div>

          {/* MOBILE AUTH BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mt-8">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/register");
              }}
              className="group relative w-48 px-8 py-3.5 rounded-full border-2 border-blue-500 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs syncopate-regular font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/15 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative z-10">Register</span>
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/login");
              }}
              className="group relative w-48 px-8 py-3.5 rounded-full border-2 border-blue-400 text-white text-xs syncopate-regular font-bold uppercase tracking-[0.2em] backdrop-blur-sm bg-white/5 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative z-10">Login</span>
            </button>
          </div>


        </div>
      </div>
    </>
  );
}