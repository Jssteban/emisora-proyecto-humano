import React, { useState } from 'react';
import { Music, Headphones, Ticket } from 'lucide-react';

const EventInfoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Información de la donación
  const donationInfo = {
    amount: '100,000', // Puedes cambiar este valor por el monto actual recolectado
    currency: 'COP',
    prize: ''
  };

  const eventImages = [
    {
      source:'https://img.freepik.com/fotos-premium/chica-moderna-moda-auriculares-musica-fiesta-divertida-bailando-luces-neon-cultura-juvenil-vibrante-estilo-cyberpunk_187882-7371.jpg',
      alt: 'Esperando informacion',
      description: 'Esperando informacion',
      additionalInfo: 'Esperando informacion'
    },
    {
      source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6shgPCQBrFbtanyhB1Z4QWwHIvgPQIrhAQ&s',
      alt: 'Esperando informacion',
      description: 'Esperando informacion',
      additionalInfo: 'Esperando informacion'
    },
    {
      source: 'https://wallpapers.com/images/hd/club-party-background-1385ekvfxrhz9l14.jpg',
      alt: 'Esperando informacion',
      description: 'Esperando informacion',
      additionalInfo: 'Esperando informacion'
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Sección de donación */}
        <div className="mb-8 bg-purple-600 text-white rounded-lg p-6 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-2">¡Gracias por tu apoyo a la donación!</h2>
          <p className="text-lg">
            Hemos recolectado <span className="font-extrabold">{donationInfo.amount} {donationInfo.currency}</span> hasta ahora.
          </p>
          <p className="mt-2">
            Premio en la corporación: <span className="font-semibold">{donationInfo.prize}</span>
          </p>
        </div>

        {/* Información del evento */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-purple-500">Información del Evento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {eventImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {index === 0 && <Music className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              {index === 1 && <Headphones className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              {index === 2 && <Ticket className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-purple-500' : 'text-white'}`} />}
              
              <h3 className="text-xl font-semibold mb-2">{image.description}</h3>
              <p className="text-center">{image.description.split(' ').slice(1).join(' ')}</p>
              
              <div className="relative mt-4 overflow-hidden rounded-lg shadow-lg group">
                <img src={image.source} alt={image.alt} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
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
        <div className="text-center">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-purple-700 hover:text-white transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Donar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInfoSection;
