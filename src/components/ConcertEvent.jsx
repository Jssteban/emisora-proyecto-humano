import React from 'react';
import { Headphones, Calendar, MapPin } from 'lucide-react';

/**
 * Componente ConcertEvent
 *
 * Este componente funcional de React muestra un evento de concierto con una galería de imágenes, 
 * detalles del evento, y un botón para reservar entradas. Cada imagen de la galería tiene un efecto 
 * de hover que muestra el título y la descripción del concierto. También se muestra información clave 
 * del evento, como la fecha, la ubicación y la opción de traer auriculares.
 */
const ConcertEvent = () => {
  // Array con las imágenes del concierto, incluyendo su URL, título y descripción
  const concertImages = [
    {
      url: "https://www.rockandpop.cl/wp-content/uploads/2022/06/fiesta.jpg",
      title: "Fiesta Silenciosa",
      description: "Baila al ritmo de tu propia música"
    },
    {
      url: "https://partfy.s3.eu-south-2.amazonaws.com/frontend/files/ideas/na-5bfd88e7278fe.jpg",
      title: "Experiencia Única",
      description: "Disfruta de la música sin molestar a nadie"
    },
    {
      url: "https://blogs.eltiempo.com/natalia-gnecco-blog/wp-content/uploads/sites/357/2019/07/Silent_Disco_Colombia_3.jpg",
      title: "Ambiente Colorido",
      description: "Luces y colores que complementan la música"
    },
    {
      url: "https://visit.gent.be/sites/default/files/styles/social_media/public/img/poi/hero/20180331%20-%20Abacho%20-%20Silent%20Disco%20-%20006.jpg?itok=ChM_572k",
      title: "Diversión Garantizada",
      description: "Una noche llena de energía y buena vibra"
    }
  ];

  return (
    // Contenedor principal con fondo negro y texto blanco
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      
      {/* Título del evento */}
      <h1 className="text-4xl font-bold mb-6">Evento</h1>
      
      {/* Galería de imágenes del concierto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        {concertImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg group">
            {/* Imagen del concierto */}
            <img 
              src={image.url}
              alt={`Imagen del concierto ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Efecto de hover: fondo morado semi-transparente */}
            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            {/* Efecto de hover: texto con título y descripción */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-1">{image.title}</h3>
              <p className="text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Descripción general del evento */}
      <p className="text-xl mb-8 text-center max-w-xl">
        Experimenta la música como nunca antes en nuestro concierto exclusivo con auriculares.
      </p>
      
      {/* Detalles del evento (auriculares, fecha y ubicación) */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <Headphones size={24} className="text-purple-400 mr-2" />
          <span className="text-lg">Trae tus propios auriculares</span>
        </div>
        <div className="flex items-center">
          <Calendar size={24} className="text-purple-400 mr-2" />
          <span className="text-lg">15 de Octubre, 2024</span>
        </div>
        <div className="flex items-center">
          <MapPin size={24} className="text-purple-400 mr-2" />
          <span className="text-lg">Arena Central</span>
        </div>
      </div>
      
      {/* Botón para reservar entradas */}
      <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-purple-700 transition-colors">
        Reserva tu entrada
      </button>
    </div>
  );
};

export default ConcertEvent;
