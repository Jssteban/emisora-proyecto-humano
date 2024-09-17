import React from 'react';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-dj-at-a-club-party-wearing-headphones-image_15612219.jpg')",
          animation: "kenBurns 20s ease infinite alternate",
        }}
      ></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;