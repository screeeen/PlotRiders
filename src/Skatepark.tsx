import React from 'react';

export const Skatepark = () => {
  const baseUrl = `${window.location.href}assets/promoimages/`;
  const img1 = `${baseUrl}D_14.jpg`;
  const img2 = `${baseUrl}D_15.jpg`;
  const img3 = `${baseUrl}D_16.jpg`;

  return (
    <div id="imageshowcase">
      <h1>playground</h1>
      <p>
        Lots of mysteries on this park, still don't know how it will go. It will
        have stones, the classic rainbow for those lazy asses who dont want to
        ollie.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={img1}
          alt="Scene 1"
          //   style={{ maxWidth: '300px', width: '100%', borderRadius: '8px' }}
        />
        <img
          src={img2}
          alt="Scene 2"
          //   style={{ maxWidth: '300px', width: '100%', borderRadius: '8px' }}
        />
        <img
          src={img3}
          alt="Scene 3"
          //   style={{ maxWidth: '300px', width: '100%', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};
