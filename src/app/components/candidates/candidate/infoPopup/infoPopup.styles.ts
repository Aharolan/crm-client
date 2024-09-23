import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PopupWindowShadow = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const modal = styled.div`
  width: 70vw;
  height: 75vh;
  min-height: 550px;
  min-width: 500px;
  top: 5vh;
  left: 13vw;
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: white;
  padding: 1vw;
  border-radius: 15px;
  border: 1px solid gray;
`;

export const header = styled.h4`
  display: flex;
  padding-right: 5%;
  text-align: right;
  direction: rtl;
  margin: 0;
  font-size: 1.2vw;
  font-weight: bold;
  font-family: Arial;
  text-decoration: underline;
`;

export const section = styled.div`
  height: 82%;
  width: 100%;
`;

export const buttonsRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  height: 5%;
  width: 100%;
  margin-left: 5px;
`;

export const buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 90%;
  width: 90%;
`;

export const buttonsLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 90%;
  width: 18%;
`;

export const sectionButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#A5A3A3" : "#D8D7D7")};
  color: ${(props) => (props.active ? "white" : "black")};
  border-radius: 25px;
  height: 100%;
  width: 60%;
  font-size: 1vw;
  margin-left: 3px;
  border: none;
`;

export const closeButton = styled.button`
  border-radius: 25px;
  font-size: 1vw;
  background: #6aa7e0;
  width: 70px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const addButton = styled.button`
  width: 3%;
  height: 5%;
  border-radius: 25px;
  background-color: #0080ff;
  color: white;
  font-size: 2.5vh;
  margin-left: 8%;
`;

export const saveButton = styled.button`
  border-radius: 25px;
  font-size: 1vw;
  background-color: #90ee90;
  margin-right: 20px;
  width: 70px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const _fieldWrapper = css`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

export const fieldWrapper = styled.div<{ error: boolean }>`
  ${_fieldWrapper}
  background-color: #D3D3D3;
  flex-direction: column;
  border: ${(props) => (props.error ? "0.7px solid red" : "none")};
`;

export const checkBoxWrapper = styled.div<{ error: boolean }>`
  ${_fieldWrapper}
  flex-direction: row;
  border: ${(props) => (props.error ? "0.7px solid red" : "none")};
`;

const _label = css`
  margin: 0;
  font-size: 1.5vh;
  text-align: right;
  direction: rtl;
`;

export const label = styled.p`
  ${_label}
  height:25%;
  width: 95%;
  padding: 0 2% 0 0;
`;

export const CheckboxLabel = styled.p`
  ${_label}
  height:30%;
  width: 75%;
  text-align: center;
`;

export const field = css`
  margin: 0 0 2% 0;
  padding: 0;
  border: none;
  direction: rtl;
  border: none;
  background: none;
`;
export const input = styled.input`
  ${field}
  height: 90%;
  width: 90%;
`;

export const select = styled.select`
  ${field}
  height: 40%;
  width: 90%;
`;

export const textarea = styled.textarea`
  ${field}
  margin: 0 0 1% 0;
  height: 60%;
  width: 90%;
`;

export const checkbox = styled.input`
  ${field}
  height: 30%;
  width: 20%;
  color: #d3d3d3;
`;

export const general = {
  fieldWrapper,
  label,
  input,
  select,
  textarea,
  checkBoxWrapper,
  chckboxLabel: CheckboxLabel,
  checkbox,
};

export const TableInfoMassage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  font-family: Arial;
  color: #b1b1af;
  font-size: 1.5vw;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
`;
