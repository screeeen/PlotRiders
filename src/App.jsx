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
import { intro } from './texts';

const App = () => {
  const dataReversed = useContestsData();
  if (!dataReversed) return <></>;

  return (
    <div className="gridStyle">
      {/* <p>{intro()}</p> */}
      <div>
        <h2 className="title">O Marisquiño Skateboarding Kids!</h2>
      </div>

      <div className="categoryTitle adaptiveTitle">
        <h2>Adaptive! (2024!)</h2>
      </div>

      <div className="row">
        {dataReversed.map(yearResults => (
          <div className="row">
            {objectModelAdaptive.map((model, i) =>
              makeCell(
                i,
                yearResults[model],
                yearResults[`${model}Pic`],
                yearResults[`${model}Country`],
                yearResults['year']
              )
            )}
          </div>
        ))}
      </div>

      <div className="categoryTitle womenTitle">
        <h2>Street Women! (2013-2024)</h2>
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {dataReversed.map(yearResults => (
          <div className="row">
            {objectModelStreetWomen.map((model, i) =>
              makeCell(
                i,
                yearResults[model],
                yearResults[`${model}Pic`],
                yearResults[`${model}Country`],
                yearResults['year']
              )
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, gold, green)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <h2 className="colorful-text">Miniramp! (2016-2024)</h2>
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {dataReversed.map(yearResults => (
          <div className="row">
            {objectModelMiniramp.map((model, i) =>
              makeCell(
                i,
                yearResults[model],
                yearResults[`${model}Pic`],
                yearResults[`${model}Country`],
                yearResults['year']
              )
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, red, #7873f5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <h2>Street Men! (2001-2024)</h2>
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {dataReversed.map(yearResults => (
          <div className="row">
            {objectModelStreetMen.map((model, i) =>
              makeCell(
                i,
                yearResults[model],
                yearResults[`${model}Pic`],
                yearResults[`${model}Country`],
                yearResults['year']
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
