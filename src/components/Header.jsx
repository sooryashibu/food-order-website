import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo aligned left */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Cart Icon: Positioned on the top right */}
        <Link to="/cart" className="relative">
          <img src="/cart-icon.png" alt="Cart" className="w-6 h-6 inline" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        </Link>

        {/* Hamburger menu for small screens */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white bg-black p-2 rounded"
          >
            <span className="block w-6 h-0.5 bg-white mb-2"></span>
            <span className="block w-6 h-0.5 bg-white mb-2"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Navbar Links for Larger Screens */}
        <nav className="hidden sm:flex space-x-6 items-center text-sm font-medium">
          <Link
            to="/"
            className="text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-300"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <Link
            to="/admin/login"
            className="text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-300"
          >
            Admin Login
          </Link>
        </nav>
      </div>

      {/* Hamburger Menu Dropdown for Small Screens */}
      {isMenuOpen && (
        <div className="sm:hidden w-full bg-gray-800 absolute top-0 left-0 right-0 shadow-lg">
          <nav className="flex flex-col items-center py-4">
            <Link
              to="/"
              className="text-white text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-3 py-1 mt-2 rounded bg-blue-600 text-white"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <Link
              to="/admin/login"
              className="text-white text-lg py-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
