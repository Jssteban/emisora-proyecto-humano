import React, { useState } from 'react';
import { Radio, Volume2, Heart, Search, Play, PlusCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Emisora = () => {
  const [search, setSearch] = useState('');
  const [canciones, setCanciones] = useState([
    { id: 1, titulo: "Canción A", artista: "Artista 1", popularidad: 90, likes: 0 },
    { id: 2, titulo: "Canción B", artista: "Artista 2", popularidad: 85, likes: 0 },
    { id: 3, titulo: "Canción C", artista: "Artista 3", popularidad: 92, likes: 0 },
    { id: 4, titulo: "Canción D", artista: "Artista 4", popularidad: 88, likes: 0 },
    { id: 5, titulo: "Canción E", artista: "Artista 5", popularidad: 95, likes: 0 },
  ]);

  const [cancionActual, setCancionActual] = useState(canciones[0]);

  const handleLike = (id) => {
    setCanciones((prevCanciones) =>
      prevCanciones.map((cancion) =>
        cancion.id === id ? { ...cancion, likes: cancion.likes + 1 } : cancion
      )
    );
  };

  const filteredCanciones = canciones.filter((cancion) =>
    cancion.titulo.toLowerCase().includes(search.toLowerCase()) ||
    cancion.artista.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-8">
        
        <Navbar />
        
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Radio en Vivo</h2>
          <p className="text-lg font-semibold text-center mb-2">Reproduciendo ahora:</p>
          <p className="text-xl text-center font-bold mb-4">{cancionActual.titulo} - {cancionActual.artista}</p>
          
          <div className="flex items-center justify-center mb-6">
            <Radio size={48} className="text-yellow-300 mr-4" />
            <p className="text-xl font-semibold">Escucha nuestra transmisión:</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
            <audio id="audioPlayer" controls autoPlay className="w-full">
              <source src="https://streaming.live365.com/a24319" type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Volume2 size={24} className="text-yellow-300 mr-2" />
            <p className="text-sm opacity-75">Ajusta el volumen a tu gusto</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 mt-10 shadow-lg max-w-lg w-full">
          <h3 className="text-2xl font-bold text-center mb-4">Canciones Más Buscadas</h3>
          
          {/* Campo de búsqueda */}
          <div className="flex items-center mb-4 bg-gray-800 p-2 rounded-lg">
            <Search size={20} className="text-yellow-300 mr-2" />
            <input
              type="text"
              placeholder="Buscar canción o artista..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          <ul className="divide-y divide-gray-200">
            {filteredCanciones.slice(0, 10).map((cancion) => (
              <li key={cancion.id} className="py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{cancion.titulo}</p>
                    <p className="text-sm opacity-75">{cancion.artista}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleLike(cancion.id)}
                      className="text-yellow-300 hover:text-yellow-400"
                    >
                      <Heart size={20} className="mr-1" />
                      {cancion.likes}
                    </button>
                  </div>
                </div>

                {/* Botones adicionales */}
                <div className="flex space-x-4 mt-2">
                  <button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1 px-3 rounded shadow-lg flex items-center space-x-1"
                  >
                    <PlusCircle size={16} />
                    <span>Agregar a lista</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Emisora;
