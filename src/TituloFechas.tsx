import React from 'react';

export const TituloFechas = () => {
  const animatedStyle = {
    background:
      'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
    backgroundSize: '400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'rainbow 4s linear infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes rainbow {
            0% { background-position: 0% }
            100% { background-position: 100% }
          }
        `}
      </style>
      <h2>
        7th, 8th, 9th & 10th <span style={animatedStyle}>August</span> 2025
      </h2>
    </>
  );
};
