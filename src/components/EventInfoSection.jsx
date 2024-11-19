import React, { useState } from 'react';
import { Heart, Box, DollarSign } from 'lucide-react';

const EventInfoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Información de la donación
  const donationInfo = {
    amount: '100,000', // Monto actual recolectado
    currency: 'COP',
    prize: 'Premio en la corporación'
  };

  const eventImages = [
    {
      source: 'https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Donación en línea',
      description: 'Contribuye en línea',
      additionalInfo: 'Haz tu donación en línea y contribuye a una buena causa.'
    },
    {
      source: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Caja de donaciones',
      description: 'Donaciones físicas',
      additionalInfo: 'Contribuye con donaciones físicas para apoyar nuestra causa.'
    },
    {
      source: 'https://images.pexels.com/photos/6995106/pexels-photo-6995106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Recolección de fondos',
      description: 'Eventos de recaudación',
      additionalInfo: 'Únete a nuestros eventos y ayuda a marcar la diferencia.'
    }
  ];

  return (
    <div className="bg-white-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-6 text-center shadow-lg text-green-600">
        {/* Sección de donación */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">¡Gracias por tu apoyo a la donación!</h2>
          <p className="text-lg">
            Hemos recolectado <span className="font-extrabold">{donationInfo.amount} {donationInfo.currency}</span> hasta ahora.
          </p>
          <p className="mt-2">
            <span className="font-semibold">{donationInfo.prize}</span>
          </p>
        </div>

        {/* Información del evento */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-green-600">Información de Donaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-green-600">
          {eventImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Íconos de donaciones */}
              {index === 0 && <Heart className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-green-500' : 'text-green-600'}`} />}
              {index === 1 && <Box className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-green-500' : 'text-green-600'}`} />}
              {index === 2 && <DollarSign className={`w-12 h-12 mb-4 transition-colors duration-300 ${isHovered ? 'text-green-500' : 'text-green-600'}`} />}

              <h3 className="text-xl font-semibold mb-2">{image.description}</h3>
              <p className="text-center">{image.additionalInfo}</p>

              <div className="relative mt-4 overflow-hidden rounded-lg shadow-lg group">
                <img src={image.source} alt={image.alt} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-green-600 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
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
