import styled from 'styled-components';

export const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background: ${props => (props.color % 2 ? '#FFF' : '#EFF3')}; */
  z-index: -1;
`;

export const CellStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 0.4em;
  // min-height: 60px;
  // min-width: 60px;
  height: 80px;
  width: 80px;
  // padding: 1rem;
  // border: 1px solid #00000008 ;
  margin: 1rem;
`;

export const TitleCell = styled(CellStyle)`
  /* word-break: break-all; */
  word-break: normal;
  max-width: 400px;
  height: 80px;
  min-height: 120px;
  font-size: 1.2em;
  // border: 1px solid black;
`;

export const ImgSt = styled.img`
  height: 85%;
  width: 70%;
  filter: grayscale(100%) drop-shadow(2px 2px 0px black);
  z-index: 1;
`;

export const Name = styled.div`
  font-size: 0.8rem;
  z-index: 4;

  // border: 1px solid black;
`;
