import styled from "@emotion/styled";
import { general } from "../infoPopup.styles";
import {css} from '@emotion/react'

export const wraper = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const sideText = styled.text`
  height:40%;
  padding-bottom: 17%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  & p {
    font-size: 2vh;
    direction: rtl;
  } 
`;



const third_1 = css`
  grid-column-start: 5;
  grid-column-end: span 2;
`;
const third_2  = css`
  grid-column-start: 3;
  grid-column-end: span 2;
`;
const third_3 = css`
  grid-column-start: 1;
  grid-column-end: span 2;
`;
const half_1 = css`
  grid-column-start: 4;
  grid-column-end: span 3;
`;
const half_2 = css`
  grid-column-start: 1;
  grid-column-end: span 3;
`;

const row_1 = css`
  grid-row-start: 1;
  grid-row-end: span 2;
`;

const row_2 = css`
  grid-row-start: 3;
  grid-row-end: span 2;
`;

const row_3 = css`
  grid-row-start: 5;
  grid-row-end: span 2;
`;

const row_4 = css`
  grid-row-start: 7;
  grid-row-end: span 2;
`;

const row_5 = css`
  grid-row-start: 9;
  grid-row-end: span 3;
`

const row_6 = css`
  grid-row-start: 12;
  grid-row-end: span 6;
`
export const grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(18, 1fr);
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  width: 90%;
  height: 80%;
  & :nth-child(1){
    ${third_1}
    ${row_1}
  } & :nth-child(2){
    ${third_2}
    ${row_1}
  } & :nth-child(3){
    ${third_3}
    ${row_1}
  } & :nth-child(4){
    ${third_1}
    ${row_2}
  } & :nth-child(5){
    ${third_2}
    ${row_2}
  } & :nth-child(6){
    ${third_3}
    ${row_2}
  } & :nth-child(7){
    ${third_1}
    ${row_3}
  } & :nth-child(8){
    ${third_2}
    ${row_3}
  } & :nth-child(9){
    ${third_3}
    ${row_3}
  } & :nth-child(10){
    ${half_1}
    ${row_4}
  } & :nth-child(11){
    ${half_2}
    ${row_4}
  } & :nth-child(12){
    ${half_1}
    ${row_5}
  } & :nth-child(13){
    ${half_2}
    ${row_5}
  } & :nth-child(14){
    grid-column-start: 1;
    grid-column-end: span 6;
    ${row_6}
  }
`;

export const field = styled.div`
  ${general.fieldWrapper.__emotion_styles}
  height: 100%;
`
