import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const location = useLocation();
  const currPath = location.pathname;

  return (
    <div
      className={`px-25 flex items-center w-full ${
        isOpen ? "h-[55vh]" : "h-[10vh] md:h-[15vh]"
      } text-base-content shadow z-50 font-sans overflow-x-visible transition-all duration-300 text-nowrap`}
      style={{
        background:
          "linear-gradient(to right, #0d0d0d 0%, #111213 40%, #1c1f21 60%, #2f3336 80%, #454c4f 100%)",
      }}
    >
      <div
        className={`container flex md:items-center justify-between relative h-full`}
      >
        {/* Brand */}
        <Link
          to="/"
          className="absolute left-0 top-3 md:static md:left-auto md:top-auto dancing-script text-4xl"
        >
          Feane
        </Link>

        {/* Toggler */}
        <div className="absolute right-0 top-3">
          <button
            id="navbarToggler"
            onClick={toggleNavbar}
            className="relative w-[37px] h-[42px] focus:outline-none border-black md:hidden"
          >
            <span
              className={`block w-full h-[4px] bg-white rounded transition-transform duration-300 relative
          ${isOpen ? "rotate-405" : ""}
        `}
            >
              {/* Top Bar */}
            </span>
            <span
              className={`block w-full h-[4px] bg-white rounded transition-transform duration-300
          ${isOpen ? "opacity-0" : "my-[6px]"}
        `}
            >
              {/* Middle Bar */}
            </span>
            <span
              className={`block w-full h-[4px] bg-white rounded transition-transform duration-300 relative
          ${isOpen ? "-rotate-405 -translate-y-[9px]" : ""}
        `}
            >
              {/* Bottom Bar */}
            </span>
          </button>
        </div>

        {/* Nav Links */}
        <div
          id="navbarOptions"
          className={`${
            isOpen ? "flex mt-[10vh] ms-[10vw]" : "hidden"
          } flex-col md:flex md:flex-row md:items-center w-full md:w-auto gap-4 mt-0 py-4 transition-all duration-300`}
        >
          <div
            id="navOptions"
            className="flex flex-col md:flex-row text-[1.05rem] uppercase mx-auto items-center gap-4 pe-20"
          >
            {[
              { element: "Home", location: "/" },
              { element: "Menu", location: "/menu" },
              { element: "About Us", location: "/about" },
              { element: "Book Table", location: "/book-a-table" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.location}
                className={`px-4 py-1 hover:text-[#ffbe33] ${
                  currPath === item.location ? "text-[#ffbe33]" : ""
                } transition`}
              >
                {item.element}
              </Link>
            ))}
          </div>

          {/* User Icons and Order Button */}
          <div
            id="userOptions"
            className="flex justify-center items-center gap-4 mt-2 md:mt-0"
          >
            <Link to="/account" className="hover:text-[#ffbe33]">
              <FaUser />
            </Link>
            <Link to="/cart" className="hover:text-[#ffbe33]">
              <BiCart className="text-xl" />
            </Link>
            <Link to="/search" className="hover:text-[#ffbe33]">
              <FaSearch />
            </Link>
            <Link
              to="/order"
              className="btnn text-white rounded-full px-6 py-2 text-base bg-[#ffbe33] hover:bg-[#e69c00] active:bg-[#e69d007f] transition"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
