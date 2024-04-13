import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBar flex justify-between items-center p-12 ">
      <div className="logoDiv">
        <h1 className="logo text-4xl text-black cursor-pointer">
          <strong className="text-blue-600 cursor-pointer">Job</strong>Portal
        </h1>
      </div>

      <button id="menuBtn" className="md:hidden text-5xl " onClick={toggleMenu}>
        <FiAlignJustify />
      </button>

      <div id="menu" className={`md:flex gap-8 ${isMenuOpen ? "" : "hidden"}`}>
        <li className="menuList text-gray-600 hover:text-blue-600">Jobs</li>
        <li className="menuList text-gray-600 hover:text-blue-600">About us</li>
        <li className="menuList text-gray-600 hover:text-blue-600">Features</li>
        <li className="menuList text-gray-600 hover:text-blue-600">
          Testimonials
        </li>
        <li className="menuList text-gray-600 hover:text-blue-600">
          Contact Us
        </li>
        <li className="menuList text-gray-600 hover:text-blue-600">Blog</li>
        <li className="menuList text-gray-600 hover:text-blue-600">Login</li>
        <li className="menuList text-gray-600 hover:text-blue-600">Register</li>
      </div>
    </div>
  );
};

export default NavBar;
