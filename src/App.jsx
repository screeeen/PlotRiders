import React from 'react';
import { Intro } from './Texts';
import { ContestData } from './ContestData';
import { VigoSkateCitySpots } from './VigoSkateCitySpots';
import { RegistrationInfo } from './RegistrationInfo';
import { EventSchedule } from './EventSchedule';
import { ContestFlow } from './ContestFlow';
import { WCSPrizeTable } from './WCSPrizeTable';
import { Winners } from './Winners';

import './App.css';

const App = () => {
  return (
    <>
      <h1>hey you</h1>
      <p>hey... how vigoes...?</p>
      <h2>DON'T COME TO MARISQUIÑO 2025</h2>
      <p>(your coach will be proud!)</p>
      <p style={{ padding: '0 1rem' }}>
        <strong style={{ color: 'green', fontStyle: 'italic' }}>
          "Nice grinds, I will send you the invoice for the coping this year,
          thank you"
        </strong>
        - Director congratulations to one (undisclosed) rider...
      </p>
      {/* <img src={`${window.location.href}assets/images/joke2.png`} /> */}
      <div className="generaltext">{ContestData()}</div>

      <h1 style={{ textAlign: 'left', marginLeft: '1rem' }}>
        not a (real) contest
      </h1>

      <div className="generaltext">{WCSPrizeTable()}</div>
      <div className="generaltext">{EventSchedule()}</div>
      <div className="generaltext">{ContestFlow()}</div>
      <div className="generaltext">{RegistrationInfo()}</div>
      <Winners />

      <p style={{ padding: '0 1rem' }}>
        <strong style={{ color: 'pink', fontStyle: 'italic' }}>
          "We are not the champagne of skateboarding 👯‍♀️👯‍♀️👯‍♀️"
        </strong>{' '}
        - Course builder
      </p>
      <div className="generaltext">{VigoSkateCitySpots()}</div>
      <h1 style={{ textAlign: 'left', marginLeft: '1rem' }}>
        some more reasons...
      </h1>
      <h1 style={{ textAlign: 'left', marginLeft: '1rem' }}>...not to come</h1>
      <div className="generaltext">{Intro()}</div>
    </>
  );
};

export default App;
