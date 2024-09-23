import styled from "@emotion/styled";
import { checkBoxWrapper, fieldWrapper } from "../infoPopup.styles";


export const container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(26, 1fr);
  grid-column-gap: 1%;
  grid-row-gap: 1%;
  width: 90%;
  height: 100%;
  direction: rtl;
  & :nth-child(1){
    grid-column-start: 1;
    grid-column-end:  4;
    grid-row-start: 1;
    grid-row-end: span 3;
  } & :nth-child(2){
    grid-column-start: 4;
    grid-column-end:  5;
    grid-row-start: 1;
    grid-row-end: span 3;
  } & :nth-child(3){
    grid-column-start: 1;
    grid-column-end:  7;
    grid-row-start: 4;
    grid-row-end: span 4;
  } & :nth-child(4){
    grid-column-start: 2;
    grid-column-end:  3;
    grid-row-start: 8;
    grid-row-end: span 3;
  } & :nth-child(5){
    grid-column-start: 5;
    grid-column-end:  7;
    grid-row-start: 8;
    grid-row-end: span 3;
  } & :nth-child(6){
    grid-column-start: 3;
    grid-column-end: 5 ;
    grid-row-start: 13;
    grid-row-end: span 3;
  } & :nth-child(7){
    grid-column-start: 1;
    grid-column-end:  7;
    grid-row-start: 18;
    grid-row-end: span 8;
  } 
 
`;

export const field = styled.div`
  ${fieldWrapper.__emotion_styles}
  height: 100%;
`;

export const checkboxField = styled.div`
  ${checkBoxWrapper.__emotion_styles}
  height: 100%;
`
export const buttonField = styled.div`
  
`

export const studentCard = styled.button`
  background: #6AA7E0;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border: none;
`