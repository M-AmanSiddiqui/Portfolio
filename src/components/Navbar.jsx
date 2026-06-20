import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300`}
    >
      <div
        className={`w-full flex justify-between items-center max-w-7xl mx-auto rounded-full border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#070816]/80 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/5 bg-[#070816]/35 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-28 sm:w-32 h-10 sm:h-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative rounded-full px-3 py-2 font-medium cursor-pointer text-[14px] lg:text-[15px] transition-all ${
                active === nav.title
                  ? "bg-[#915EFF]/18 text-white shadow-[0_0_24px_rgba(145,94,255,0.18)]"
                  : "text-secondary hover:bg-white/5 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center justify-end md:hidden">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="h-6 w-6 object-contain transition-transform hover:scale-110"
            />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {toggle && (
        <div className="fixed inset-0 z-[999] flex h-screen w-screen flex-col items-center justify-center overflow-y-auto bg-[#050816]/95 px-6 py-24 backdrop-blur-xl">
          {/* Close Button Top Right */}
          <button
            type="button"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            onClick={() => setToggle(false)}
            aria-label="Close menu"
          >
            <img
              src={close}
              alt=""
              className="h-6 w-6 object-contain transition-transform hover:scale-110"
            />
          </button>

          {/* Menu Items */}
          <ul className="flex w-full max-w-xs list-none flex-col gap-3 text-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer rounded-full px-7 py-3 text-[18px] font-medium transition ${
                  active === nav.title
                    ? "bg-[#915EFF]/20 text-white"
                    : "text-secondary hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                  // Scroll to top on mobile
                  window.location.hash = nav.id;
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
