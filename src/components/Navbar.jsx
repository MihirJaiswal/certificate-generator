import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? 'text-blue-500' : 'text-gray-300';

  return (
    <nav className="bg-black border-b border-gray-700 text-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3 lg:py-2 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 md:items-center">
          <li>
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/')}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/generate"
              className={`block px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/generate')}`}
            >
              Generate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/MihirJaiswal/certificate-generator" className="text-gray-100">
            <FaGithub className="w-6 h-6" />
          </a>
          <button
            aria-label="Toggle menu"
            className="text-gray-100 md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Sheet Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-600 text-gray-100 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-50`}
        >
          <div className="flex justify-between items-center p-4">
            <img src={logo} alt="Logo" className="w-8" />
            <button
              aria-label="Close menu"
              className="text-gray-100"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-4 space-y-4">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/')}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/generate"
                className={`block px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/generate')}`}
                onClick={() => setIsOpen(false)}
              >
                Generate
              </Link>
            </li>
            <li>
              <Link
                to="/template"
                className={`block px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/generate')}`}
                onClick={() => setIsOpen(false)}
              >
                Template
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
