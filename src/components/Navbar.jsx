import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">Inigashree N S</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
            <Link to="/projects" className="hover:text-blue-300 transition-colors">Projects</Link>
            <Link to="/skills" className="hover:text-blue-300 transition-colors">Skills</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-700" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-700" onClick={toggleMenu}>About</Link>
            <Link to="/projects" className="block px-3 py-2 rounded-md hover:bg-gray-700" onClick={toggleMenu}>Projects</Link>
            <Link to="/skills" className="block px-3 py-2 rounded-md hover:bg-gray-700" onClick={toggleMenu}>Skills</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
