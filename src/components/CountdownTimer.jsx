import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

/**
 * Componente CountdownTimer
 *
 * Este componente funcional de React muestra una cuenta regresiva hacia una fecha específica, 
 * en este caso el 15 de octubre de 2024. Utiliza el hook useState para almacenar el tiempo restante 
 * (días, horas, minutos, segundos) y el hook useEffect para actualizar este tiempo cada segundo. 
 * También incluye un botón que lleva a una página de evento, usando react-router-dom.
 */
const CountdownTimer = () => {
  // Estado inicial del tiempo restante
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  // useEffect para actualizar la cuenta regresiva cada segundo
  useEffect(() => {
    // Fecha objetivo del evento
    const targetDate = new Date('October 15, 2024 00:00:00').getTime();

    // Intervalo que actualiza el tiempo restante
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Cálculo de días, horas, minutos y segundos restantes
      const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
      const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      // Actualización del estado con el tiempo restante
      setTimeLeft({ dias, horas, minutos, segundos });

      // Si la diferencia es menor que 0 (el evento ya pasó), detener el intervalo
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {/* Título del evento */}
      <h2 className="text-4xl font-bold mb-8 animate-pulse text-shadow-lg">Esperando Informacion</h2>
      
      {/* Fecha del evento */}
      <p className="text-2xl mb-4 animate-pulse text-shadow-md">Esperando Informacion</p>
      
      {/* Lugar del evento */}
      <p className="text-xl mb-8 animate-pulse text-shadow-md">Esperando Informacion</p>

      {/* Sección que muestra el tiempo restante */}
      {/* <div className="flex space-x-4 mb-8">
        {['dias', 'horas', 'minutos', 'segundos'].map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-5xl font-bold animate-pulse text-shadow-xl">{timeLeft[unit]}</span>
            <span className="text-lg animate-pulse text-shadow-md">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div> */}

      {/* Botón para el evento */}
      {/* <Link to="/emisora" className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300">
        Concierto
      </Link> */}
    </div>
  );
};

export default CountdownTimer;
