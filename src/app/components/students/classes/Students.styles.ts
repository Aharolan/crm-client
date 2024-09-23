import styled from "@emotion/styled";
import { PiArrowCircleRightThin } from "react-icons/pi";


export const container = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


export const Row = styled.div`
  width:100%;
  display: flex;
  align-items: center;  
  flex-direction: row-reverse;
  height: 2vw; 
  padding: 1vw;
  margin-bottom: 2vw; 
`;


export const TableCaption = styled.p`
  font-size: 1.8vw;
  font-weight: bold;  
  margin-right: 3%;
  border-bottom: 0.2vw solid #000;
  font-family: Arial;
`;


export const AddStudentButton = styled.button`
  position: absolute;
  background-color: #6AB5FA;
  text-align: center;
  width:14%;
  height:4%;
  left: 2.5%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
`;


export const SortButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    background-image: -webkit-linear-gradient(gray 0%, lightgray 100%)
  }
`;


export const Table = styled.div`
  display:flex;
  flex-direction:column;
  border-radius: 5px;
  align-items:center;
  width: 100%;
`;


export const TableHead = styled.div` 
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  height: 3vw;
`;


export const StudentWrapper = styled.div`
  width:100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  height: 3vw;
 
  background-color: #f0f0f0;
  margin:0.5vw 0 0.5vw 0;
  &:hover {
  background-color: hsla(180, 100%, 50%, 0.9); 
  }  
  color: rgb(57, 52, 52);
  text-align: center;   
  border-radius:12px;
`;


export const openInfo = styled.div`
  cursor:pointer;
  display:flex;
  width:80%;
  border-radius:12px;
`


export const deleteButton = styled.button`
  background-color: red;
  border-radius: 100px;
  border-width: 0;
  color: white;
  height: 2vw;
  width: 2vw;
  margin: 1.5%;
 `;
 

export const optionButton = styled.button`
  background-color:#6AB5FA;
  border-radius: 50px;
  border-width: 0;
  color: white;
  height: 2vw;
  width: 2vw;
  margin: 1.5%;
`;


export const StudentField = styled.label`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2vw;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;


export const StudentHeadField = styled.div`
   height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial;
  font-size: 1.2vw;
  font-weight: bold;
`;


 export const ArrowIcon = styled(PiArrowCircleRightThin)`
  position: absolute;
  bottom: 5%;
  right: 15%;
  height: 5vw;   
  width:5vw;
  cursor: pointer;
 `;

 export const DocumentsIcon = styled(PiArrowCircleRightThin)` 
 `;