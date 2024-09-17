import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const targetDate = new Date('October 15, 2024 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
      const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ dias, horas, minutos, segundos });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-8 animate-pulse text-shadow-lg">Próximo Evento</h2>
      <p className="text-2xl mb-4 animate-pulse text-shadow-md">15 de Octubre, 2024</p>
      <p className="text-xl mb-8 animate-pulse text-shadow-md">Lugar: Por confirmar</p>
      <div className="flex space-x-4">
        {['dias', 'horas', 'minutos', 'segundos'].map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-5xl font-bold animate-pulse text-shadow-xl">{timeLeft[unit]}</span>
            <span className="text-lg animate-pulse text-shadow-md">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;