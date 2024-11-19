import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo como imagen */}
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=262,fit=crop,q=95/Yanyz7vRZ9unz8Nb/logo-A85wrD0ONlc40jbk.jpg" // Reemplaza con la URL de tu logo
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl ml-2">Corporacion nuevo talento humano</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </Link>
              <Link to="/eventos" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Donaton
              </Link>
              <Link to="/contacto" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Contactos
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </Link>
            <Link to="/eventos" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Donaton
            </Link>
            <Link to="/contacto" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Contactos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
