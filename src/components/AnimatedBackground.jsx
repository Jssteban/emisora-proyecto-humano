import React from 'react';

/**
 * Componente AnimatedBackground que aplica un fondo de imagen a su contenido.
 * 
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos hijos que se renderizarán encima del fondo de la imagen.
 * 
 * @returns {JSX.Element} El componente AnimatedBackground.
 */
const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 
        Fondo de imagen.
        - `absolute`: Para posicionar la imagen de manera absoluta en relación al contenedor principal.
        - `inset-0`: Asegura que la imagen cubra todo el contenedor.
        - `w-full` y `h-full`: Hace que la imagen cubra el ancho y alto completos del contenedor.
        - `z-0`: Coloca la imagen debajo del contenido.
        - `object-cover`: Asegura que la imagen mantenga su proporción y cubra todo el fondo.
      */}
      <div
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {/* Contenedor para el contenido que estará encima de la imagen */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
