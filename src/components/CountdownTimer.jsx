import React, { useState, useEffect } from 'react';

/**
 * Componente CountdownTimer que muestra una cuenta regresiva en tiempo real
 * hacia una fecha y hora específica.
 * 
 * @returns {JSX.Element} El temporizador de cuenta regresiva.
 */
const CountdownTimer = () => {
  // Estado para almacenar el tiempo restante en días, horas, minutos y segundos.
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  // Efecto que calcula la diferencia entre la fecha actual y la fecha objetivo.
  useEffect(() => {
    const targetDate = new Date('October 15, 2024 00:00:00').getTime(); // Fecha objetivo

    const interval = setInterval(() => {
      const now = new Date().getTime(); // Fecha y hora actuales
      const difference = targetDate - now; // Diferencia en milisegundos

      // Calculo de días, horas, minutos y segundos restantes
      const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
      const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ dias, horas, minutos, segundos });

      // Si la diferencia es negativa, se detiene la cuenta regresiva
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    }, 1000); // Actualiza cada segundo

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {/* Título del evento */}
      <h2 className="text-4xl font-bold mb-8 animate-pulse text-shadow-lg">Próximo Evento</h2>
      {/* Fecha del evento */}
      <p className="text-2xl mb-4 animate-pulse text-shadow-md">15 de Octubre, 2024</p>
      {/* Lugar del evento */}
      <p className="text-xl mb-8 animate-pulse text-shadow-md">Lugar: Por confirmar</p>

      {/* Sección que muestra el tiempo restante */}
      <div className="flex space-x-4">
        {['dias', 'horas', 'minutos', 'segundos'].map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            {/* Muestra el valor del tiempo restante */}
            <span className="text-5xl font-bold animate-pulse text-shadow-xl">{timeLeft[unit]}</span>
            {/* Muestra el nombre de la unidad de tiempo */}
            <span className="text-lg animate-pulse text-shadow-md">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
