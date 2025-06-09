import React from 'react';

export const TituloSamil = () => {
  const sunsetStyle = {
    background:
      'linear-gradient(90deg, #ff7e5f, #feb47b, #fd6585, #ff9966, #f76b1c)',
    backgroundSize: '300% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'sunsetFade 6s ease-in-out infinite alternate',
  };

  return (
    <>
      <style>
        {`
          @keyframes sunsetFade {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      <h2>
        <span style={sunsetStyle}>Samil Beach in Vigo</span>
      </h2>
    </>
  );
};
