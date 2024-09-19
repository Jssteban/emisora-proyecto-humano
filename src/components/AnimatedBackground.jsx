import React from 'react';

/**
 * Componente AnimatedBackground que aplica un fondo de video a su contenido.
 * 
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos hijos que se renderizarán encima del fondo de video.
 * 
 * @returns {JSX.Element} El componente AnimatedBackground.
 */
const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 
        Fondo de video.
        - `absolute`: Para posicionar el video de manera absoluta en relación al contenedor principal.
        - `inset-0`: Asegura que el video cubra todo el contenedor.
        - `w-full` y `h-full`: Hace que el video cubra el ancho y alto completos del contenedor.
        - `object-cover`: Mantiene las proporciones del video mientras cubre el área.
        - `z-0`: Coloca el video debajo del contenido.
      */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://cdn.pixabay.com/video/2022/10/16/135068-761273397_large.mp4" // Cambia esta URL por la URL de tu video
        autoPlay
        loop
        muted
      />
      {/* Contenedor para el contenido que estará encima del video */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
