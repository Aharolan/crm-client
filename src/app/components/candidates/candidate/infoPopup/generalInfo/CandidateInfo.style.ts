import styled from "styled-components";

export const wraper = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
`;

export const sideText = styled.text`
  height:40%;
  padding-top: 8%;
  margin: 0;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  & p {
    font-size: 2vh;
    direction: rtl;
    padding: 0;
    margin: 0;
  } 
`;

export const grid = styled.div`
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 1%;
  grid-row-gap: 1%;
  width: 90%;
  height: 90%;
  & :nth-child(1){
    grid-column-start: 1;
    grid-column-end:  11;
    grid-row-start: 1;
  } & :nth-child(2){
    grid-column-start: 11;
    grid-column-end:  21;
    grid-row-start: 1;
  } :nth-child(3){
    grid-column-start: 21;
    grid-column-end:  31;
    grid-row-start: 1;
  } :nth-child(4){
    grid-column-start: 1;
    grid-column-end:  11;
    grid-row-start: 2;
    grid-row-end: 6;
  } :nth-child(5){
    grid-column-start: 11;
    grid-column-end:  21;
    grid-row-start: 2;
    grid-row-end: 2;
  } :nth-child(6){
    grid-column-start: 21;
    grid-column-end:  31;
    grid-row-start: 2;
    grid-row-end: 2;
  } :nth-child(7){
    grid-column-start: 11;
    grid-column-end:  21;
    grid-row-start: 3;
    grid-row-end: 3;
  } :nth-child(8){
    grid-column-start: 21;
    grid-column-end:  31;
    grid-row-start: 3;
    grid-row-end: 3;
  } :nth-child(9){
    grid-column-start: 11;
    grid-column-end:  17;
    grid-row-start: 4;
    grid-row-end: 4;
  } :nth-child(10){
    grid-column-start: 17;
    grid-column-end:  25;
    grid-row-start: 4;
    grid-row-end: 4;
  } :nth-child(11){
    grid-column-start: 25;
    grid-column-end:  31;
    grid-row-start: 4;
    grid-row-end: 4;
  } :nth-child(12){
    grid-column-start: 11;
    grid-column-end:  17;
    grid-row-start: 5;
    grid-row-end: 5;
  } :nth-child(13){
    grid-column-start: 17;
    grid-column-end:  25;
    grid-row-start: 5;
    grid-row-end: 5;
  } :nth-child(14){
    grid-column-start: 25;
    grid-column-end:  31;
    grid-row-start: 5;
    grid-row-end: 5;
  } :nth-child(15){
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 6;
    grid-row-end: 6;
  } :nth-child(16){
    grid-column-start: 7;
    grid-column-end:  13;
    grid-row-start:6;
    grid-row-end: 6;
  } :nth-child(17){
    grid-column-start: 13;
    grid-column-end:  21;
    grid-row-start: 6;
    grid-row-end: 6;
  } :nth-child(18){
    grid-column-start: 21;
    grid-column-end:  25;
    grid-row-start: 6;
    grid-row-end: 6;
  } :nth-child(19){
    grid-column-start: 25;
    grid-column-end:  31;
    grid-row-start: 6;
    grid-row-end: 6;
  } :nth-child(20){
    grid-column-start: 1;
    grid-column-end:  31;
    grid-row-start: 7;
    grid-row-end: 9;
  }
`;

export const ImageText = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin: 30%;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin: 0%;
`;

export const imgWrapper = styled.div`
  margin: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #D3D3D3;
  flex-direction: column;
`