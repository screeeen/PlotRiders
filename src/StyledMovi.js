import styled from "styled-components";

export const GridStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  background: linear-gradient(
    to bottom, 

    #ffeae5 0%,     /* naranja pastel muy claro */
    #fff9da 92%,    /* amarillo crema pálido */
    #e7ecf7 95%,    /* azul gris claro */
    #dce1e9 100%    /* azul casi blanco */


    // #ffb39b 0%,      /* naranja muy claro (sol suave) */
    // #f7b733 92%,     /* amarillo suave (cielo) */
    // #2e3192 95%,     /* azul profundo (mar) */
    // #1b2735 100%     /* azul muy oscuro (noche) */
   
    // #f9e38b 92%,     /* amarillo pálido (cielo claro) */
    // #7a8cc6 95%,     /* azul pastel (mar suave) */
    // #374a61 100%     /* azul grisáceo (noche tenue) */
  ); 
`;

export const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background: ${(props) => (props.color % 2 ? "#FFF" : "#EFF3")}; */
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
  
    font-size: .8rem;
    z-index: 4;
  
    // border: 1px solid black;
`;
