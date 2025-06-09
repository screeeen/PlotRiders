import React from 'react';
import emojiFlags from 'emoji-flags';

import './App.css';

export const generateImage = url => {
  const urlPic = `${window.location.href}assets${url}`;
  return url && <img src={urlPic} alt="*" />;
};

export const showTooltip = info => {}; // console.log(info);

export const makeCell = (i, name, pic, countryCode, year) => {
  if (countryCode === undefined || countryCode === '') return <></>;
  const ck = emojiFlags.countryCode(countryCode).emoji;
  return (
    <div
      className="cell"
      key={i}
      color={i}
      onMouseOver={() => showTooltip(name)}
    >
      <div className="yearflag">
        {year} {ck}
      </div>
      {generateImage(pic)}
      <div className="yearflag">{name} </div>
    </div>
  );
};
