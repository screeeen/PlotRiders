import React from 'react';
import { TituloFechas } from './TituloFechas';
import { TituloSamil } from './TituloSamil';
import { LocationAccess } from './LocationAccess';

export const ContestData = () => (
  <>
    <h1>not the date</h1>
    {TituloFechas()}
    <h1>not the place</h1>
    {TituloSamil()}
    {LocationAccess()}
  </>
);

export const samilMap = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23210.548174851116!2d-8.813784474211838!3d42.210401663686326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd258a74d08202e3%3A0xc92165195e191e2b!2sPraia%20de%20Samil!5e1!3m2!1spt-PT!2ses!4v1750079105831!5m2!1spt-PT!2ses"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
