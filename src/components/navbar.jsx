import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-80 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl mr-2">🎵</span>
            <span className="font-bold text-xl">Eter</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link to="/eventos" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Donaton</Link>
              <Link to="/entradas" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Evento</Link> 
              <Link to="/registrarse" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Registrarse</Link>
              <Link to="/login" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Inicio de Sesion</Link>
              <Link to="/contacto" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Conocenos</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <Link to="/" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
             <Link to="/eventos" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Donaton</Link>
            <Link to="/entradas" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Evento</Link> 
            <Link to="/registrarse" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Registrarse</Link>
            <Link to="/login" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Inicio de Sesion</Link>
            <Link to="/contacto" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Contactos</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;