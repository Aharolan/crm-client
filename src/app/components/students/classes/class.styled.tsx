import styled from "@emotion/styled";
import { MdEdit } from "react-icons/md";

export const Container = styled.div`
  min-width: 800px;
  min-height: 800px;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #6ab5fa;
  color: rgb(255, 255, 255);
  font-size: 140%;
  border-radius: 10px;
  height: 80%;
  width: 90%;
  cursor: pointer;
  border: none;
  align-items: center;
  &:hover {
    background-color: #146490;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 25rem);
  grid-template-rows: repeat(2, 5rem);
  margin-top: 5%;
  justify-content: center;
`;

export const BasicData = styled.div`
  min-width: 400px;
  display: flex;
  height: 38%;
  width: 28%;
  background-color: #a7a2a2;
  margin-top: 6vh;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const Icon = styled(MdEdit)`
  margin-top: 10%;
  min-width: 40px;
  background-color: #6ab5fa;
  border-radius: 100%;
  height: 11%;
  width: 10%;
  margin-top: 2%;
  margin-left: 2%;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #a3d3ec;
  }
`;

export const ClassNumber = styled.h1`
  font-size: 150%;
  margin-top: 0%;
`;

export const BasicDetails = styled.h2`
  font-size: 140%;
  margin-top: 0%;
`;
