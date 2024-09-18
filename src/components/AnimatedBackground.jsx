import React from 'react';

/**
 * Componente AnimatedBackground que aplica un fondo animado a su contenido.
 * 
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos hijos que se renderizarán encima del fondo animado.
 * 
 * @returns {JSX.Element} El componente AnimatedBackground.
 */
const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 
        Fondo animado con efecto ken-burns.
        - `absolute`: Posiciona el fondo de manera absoluta en relación al contenedor principal.
        - `inset-0`: Asegura que el fondo cubra todo el contenedor principal.
        - `bg-cover`: Hace que la imagen de fondo cubra todo el contenedor.
        - `bg-center`: Centra la imagen de fondo.
        - `animate-ken-burns`: Clase de TailwindCSS para aplicar la animación ken-burns. 
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-dj-at-a-club-party-wearing-headphones-image_15612219.jpg')",
          animation: "kenBurns 20s ease infinite alternate",
        }}
      ></div>
      {/* 
        Contenedor para el contenido del componente.
        - `relative`: Posiciona el contenido relativo al contenedor principal.
        - `z-10`: Asegura que el contenido se muestre por encima del fondo animado.
      */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
