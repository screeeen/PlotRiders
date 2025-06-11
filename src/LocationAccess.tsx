import React from 'react';
import { samilMap } from './ContestData';

export const LocationAccess = () => {
  const urlPic = `${window.location.href}assets/images/vigo_top.png`;
  const urlPic2 = `${window.location.href}assets/images/marisco_spot.jpg`;
  const urlPista1 = `${window.location.href}assets/promoimages/pista1.jpg`;
  const urlPista2 = `${window.location.href}assets/promoimages/pista2.jpg`;
  const urlPuesta1 = `${window.location.href}assets/promoimages/puesta1.jpg`;
  const urlPuesta2 = `${window.location.href}assets/promoimages/puesta2.jpg`;
  const urlPuesta3 = `${window.location.href}assets/promoimages/puesta3.jpg`;
  const urlPuesta4 = `${window.location.href}assets/promoimages/puesta4.jpg`;
  const urlPuesta5 = `${window.location.href}assets/promoimages/puesta5.jpg`;
  const urlPuesta6 = `${window.location.href}assets/promoimages/puesta6.jpg`;
  const urlPuesta7 = `${window.location.href}assets/promoimages/puesta7.jpg`;
  const urlBlur1 = `${window.location.href}assets/promoimages/blur1.jpg`;
  const urlBlur2 = `${window.location.href}assets/promoimages/blur2.jpg`;
  const urlBlur3 = `${window.location.href}assets/promoimages/blur3.jpg`;
  const urlBlur4 = `${window.location.href}assets/promoimages/blur4.jpg`;
  const urlBlur5 = `${window.location.href}assets/promoimages/blur5.jpg`;
  const urlBlur6 = `${window.location.href}assets/promoimages/blur6.jpg`;
  const urlBlur7 = `${window.location.href}assets/promoimages/blur7.jpg`;
  return (
    <>
      <div id="locationaccess">
        <img src={urlPic} />
        <img src={urlPista1} />
        <img src={urlPista2} />
        <img src={urlPic2} />
        <h1>Because there's no vibes...</h1>
        <img src={urlPuesta2} />
        {/* <img src={urlPuesta3} /> */}
        <img src={urlPuesta7} />
        <img src={urlPuesta6} />
        <img src={urlPuesta5} />
        <img src={urlPuesta4} />
        <img src={urlPuesta1} />
        <h1>And no spanish skateboarding sessions at all</h1>
        {/* <img src={urlBlur2} /> */}
        <img src={urlBlur3} />
        <img src={urlBlur4} />
        <img src={urlBlur1} />
        <img src={urlBlur5} />
        <img src={urlBlur6} />
        <img src={urlBlur7} />
        <h1>It is this far...</h1>
        <ul style={{ background: 'white', color: 'black', padding: '1rem' }}>
          <li>Madrid: 580 kilometers.</li>
          <li>Barcelona: 1,100 kilometers.</li>
        </ul>
        {samilMap()}
        <br />
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
            <br />
            High-speed (AVE) and regional trains. Stations: Vigo-Urzáiz
            (high-speed) and Vigo-Guixar (long distance).
          </li>
          <li>
            Direct connection from Ourense, Santiago, A Coruña, Madrid (≈6h),
            Zamora, León.
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
            <br />
            Routes from Madrid, Gijón, Bilbao, León, Salamanca, and other major
            cities.
          </li>
          <li>
            <a
              href="https://www.avanzabus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.avanzabus.com
            </a>
            <br />
            Some national routes to Galicia.
          </li>
          <li>
            <a
              href="https://www.flixbus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.flixbus.com
            </a>
            <br />
            International lines from France, Portugal, and northern Spain.
          </li>
          <li>
            <a
              href="https://www.autna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.autna.com
            </a>
            <br />
            Daily service between Porto Airport and Vigo.
          </li>
          <li>
            Vigo's main bus station: Rúa de Isaac Peral, 2. City and regional
            connections.
          </li>
        </ul>

        <h3 style={{ fontStyle: 'italic' }}>AIRPLANES!!!</h3>
        <ul>
          <li>
            <strong>Vigo Airport (VGO)</strong>: national flights with Iberia,
            Air Europa, Volotea, and Vueling.
            <br />
            Access via city bus (Line L9A) or taxi (≈18 €).
          </li>
          ---
          <li>
            <strong>Santiago de Compostela Airport (SCQ)</strong>: international
            and national flights with Ryanair, Vueling, Iberia, Lufthansa.
            <br />
            Access by train (RENFE to Vigo), bus, or car.
          </li>
          ---
          <li>
            <strong>Porto Airport (OPO)</strong>: many low-cost airlines. Direct
            bus connection to Vigo (Autna).
            <br />
            Distance: 150 km.
          </li>
          ---
          <li>
            <strong>A Coruña Airport (LCG)</strong>: domestic flights. 160 km
            from Vigo. Access by train or car.
          </li>
        </ul>

        <h2>Don't plan the accommodation, don't come</h2>
        <p>will be updated soon with more entries...</p>
        <h4>Hotels in town:</h4>
        <ul>
          <li>
            <a
              href="https://www.hotelbahiadevigo.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotel Bahía de Vigo
            </a>
            A classic, 70s made, style for miles...
          </li>

          <li>
            <a
              href="https://www.hostalcasadominguez.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hostal Casa Domínguez
            </a>
            <br />
            Simple and central, close to train and bus station.
          </li>
          <li>
            <a
              href="https://www.hostalpereiravigo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hostal Pereiró
            </a>
            <br />
            Budget stay, walking distance to the old town.
          </li>
          <li>
            <a
              href="https://www.hotelogalia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotel Ogalia
            </a>
            <br />
            Affordable and well-located downtown hotel.
          </li>
          <li>
            <a
              href="https://www.bedandbreakfast.eu/en/a/6250865/hostal-ancla-dorada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hostal Ancla Dorada
            </a>
            <br />
            Clean, low-cost rooms next to the train station.
          </li>

          {/* <li>Hotel Carris</li>
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
          <li>Hotel Axis</li>*/}
        </ul>

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
            <a
              href="https://www.campingplayasamil.com/galeria.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Camping Playa Samil
            </a>
          </li>
          ---
          <li>
            <a
              href="https://www.ondasdecanido.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Camping Canido (2km away)
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
