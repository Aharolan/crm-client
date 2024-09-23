import styled from "@emotion/styled";
import { PiArrowCircleRightThin } from "react-icons/pi";


export const container = styled.div`
  width:100%;
  height:100%;
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
  margin-right: 3%;
  border-bottom: 0.2vw solid #000;
  display: inline-block;
  white-space: nowrap;
`;


export const AddStudentButton = styled.button`
  background-color: #6AB5FA;
  text-align: center;
  width:14%;
  height:100%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  min-width:20px;
  margin-left:2%;
  margin-right:70%;
  &:hover {
    background-image: -webkit-linear-gradient(gray 90%, lightgray 100%)
  }
`;

export const Table = styled.div`
  margin: auto;
  display:flex;
  flex-direction:column;
  border-radius: 5px;
  align-items:center;
`;



export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: auto;
  padding: 15px;
`;

export const CoursesWrapper = styled.div`
  display: flex;
  width:95%;
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
  width:100%;
  border-radius:12px;
`


export const deleteButton = styled.button`
  background-color: red;
  border-radius: 100px;
  border-width: 1px;
  color: white;
  height: 2vw;
  width: 2vw;
 `;

export const CourseField = styled.label`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

export const CourseHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-size: 1vw;
`;

export const ArrowIcon = styled(PiArrowCircleRightThin)`
  position: absolute;
  bottom: 5%;
  right: 15%;
  height: 5vw;   
  width:5vw;
  cursor: pointer;
 
 `;