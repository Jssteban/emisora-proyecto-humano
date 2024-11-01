import React from 'react';

/**
 * Componente AnimatedBackground que aplica un fondo de GIF a su contenido.
 * 
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos hijos que se renderizarán encima del fondo de GIF.
 * 
 * @returns {JSX.Element} El componente AnimatedBackground.
 */
const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 
        Fondo de GIF.
        - `absolute`: Para posicionar el GIF de manera absoluta en relación al contenedor principal.
        - `inset-0`: Asegura que el GIF cubra todo el contenedor.
        - `w-full` y `h-full`: Hace que el GIF cubra el ancho y alto completos del contenedor.
        - `z-0`: Coloca el GIF debajo del contenido.
      */}
      <iframe
        src="https://giphy.com/embed/W2bepwxaIJDt6VKfhN"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, objectFit: 'cover' }}
        frameBorder="0"
        allowFullScreen
        title="Animated Background"
      ></iframe>
      {/* Contenedor para el contenido que estará encima del GIF */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
