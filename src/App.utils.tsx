import { CellStyle, ImgSt } from "./StyledMovi"
import emojiFlags from "emoji-flags";

export const generateImage = (url) =>{
    const urlPic =  `${window.location.href}assets${url}`
    return url && <ImgSt src={urlPic} alt="*" />
  }


export const showTooltip = (info) => {}; // console.log(info);


export const makeCell = (i, name, pic,countryCode, year) => {   
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