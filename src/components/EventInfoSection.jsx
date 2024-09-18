import React, { useState } from 'react';
import { Music, Headphones, Ticket } from 'lucide-react';

/**
 * Componente funcional que representa una sección de información sobre un evento.
 * Incluye imágenes del evento con íconos, información superpuesta y un botón para comprar entradas.
 * Las imágenes tienen un efecto de hover que muestra información adicional.
 */
const EventInfoSection = () => {
  // Estado que controla si el botón "Entradas" está siendo hovereado
  const [isHovered, setIsHovered] = useState(false);

  // Array de objetos que contiene las imágenes del evento con su fuente, descripción, texto alternativo e información adicional
  const eventImages = [
    {
      source: 'https://img.freepik.com/fotos-premium/chica-moderna-moda-auriculares-musica-fiesta-divertida-bailando-luces-neon-cultura-juvenil-vibrante-estilo-cyberpunk_187882-7371.jpg',
      alt: 'Concierto juvenil',
      description: 'Concierto para jóvenes',
      additionalInfo: 'Fecha: 15 de Octubre, 2024\nLugar: Estadio Central'
    },
    {
      source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6shgPCQBrFbtanyhB1Z4QWwHIvgPQIrhAQ&s',
      alt: 'Diademas para concierto',
      description: 'Diademas para una experiencia única',
      additionalInfo: 'Tecnología LED sincronizada\nBatería de larga duración'
    },
    {
      source: 'https://wallpapers.com/images/hd/club-party-background-1385ekvfxrhz9l14.jpg',
      alt: 'Entradas del evento',
      description: 'Entradas con diademas incluidas',
      additionalInfo: 'Precio: $50 - $150\nIncluye acceso VIP'
    }
  ];

  /**
   * Retorna la estructura JSX de la sección de información del evento.
   * Incluye un encabezado, una cuadrícula de imágenes con íconos, información superpuesta y un botón interactivo.
   */
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-purple-500">Información del Evento</h2>
        {/* Sección de imágenes organizadas en una cuadrícula */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {eventImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Ícono que cambia de color al hoverear el botón */}
              {index === 0 && <Music className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              {index === 1 && <Headphones className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              {index === 2 && <Ticket className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              
              {/* Título y descripción de cada imagen */}
              <h3 className="text-xl font-semibold mb-2">{image.description}</h3>
              <p className="text-center">{image.description.split(' ').slice(1).join(' ')}</p>
              
              {/* Contenedor de la imagen con efecto hover */}
              <div className="relative mt-4 overflow-hidden rounded-lg shadow-lg group">
                {/* Imagen del evento */}
                <img src={image.source} alt={image.alt} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                
                {/* Capa de información superpuesta */}
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h4 className="text-lg font-bold mb-2">{image.description}</h4>
                    <p className="text-sm whitespace-pre-line">{image.additionalInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Botón interactivo que cambia de color al pasar el mouse */}
        <div className="text-center">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-purple-700 hover:text-white transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Entradas
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInfoSection;