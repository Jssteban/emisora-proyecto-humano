import React from 'react';

/**
 * Componente ConcertEvent
 *
 * Este componente funcional de React muestra un evento de donación con una galería de imágenes, 
 * detalles del evento, premios y los QR de Bancolombia y Nequi para realizar la donación.
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
    // Contenedor principal con fondo blanco y texto verde
    <div className="bg-white text-green-600 min-h-screen flex flex-col items-center justify-center p-8">
      
      {/* Título del evento */}
      <h1 className="text-4xl font-bold mb-6 text-green-700">Premios</h1>
      
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
            {/* Efecto de hover: fondo verde semi-transparente */}
            <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            {/* Efecto de hover: texto con título y descripción */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-1 text-white">{image.title}</h3>
              <p className="text-sm text-white">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Títulos de premios */}
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
        Dona más de 100.000 COP y participa por estos premios
      </h2>
      <p className="text-xl mb-8 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
        Menos de 100.000 COP participa por estos otros premios
      </h2>
      <p className="text-xl mb-8 text-center max-w-xl">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      
      {/* Sección de premios */}
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">Donar</h2>
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img 
            src="https://th.bing.com/th/id/OIP.5vBdBO7znwk94W727Wps6gHaHa?rs=1&pid=ImgDetMain" 
            alt="QR Bancolombia" 
            className="w-40 h-40 mb-4"
          />
          <p className="text-center text-green-700">QR Bancolombia</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://th.bing.com/th/id/OIP.5vBdBO7znwk94W727Wps6gHaHa?rs=1&pid=ImgDetMain" 
            alt="QR Nequi" 
            className="w-40 h-40 mb-4"
          />
          <p className="text-center text-green-700">QR Nequi</p>
        </div>
      </div>
      
      {/* Descripción general de la Donatón */}
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
        ¿QUÉ ES LA DONATÓN?
      </h2>
      <p className="text-xl mb-8 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
        ¿Por qué la DONATÓN?
      </h2>
      <p className="text-xl mb-8 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Botón para participar en la donación */}
      <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-700 transition-colors">
        Participa en la Donatón
      </button>
    </div>
  );
};

export default ConcertEvent;
