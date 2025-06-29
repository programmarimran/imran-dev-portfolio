import React from 'react';
import Particles from 'react-particles';

const ParticlesBackground = () => {
  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full z-0"
      options={{
        particles: {
          number: {
            value: 50,
            density: { enable: true, value_area: 800 }
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: 2 },
          move: { enable: true, speed: 0.8 }
        }
      }}
    />
  );
};

export default ParticlesBackground;
