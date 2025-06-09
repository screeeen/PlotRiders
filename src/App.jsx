import React from 'react';
import {
  objectModelStreetWomen,
  objectModelStreetMen,
  objectModelAdaptive,
  objectModelMiniramp,
} from './CONSTANTS';
import { useContestsData } from './useContestsData';
import { makeCell } from './App.utils';

import './App.css';
import { Intro } from './Texts';
import { ContestData } from './ContestData';
import { VigoSkateCitySpots } from './VigoSkateCitySpots';
import { RegistrationInfo } from './RegistrationInfo';
import { EventSchedule } from './EventSchedule';
import { ContestFlow } from './ContestFlow';
import { WCSPrizeTable } from './WCSPrizeTable';

const App = () => {
  const dataReversed = useContestsData();
  if (!dataReversed) return <></>;

  return (
    <>
      <p>hey... how vigoes...?</p>
      <h2>DON'T COME TO MARISQUIÑO 2025</h2>
      <p style={{ padding: '0 1rem' }}>
        <strong style={{ color: 'green', fontStyle: 'italic' }}>
          "Nice grinds, I will send you the invoice for the coping this year,
          thank you"
        </strong>
        - Director congratulations to one (undisclosed) rider...
      </p>
      <img src={`${window.location.href}assets/images/joke2.png`} />
      <div className="generaltext">{Intro()}</div>
      <div className="generaltext">{ContestData()}</div>
      <div className="generaltext">{EventSchedule()}</div>
      <div className="generaltext">{ContestFlow()}</div>
      <div className="generaltext">{WCSPrizeTable()}</div>

      <div className="generaltext">{VigoSkateCitySpots()}</div>
      <h3>TUNES FOR TRAINING</h3>
      <div style={{ padding: '0 1rem' }}>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/1lNsofrysJlpn06AlhPTJn?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
      <div className="generaltext">{RegistrationInfo()}</div>
      <div className="gridStyle">
        <h2 className="title">O Marisquiño Kids!</h2>
        <h2 className="categoryTitle adaptiveTitle">Adaptive! (2024!)</h2>
        <div className="categoryContent">
          {dataReversed.map(yearResults => (
            <>
              {objectModelAdaptive.map((model, i) =>
                makeCell(
                  i,
                  yearResults[model],
                  yearResults[`${model}Pic`],
                  yearResults[`${model}Country`],
                  yearResults['year']
                )
              )}
            </>
          ))}
        </div>

        <h2 className="categoryTitle womentitle">Street Women! (2013-2024)</h2>
        <div className="categoryContent">
          {dataReversed.map(yearResults => (
            <>
              {objectModelStreetWomen.map((model, i) =>
                makeCell(
                  i,
                  yearResults[model],
                  yearResults[`${model}Pic`],
                  yearResults[`${model}Country`],
                  yearResults['year']
                )
              )}
            </>
          ))}
        </div>

        <h2 className="categoryTitle miniramp">Miniramp! (2016-2024)</h2>
        <div className="categoryContent">
          {dataReversed.map(yearResults => (
            <>
              {objectModelMiniramp.map((model, i) =>
                makeCell(
                  i,
                  yearResults[model],
                  yearResults[`${model}Pic`],
                  yearResults[`${model}Country`],
                  yearResults['year']
                )
              )}
            </>
          ))}
        </div>

        <h2 className="categoryTitle mentitle">Street Men! (2001-2024)</h2>
        <div className="categoryContent">
          {dataReversed.map(yearResults => (
            <>
              {objectModelStreetMen.map((model, i) =>
                makeCell(
                  i,
                  yearResults[model],
                  yearResults[`${model}Pic`],
                  yearResults[`${model}Country`],
                  yearResults['year']
                )
              )}
            </>
          ))}
        </div>
      </div>
      <p style={{ padding: '0 1rem' }}>
        <strong style={{ color: 'violet', fontStyle: 'italic' }}>
          We aren't the champaign of skateboarding, but we have oysters...
        </strong>
      </p>
    </>
  );
};

export default App;
