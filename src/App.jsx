import React, { useState, useEffect } from "react";
import { wins } from "./data/winnersTable";
import {
  GridStyle,
  Name,
  CellStyle,
  ImgSt,
} from "./StyledMovi";
import emojiFlags from "emoji-flags";
import { objectModelStreetWomen, objectModelStreetMen, objectModelAdaptive, objectModelMiniramp } from "./CONSTANTS";

const App = () => {
  const [dataReversed, setData] = useState(null);
  useEffect(() => {
    // const rev = wins.reverse();
    const rev = wins;
    setData(rev);
  }, []);
  const generateImage = (url) =>{
      const urlPic =  `${window.location.href}assets${url}`
      return url && <ImgSt src={urlPic} alt="*" />
    }
  
  const showTooltip = (info) => {};//console.log(info);


  const cell = (i, name, pic,countryCode, year) => {   
    if (countryCode === undefined || countryCode === '') return (<></>)
    const ck = emojiFlags.countryCode(countryCode).emoji

    
  
  return (
  <CellStyle key={i} color={i} onMouseOver={() => showTooltip(name)}>
      <div style={{fontSize: '.6rem',display:'flex', alignSelf:'baseline', color:'black'}}>{year} {ck}</div>
      {generateImage(pic)}
      <div style={{fontSize: '.6rem',display:'flex', alignSelf:'self-end', color:'black'}}>{name} </div>
      
    </CellStyle>
    )
  }
  
  const generateCells = () => {
    return (
      <>
      
      <div style={{display:'flex', flexFlow: 'row wrap', width:'100%', justifyContent: 'center',margin: '2rem'}}>
      <h2>O Marisquiño Skateboarding Kids!</h2>
      </div>

      <div style={{display:'flex', flexFlow: 'row wrap'}}>
        <h2>Street Men! (2001-2024)</h2>
      </div>

      <div style={{display:'flex', flexFlow: 'row wrap', width:'100%', justifyContent: 'center'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelStreetMen.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap'}}>
          <h2>Street Women! (2013-2024)</h2>
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap', width:'100%', justifyContent: 'center'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelStreetWomen.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>

        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
        <h2 className="colorful-text">Miniramp! (2016-2024)</h2>
      </div>

        <div style={{display:'flex', flexFlow: 'row wrap', width:'100%', justifyContent: 'center'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelMiniramp.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>
        
        <div style={{display:'flex', flexFlow: 'row wrap', width:'100%', justifyContent: 'center'}}>
          <h2>Adaptive! (2024!)</h2>
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelAdaptive.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>
      </>
    );
  };
  return <GridStyle>{dataReversed && generateCells()}</GridStyle>;
};

export default App