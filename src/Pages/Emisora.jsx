import React from 'react';
import { Radio, Volume2 } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

/**
 * Componente `Emisora`
 * Este componente muestra una página donde los usuarios pueden escuchar una emisora de radio en vivo. 
 * Está diseñado con un fondo degradado y una interfaz moderna y sencilla.
 * 
 * Estructura del componente:
 * - `Navbar`: Un componente que representa la barra de navegación que aparece en la parte superior de la página.
 * - Fondo degradado: El fondo tiene una transición de azul a morado para dar un aspecto atractivo y moderno.
 * - `Radio` y `Volume2`: Iconos proporcionados por `lucide-react` que añaden un toque visual para la funcionalidad de radio y control de volumen.
 * - Elemento de audio: Se utiliza la etiqueta `<audio>` de HTML5 para la transmisión en vivo. La fuente del audio es un streaming en formato `audio/mpeg`.
 * - `Footer`: Pie de página que aparece al final de la página.
 * 
 * Diseño general:
 * - El contenedor principal usa `flexbox` para centrar el contenido tanto vertical como horizontalmente.
 * - El reproductor de audio está dentro de un contenedor con un fondo borroso (`backdrop-blur-lg`) y transparencia (`bg-opacity-20`), proporcionando un efecto de carta de vidrio.
 * - La funcionalidad de auto-reproducción del audio está activada con `autoPlay`, y los usuarios pueden controlar el volumen.
 * 
 * @returns {JSX.Element} - Devuelve la estructura de la página de la emisora con el reproductor de radio en vivo.
 */

const Emisora = () => {
  return (
    <>
      {/* Contenedor principal con diseño centrado y fondo degradado */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-8">
        
        {/* Barra de navegación */}
        <Navbar />
        
        {/* Contenedor del reproductor de radio */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-md w-full">
          
          {/* Título */}
          <h2 className="text-3xl font-bold mb-6 text-center">Radio en Vivo</h2>
          
          {/* Icono de radio y descripción */}
          <div className="flex items-center justify-center mb-6">
            <Radio size={48} className="text-yellow-300 mr-4" />
            <p className="text-xl font-semibold">Escucha nuestra transmisión:</p>
          </div>
          
          {/* Elemento de audio */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
            <audio id="audioPlayer" controls autoPlay className="w-full">
              <source src="https://streaming.live365.com/a24319" type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
          
          {/* Indicaciones para ajuste de volumen */}
          <div className="mt-6 flex items-center justify-center">
            <Volume2 size={24} className="text-yellow-300 mr-2" />
            <p className="text-sm opacity-75">Ajusta el volumen a tu gusto</p>
          </div>
        </div>
      </div>
      
      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default Emisora;
