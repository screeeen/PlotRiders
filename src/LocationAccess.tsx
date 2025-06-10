import React from 'react';
import { samilMap } from './ContestData';

export const LocationAccess = () => {
  const urlPic = `${window.location.href}assets/images/vigo_top.png`;
  const urlPic2 = `${window.location.href}assets/images/marisco_spot.jpg`;
  return (
    <>
      <div id="locationaccess">
        <img src={urlPic} />
        <h4>Distances:</h4>
        <ul>
          <li>Madrid: 580 kilometers.</li>
          <li>Barcelona: 1,100 kilometers.</li>
        </ul>
        {samilMap()}
        <br />
        <img src={urlPic2} />
        <h2>Ways you shouldn't choose to access to Vigo:</h2>
        <h3 style={{ fontStyle: 'italic' }}>TRAINS!</h3>
        <ul>
          <li>
            <a
              href="https://www.renfe.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.renfe.es
            </a>
          </li>
        </ul>
        <h3 style={{ fontStyle: 'italic' }}>BUSES!!</h3>
        <ul>
          <li>
            <a
              href="https://www.alsa.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.alsa.es
            </a>
            Good for any destination from Spain
          </li>
          <li>
            <a
              href="https://www.avanzabus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.avanzabus.com
            </a>
          </li>
          <li>
            <a
              href="https://www.autna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.autna.com
            </a>
            Good for Porto Airport
          </li>
        </ul>
        <h3 style={{ fontStyle: 'italic' }}>AIRPLANES!!!</h3>
        <ul>
          <li>
            <strong>Vigo Airport</strong>: city bus to the center (1.50 €), taxi
            (≈18 €).
          </li>
          ---
          <li>
            <strong>Airport Santiago de Compostela</strong>: 85 km. Access by
            train & bus.
          </li>
          ---
          <li>
            <strong>Airport Oporto (Portugal)</strong>: 150 km. Travelling by
            bus & train.
          </li>
        </ul>

        <h2>Accommodation</h2>
        <p>will be updated soon with more entries...</p>
        {/* <h4>Hotels in town:</h4>
        <ul>
          <li>Hotel Bahía de Vigo</li>
          <li>Hotel Carris</li>
          <li>Hotel AC Palacio Universal</li>
          <li>Hotel Puerta del Sol</li>
          <li>Hotel Ciudad de Vigo</li>
          <li>Hotel Atlántico</li>
          <li>Hotel del Mar</li>
          <li>Hotel Compostela</li>
          <li>Hotel Tryp Los Galeones</li>
          <li>Hotel Zenit</li>
          <li>Hostal Gran Vía</li>
          <li>Hotel Ciudad de Vigo</li>
          <li>Hotel Bahía de Vigo</li>
          <li>Hotel AC Palacio Universal</li>
          <li>Hotel Axis</li>
        </ul> */}

        <h4>Hotels in the contest area (Samil beach):</h4>
        <ul>
          <li>
            <a
              href="https://hotelplayadevigo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotel Playa de Vigo
            </a>
          </li>
          ---
          <li>
            <a
              href="https://www.hotelpsb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotel Santa Praia Bahia
            </a>
          </li>
          ---
          <li>
            <strong>Camping Playa Samil</strong>
            <br />
            Tel: +34 683.584.748
            <br />
            Email:{' '}
            <a href="mailto:info@campingplayasamil.com">
              info@campingplayasamil.com
            </a>
            <br />
            <a
              href="https://www.campingplayasamil.com/galeria.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.campingplayasamil.com
            </a>
            <br />
            Mobile Homes with 2 rooms
          </li>
          ---
          <li>
            <strong>Camping Canido (2km away)</strong>
            <br />
            <a
              href="https://www.ondasdecanido.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ondasdecanido.es
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
