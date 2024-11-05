import React from 'react';

/**
 * Componente DonatonEvent
 *
 * Este componente funcional de React muestra un evento de donación con una galería de imágenes, 
 * detalles del evento y un botón para participar en la donación. Cada imagen de la galería tiene un efecto 
 * de hover que muestra el título y la descripción del evento.
 */
const ConcertEvent = () => {
  // Array con las imágenes del evento de la Donatón, incluyendo su URL, título y descripción
  const donatonImages = [
    {
      url: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      url: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lorem Ipsum 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      url: "https://images.pexels.com/photos/6647110/pexels-photo-6647110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lorem Ipsum 3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      url: "https://images.pexels.com/photos/6647120/pexels-photo-6647120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lorem Ipsum 4",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
    }
  ];

  return (
    // Contenedor principal con fondo negro y texto blanco
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      
      {/* Título del evento */}
      <h1 className="text-4xl font-bold mb-6 text-purple-500">Donaton</h1>
      
      {/* Galería de imágenes de la Donatón */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        {donatonImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg group">
            {/* Imagen del evento */}
            <img 
              src={image.url}
              alt={`Imagen de la Donatón ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Efecto de hover: fondo morado semi-transparente */}
            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            {/* Efecto de hover: texto con título y descripción */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-1 text-white">{image.title}</h3>
              <p className="text-sm text-white">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Descripción general de la Donatón */}
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-600">
        ¿QUÉ ES LA DONATÓN?
      </h2>
      <p className="text-xl mb-8 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-center text-purple-600">
        ¿Por qué la DONATÓN?
      </h2>
      <p className="text-xl mb-8 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Botón para participar en la donación */}
      <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-purple-700 transition-colors">
        Participa en la Donatón
      </button>
    </div>
  );
};

export default ConcertEvent;
