// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         {/* Logo */}
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-40 h-12 object-contain' />
//         </Link>

//         {/* Navigation Links */}
//         <ul className='list-none hidden md:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile / Medium Toggle Menu */}
//         <div className='md:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain cursor-pointer'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(false);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
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
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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
              className={`relative font-medium cursor-pointer text-[16px] md:text-[17px] transition-all ${
                active === nav.title
                  ? "text-white border-b-2 border-[#915EFF]"
                  : "text-secondary hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer transition-transform transform hover:scale-110"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {toggle && (
        <div className="fixed inset-0 z-[999] h-screen w-screen bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center px-6">
          {/* Close Button Top Right */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setToggle(false)}
          >
            <img
              src={close}
              alt="close"
              className="w-8 h-8 object-contain hover:scale-110 transition-transform"
            />
          </button>

          {/* Menu Items */}
          <ul className="list-none flex flex-col gap-8 text-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[20px] ${
                  active === nav.title
                    ? "text-white border-b-2 border-[#915EFF]"
                    : "text-secondary hover:text-white"
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
