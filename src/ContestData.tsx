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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.3139041604883!2d-8.774798023891763!3d42.21510704546217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f75c5d7201f1d%3A0x4ec6e086ab9c87e9!2sAparcamiento%20Samil%202!5e0!3m2!1ses!2ses!4v1717938412345!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Aparcamiento Samil 2"
      ></iframe>
    </div>
  );
};
