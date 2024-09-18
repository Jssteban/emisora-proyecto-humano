import React from 'react';

/**
 * Componente AnimatedBackground2 que aplica un fondo animado a su contenido y añade un enlace para entradas.
 * 
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos hijos que se renderizarán encima del fondo animado.
 * 
 * @returns {JSX.Element} El componente AnimatedBackground2.
 */
const AnimatedBackground2 = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo animado */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-kenBurns"
        style={{
          backgroundImage: "url('https://wallpapers.com/images/hd/live-concert-party-ft6boesubjrhdbfk.jpg')",
        }}
      ></div>
      
      {/* Overlay blanco semitransparente */}
      <div className="absolute inset-0 bg-white opacity-30"></div>
      
      {/* Contenedor del contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Enlace para entradas */}
        <div className="text-center pb-12">
          <a 
            href="#" 
            className="text-xl font-bold text-white bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-block"
          >
            Entradas
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground2;