import styled from "@emotion/styled";
import { MdEdit } from "react-icons/md";

export const ExamTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
`;

export const MissionRow = styled.div`
  flex: 1;
  display: flex;
  background-color:#FFFFFF;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
`;

export const NullRow = styled.div`
flex: 1;
display: flex;
background-color:#FFE5DA;
justify-content: center;
flex-wrap: wrap;
align-content: center;
font-weight: bold;
text-align: center;
font-family: Arial;
font-size: 13px;
`;

export const AverageTask = styled.div`
  flex: 1;
  display: flex;
  background-color: #CAD9FE;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
`;

export const AverageAverages = styled.div`
  flex: 1;
  display: flex;
  background-color: #CAD9FE;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
  border-bottom-left-radius:5px;
  border-top-left-radius: 5px;
`;

export const AverageClass = styled.div`
  flex: 1;
  display: flex;
  background-color:#B7BC82;
  justify-content: center;
  border-bottom-right-radius:5px;
  border-top-right-radius: 5px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
`;

export const StudentName = styled.div`
  flex: 1;
  display: flex;
  background-color: #FCFFD4;
  justify-content: center;
  border-bottom-right-radius:5px;
  border-top-right-radius: 5px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
`;

export const StudentAverage = styled.div`
  flex: 1;
  display: flex;
  background-color: #ECFFDA;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
`;

export const Table = styled.div`  
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 1%;
  width: 95%;
  height: auto;
  align-self: center;
  border-bottom: 0.2vw solid #000;
  padding-bottom: 0.5%;  
`;
export const TableRows = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  font-size: 20px;
  margin-bottom: 1%;
  width: 95%;
  height: 8%;
  align-self: center;
`;

export const GradeTable = styled.div`
  width: 100%;
  height: 80%;
  display:flex;
  flex-direction:column;
  align-self: center;
  gap: 5px;
`;

export const Title = styled.h1`
  text-decoration: underline;
  height: 50px;
  direction: rtl;
  size: 50px;
  margin: 0px;
`;

export const PageHead = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 95%;
  align-items: center;
  padding: 10px;
`;

export const EditBtn = styled.button`
    height: 30px;
    width: 30px;
    padding: 7px;
    background-color: #6AB5FA;
    border-radius: 50%;
    border: none;

`;

export const AddTableBtn = styled.button`
    color: white;
    height: 30px;
    width: 90px;
    background-color: #6AB5FA;
    border-radius: 20px;
    border: none;

`;

export const StudentsGrades = styled.div`
  width: 100%;
  height: 90%;
  display:flex;
  flex-direction:column;
  align-self: center;
  gap: 2%;
  overflow-y: auto;
`;
