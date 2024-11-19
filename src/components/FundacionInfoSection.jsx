import React, { useState } from 'react';
import { Heart, Users, Gem } from 'lucide-react';

const FundacionInfoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const fundacionImages = [
    {
      source: 'https://sellnowinc.com/wp-content/uploads/2023/09/vision.webp',
      alt: 'Misión de la fundación',
      description: 'Nuestra Misión',
      additionalInfo: 'Trabajamos para mejorar la calidad de vida de comunidades vulnerables a través de programas educativos y de salud.'
    },
    {
      source: 'https://media.licdn.com/dms/image/C4E12AQHyoPY7pAzWkQ/article-cover_image-shrink_720_1280/0/1572734553727?e=2147483647&v=beta&t=ALWO2sg7mS0tCvKndtVSxQmyJ3xvrbKsjXsJvsY7wNc',
      alt: 'Voluntarios de la fundación',
      description: 'Nuestros Voluntarios',
      additionalInfo: 'Contamos con un equipo dedicado de voluntarios que donan su tiempo y habilidades para hacer una diferencia.'
    },
    {
      source: 'https://www.esimpact.org/wp-content/uploads/2021/07/impacto-mundo.jpg',
      alt: 'Impacto de la fundación',
      description: 'Nuestro Impacto',
      additionalInfo: 'Hemos ayudado a más de 10,000 personas en los últimos 5 años, mejorando el acceso a educación y atención médica.'
    }
  ];

  return (
    <div className="bg-white text-green-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8">Nuestros proyectos</h2>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {fundacionImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Iconos asociados */}
              {index === 0 && <Heart className="w-12 h-12 mb-4 text-green-600" />}
              {index === 1 && <Users className="w-12 h-12 mb-4 text-green-600" />}
              {index === 2 && <Gem className="w-12 h-12 mb-4 text-green-600" />}

              <h3 className="text-xl font-semibold mb-2">{image.description}</h3>

              {/* Contenedor de imagen con hover */}
              <div className="relative mt-4 overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={image.source}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h4 className="text-lg font-bold mb-2">{image.description}</h4>
                    <p className="text-sm">{image.additionalInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de Donar */}
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

export default FundacionInfoSection;
