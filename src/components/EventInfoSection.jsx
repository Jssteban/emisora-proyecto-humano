import React, { useState } from 'react';
import { Music, Headphones, Ticket } from 'lucide-react';

const EventInfoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const eventImages = [
    {
      source: 'https://img.freepik.com/fotos-premium/chica-moderna-moda-auriculares-musica-fiesta-divertida-bailando-luces-neon-cultura-juvenil-vibrante-estilo-cyberpunk_187882-7371.jpg',
      alt: 'Concierto juvenil',
      description: 'Concierto para jóvenes'
    },
    {
      source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6shgPCQBrFbtanyhB1Z4QWwHIvgPQIrhAQ&s',
      alt: 'Diademas para concierto',
      description: 'Diademas para una experiencia única'
    },
    {
      source: 'https://wallpapers.com/images/hd/club-party-background-1385ekvfxrhz9l14.jpg',
      alt: 'Entradas del evento',
      description: 'Entradas con diademas incluidas'
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8">Información del Evento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {eventImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {index === 0 && <Music className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              {index === 1 && <Headphones className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              {index === 2 && <Ticket className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              <h3 className="text-xl font-semibold mb-2">{image.description}</h3>
              <p className="text-center">{image.description.split(' ').slice(1).join(' ')}</p> {/* Display additional text except first word */}
              <img src={image.source} alt={image.alt} className="mt-4 rounded-lg shadow-lg w-full h-48 object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-purple-700 hover:text-white transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Más Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInfoSection;