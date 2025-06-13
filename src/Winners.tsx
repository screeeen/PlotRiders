import React from 'react';
import {
  objectModelStreetWomen,
  objectModelStreetMen,
  objectModelAdaptive,
  objectModelMiniramp,
} from './CONSTANTS';
import { makeCell } from './App.utils';
import { useContestsData } from './useContestsData';

export const Winners = () => {
  const dataReversed = useContestsData();
  if (!dataReversed) return <></>;

  return (
    <div className="gridStyle">
      <h2 className="title">not the 25 years winners!</h2>
      <h2 className="categoryTitle adaptiveTitle">adaptive! (2024!)</h2>
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

      <h2 className="categoryTitle womentitle">street Women! (2013-2024)</h2>
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

      <h2 className="categoryTitle miniramp">miniramp! (2016-2024)</h2>
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

      <h2 className="categoryTitle mentitle">street Men! (2001-2024)</h2>
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
  );
};
