import React, { useState } from 'react';
import { Heart, Users, Gem } from 'lucide-react';

/**
 * Componente FundacionInfoSection
 *
 * Este componente funcional de React muestra una galería de imágenes relacionadas con una fundación, 
 * cada una con un icono representativo, título y descripción. 
 * También incluye un botón para donar que cambia de estilo al pasar el ratón sobre él.
 */
const FundacionInfoSection = () => {
  const [isHovered, setIsHovered] = useState(false); // Estado para gestionar el hover en el botón "Donar"

  // Arreglo de imágenes que se mostrará en la sección
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
    },
    // Imágenes adicionales
    {
      source: 'https://virtual.cuc.edu.co/hubfs/Imported_Blog_Media/impacto-del-desarrollo-sostenible_png.webp',
      alt: 'Sostenibilidad',
      description: 'Nuestro Impacto',
      additionalInfo: 'Fomentamos el desarrollo sostenible en las comunidades.'
    },
    {
      source: 'https://www.expoknews.com/wp-content/uploads/2018/09/Impacto-social-total-una-nueva-perspectiva-para-la-estrategia.jpg',
      alt: 'Impacto social',
      description: 'Impacto social',
      additionalInfo: 'Desarrollamos proyectos de alto impacto social.'
    },
    {
      source: 'https://www.arete-activa.com/wp-content/uploads/2020/02/cmo-sabemos-si-somos-sostenibles.jpg',
      alt: 'Proyectos sostenibles',
      description: 'Proyectos sostenibles',
      additionalInfo: 'Implementamos prácticas sostenibles para el bienestar futuro.'
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8">Nuestros proyectos</h2>
        
        {/* Grid que muestra las imágenes de la fundación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {fundacionImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Icono asociado a cada imagen */}
              {index === 0 && <Heart className={`w-12 h-12 mb-4 ${isHovered ? 'text-white' : 'text-white'}`} />}
              {index === 1 && <Users className={`w-12 h-12 mb-4 ${isHovered ? 'text-white' : 'text-white'}`} />}
              {index === 2 && <Gem className={`w-12 h-12 mb-4 ${isHovered ? 'text-white' : 'text-white'}`} />}

              <h3 className="text-xl font-semibold mb-2">{image.description}</h3>
              
              {/* Contenedor de la imagen con efecto hover */}
              <div className="relative mt-4 overflow-hidden rounded-lg shadow-lg group">
                <img src={image.source} alt={image.alt} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                
                {/* Información adicional que aparece al hacer hover sobre la imagen */}
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h4 className="text-lg font-bold mb-2">{image.description}</h4>
                    <p className="text-sm">{image.additionalInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón de Donar con efecto hover */}
        <div className="text-center">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-purple-500 transition duration-300"
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
