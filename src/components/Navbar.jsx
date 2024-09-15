import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? 'bg-gray-800' : '';

  return (
    <nav className="bg-black text-gray-100 py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-100">
          <span className="text-blue-400">Certi</span><span className="text-red-400">Gen</span>
        </Link>
        <button
          className="md:hidden text-gray-100"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <ul className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link
              to="/"
              className={`block px-4 py-2 text-gray-100 rounded-md ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/generate"
              className={`block px-4 py-2 text-gray-100 rounded-md ${isActive('#features')}`}
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
