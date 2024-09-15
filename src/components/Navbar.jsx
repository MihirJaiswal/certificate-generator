import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/cloudLogo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? ' text-white' : 'text-gray-300';

  return (
    <nav className="bg-black border-b border-gray-700 text-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-3xl font-bold flex items-center space-x-2">
          <img src={logo} alt="" className='w-8' />
        </Link>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-gray-100"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <ul className={`md:flex md:space-x-8 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
