import React from 'react';

const MapaRutaBCNVigo = () => (
  <div style={{ width: '100%', height: '450px' }}>
    <iframe
      title="Ruta Barcelona a Vigo"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&origin=Barcelona,Spain&destination=Vigo,Spain&mode=driving&units=metric`}
    />
  </div>
);

export default MapaRutaBCNVigo;
