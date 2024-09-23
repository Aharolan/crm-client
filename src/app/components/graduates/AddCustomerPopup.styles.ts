import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsArrowsCollapse } from "react-icons/bs";

export const PopupWindowShadow = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1;
`;

export const PopupContainer = styled.div`
  position: fixed;
  direction: rtl;
  top: 15%;
  width: 265px;
  min-height: 347px;
  border-radius: 10px;
  z-index: 1;
  padding: 12px 7px 12px 7px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Arial;
  background: #fff;
  flex-shrink: 0;
`;

export const Error = styled.div`
  font-size: 0.7vw;
  font-family: Arial;
  color: red;
  margin-top: 0.5%;
  margin-right: 35%;
`;

export const FixedUpper = styled.div`
  min-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DependedBottom = styled.div`
  min-width: 100%;
  min-height: 52%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

export const divHeder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PopupLabel = styled.label`
  font-size: 1.1vw;
  font-weight: bold;
  text-decoration-line: underline;
  direction: rtl;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
  color: red;
  font-size: 1.5vw;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 0.9vw;
  font-weight: 400;
  text-align: right;
  font-weight: 400;
  line-height: normal;
  align-self: start;
  justify-self: flex-start;
  width: 80px;
  min-width: 33%;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  margin-top: 10px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  direction: rtl;
  flex-shrink: 0;
  width: 100%;
  color: #000;
  border-radius: 5px;
  padding: 0.2em;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
`;

export const Input = styled.input<{ isValid?: boolean }>`
  width: 160px;
  font-size: 0.9vw;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.isValid ? "#D9D9D9" : "red")};
  padding: 2px 5px;
  box-sizing: border-box;
  flex-shrink: 0;
  outline: none;
  margin-right: 5px;
  &:focus {
    border-color: black;
    background-color: #f0f0f0;
  }
`;

export const TechHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 22px;
  padding: 0.2em;
  margin-right: 5px;
`;

export const TechList = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  max-height: 100px;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: visible;
  overflow-x: hidden;
  margin: 0 -5px 0 0 0;
  padding-left: 5px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #848686;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 5px;
  }
`;

export const TechField = styled.button`
  width: 100px;
  height: 100%;
  background-color: #d3d3d3;
  border-radius: 5px;
  direction: rtl;
  border: none;
  flex-shrink: 0;
  font-size: 0.9vw;
  padding: 1.5px 5px;
  margin-right: -10px;
`;

export const Choose = styled.button`
  text-align: center;
  height: 100%;
  width: 160px;
  font-size: 0.9vw;
  background-color: #d9d9d9;
  border-radius: 5px;
  direction: rtl;
  border: none;
  cursor: pointer;
  justify-self: center;
  align-self: center;
  margin-right: 5px;
`;

export const Update = styled.button`
  text-align: center;
  width: 100px;
  height: 100%;

  font-size: 0.9vw;
  font-weight: 500;
  color: #fff;
  background-color: #6ab5fa;
  border-radius: 5px;
  direction: rtl;
  border: none;
  cursor: pointer;
  justify-self: center;
  align-self: center;
  flex-shrink: 0;
  margin-right: 6px;
`;

export const CollapseIcon = styled(BsArrowsCollapse)`
  color: #6ab5fa;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
`;

export const CollapseWrapper = styled.div`
  border: none;
  cursor: pointer;
  font-weight: bold;
  vertical-align: bottom;
  line-height: 22px;
  margin-right: 102px;
  font-size: 1.25vw;
`;

export const NoteSave = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotesWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4em;
`;

export const InputField = styled.textarea`
  resize: none;
  flex-wrap: wrap;
  width: 240px;
  font-family: Arial;
  font-size: 0.9vw;
  font-weight: 400;
  background-color: #d9d9d9;
  border-radius: 5px;
  direction: rtl;
  border: none;
  box-sizing: border-box;
  padding: 0.5em;
  margin: 5px 5px 0px 0px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #848686;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 5px;
  }
  &:focus {
    border-color: black;
    background-color: #f0f0f0;
  }
`;

export const SubmitButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 40%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9vw;
  font-weight: bold;
  min-width: 20px;
  flex-shrink: 0;
  justify-self: center;
  align-self: center;
  margin-top: 0.5vw;
  padding: 0.2vw;
`;
