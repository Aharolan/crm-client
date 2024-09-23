import styled from "@emotion/styled";
import { IoMdAddCircle } from "react-icons/io";

export const GraduateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: "#d3d3d3";
  align-items: center;
  align-self: center;
  margin-top: 10px;
  border-radius: 10px;
  overflow: auto;
  font-size: 1.2vw;
  height: 25%;
`;

export const GraduateFieldInput = styled.input`
  width: 15vw;
  height: 50%;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  text-align: right;
  text-indent: 20px;
  background-color: #d3d3d3;
  border-radius: 10px;
  direction: rtl;
  border: 0px solid;
  outline-color: #d3d3d3;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const GraduateFieldSelect = styled.select<{ color?: string | null }>`
  display: flex;
  flex: reverse;
  height: 50%;
  justify-content: center;
  direction: rtl;
  font-size: 1.2vw;
  outline: 0px solid transparent;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  width: 15vw;
  text-indent: center;
  background-color: #d3d3d3;
  border-radius: 10px;
  border: 0px solid;
  outline-color: #d3d3d3;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const saveButton = styled.button`
  border-radius: 25px;
  font-size: 1vw;
  background-color: #90ee90;
  margin-left: 10px;
  width: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const AddButton = styled(IoMdAddCircle)`
  font-size: 2vw;
  color: #6ab5fa;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: -2%;
  margin-top: 1%;
  font-family: Arial;
`;
