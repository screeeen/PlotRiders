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

const App = () => {
  const dataReversed = useContestsData();
  if (!dataReversed) return <></>;

  return (
    <>
      <h1>DON'T COME TO MARISQUIÑO 2025</h1>
      <div className="generaltext">{Intro()}</div>
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
    </>
  );
};

export default App;
