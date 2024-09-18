import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente funcional que representa una barra de navegación responsiva.
 * Incluye enlaces a varias páginas del sitio y un menú desplegable en pantallas móviles.
 */
const Navbar = () => {
  // Estado que controla si el menú está abierto o cerrado en pantallas pequeñas
  const [isOpen, setIsOpen] = useState(false);

  // Función que alterna el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-80 text-white fixed top-0 left-0 right-0 z-50">
      {/* Contenedor principal de la barra de navegación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sección del logo y nombre del sitio */}
          <div className="flex items-center">
            <span className="font-bold text-xl mr-2">🎵</span>
            <span className="font-bold text-xl">SinNombre</span>
          </div>
          
          {/* Menú de navegación visible en pantallas medianas y grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Enlaces a las páginas con un efecto hover */}
              <Link to="/" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link to="/eventos" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Eventos</Link>
              <Link to="/entradas" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Entradas</Link>
              <Link to="/registrarse" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Registrarse</Link>
              <Link to="/login" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Inicio de Sesion</Link>
              <Link to="/contacto" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Contactos</Link>
            </div>
          </div>
          
          {/* Botón del menú desplegable visible solo en pantallas pequeñas */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {/* Alterna entre el ícono de hamburguesa y el de cerrar según el estado */}
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable que aparece solo si el estado `isOpen` es verdadero */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Enlaces del menú en pantalla pequeña */}
            <Link to="/" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/eventos" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Eventos</Link>
            <Link to="/artistas" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Entradas</Link>
            <Link to="/boletos" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Inicio de sesion</Link>
            <Link to="/contacto" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Registrarse</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
