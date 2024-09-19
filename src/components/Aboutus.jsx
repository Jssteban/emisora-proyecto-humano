import React from 'react';

/**
 * Componente Aboutus
 *
 * Este componente funcional de React renderiza una sección de "Sobre Nosotros" 
 * para una página web. La sección incluye una breve descripción de una empresa 
 * dedicada a crear experiencias musicales inolvidables. Se resalta la pasión de la 
 * empresa por conectar a los artistas con su público y su experiencia en la industria 
 * del entretenimiento.
 *
 * Características:
 * - Muestra un título y tres párrafos de texto en un contenedor con estilo.
 */
const Aboutus = () => {
  return (
    // Contenedor principal con fondo negro semitransparente, texto blanco y bordes redondeados
    <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg max-w-2xl mx-auto my-12">
      
      {/* Título principal de la sección */}
      <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
      
      {/* Primer párrafo que describe la misión de la empresa */}
      <p className="mb-4">
        Somos una empresa dedicada a crear experiencias musicales inolvidables. 
        Desde conciertos íntimos hasta festivales multitudinarios, nuestra pasión 
        es conectar a los artistas con su público a través de la magia de la música en vivo.
      </p>

      {/* Segundo párrafo que destaca la experiencia y el compromiso de la empresa */}
      <p className="mb-4">
        Con años de experiencia en la industria del entretenimiento, nuestro equipo 
        se esfuerza por ofrecer eventos de la más alta calidad, cuidando cada detalle 
        para asegurar que tanto los artistas como los asistentes vivan momentos únicos.
      </p>

      {/* Último párrafo que invita a los usuarios a unirse a la próxima experiencia musical */}
      <p>
        Únete a nosotros en nuestra próxima aventura musical y sé parte de algo extraordinario.
      </p>
    </div>
  );
};

export default Aboutus;
