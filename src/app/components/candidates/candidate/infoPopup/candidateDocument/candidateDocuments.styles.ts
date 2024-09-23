import styled from "@emotion/styled";
import { fieldWrapper } from "../infoPopup.styles";

export const wrapper = styled.div`
    width: 90%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const rowsContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    max-height: 90%;
    overflow-y: auto;
`;

export const row = styled.div`
    direction:rtl; 
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1%;
    height: 4vh;
`;

export const title = styled.div<{ error: boolean }>`
  ${fieldWrapper.__emotion_styles}
  height: 99%;
  width: 20%;
  border: ${props => props.error ? '0.7px solid red' : 'none'};
`;


export const document = styled.div<{ error: boolean }>`
  ${fieldWrapper.__emotion_styles}
  width:25%;
  border: ${props => props.error ? '0.7px solid red' : 'none'};
  height: 99%;
  flex-direction: row-reverse;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const comment = styled.div`  
  ${fieldWrapper.__emotion_styles}
  width:50%;
  height: 100%;
`;

export const remove = styled.button`    
    background-color: red;
    border-radius: 25px;
`

export const button = styled.button`
    background-color:#4db1ff;
    height: 5%;
    border-radius:15px;   
`;
