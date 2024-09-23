import styled from "@emotion/styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ClipLoader } from "react-spinners";

export const Button = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  height: 80%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.8vw;
  font-weight: bold;
  text-align: center;
  margin-left: 5px;
`;

export const circle = styled.circle`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #6ab5fa;
  margin-left: 8px;
  align-items: start;
  cursor: pointer;
`;

export const TinyButton = styled.button`
  background-color: #6ab5fa;
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  font-size: 0.8vw;
  font-weight: bold;
  text-align: center;
  margin-left: 8px;
  vertical-align: middle;
  line-height: 22px;
  flex-shrink: 0;
  line-height: 22px;

  & > svg {
    fill: white;
  }
`;

export const AddButton = styled.button`
  width: 10%;
  height: 98%;
  border-radius: 50px;
  background: #6ab5fa;
  font-weight: 600;
  font-size: 1vw;
  color: #fff;
  border: none;
  margin-left: 1vw;
  cursor: pointer;
`;

export const PopupWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  button {
    margin-top: 8px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const PopupWindowShadow = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const PopupContainer = styled.div`
  width: 17%;
  min-height: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  font-family: Arial;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TableInfoMassage = styled.h1`
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const divHeder = styled.div`
  display: flex;
  text-decoration: underline;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 90%;
  height: 11%;
  font-weight: bold;
  padding-bottom: 2.5px;
  margin-top: 10px;
`;

export const InputsContainer = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-between;
  min-height: 50%;
  max-height: 145px;
  border-radius: 10px;
  background: #fff;
  flex-shrink: 0;
  font-family: Arial;
  font-weight: bold;
  overflow-y: auto;
  align-items: center;
  margin-top: ${(props) => (props.margin == "no" ? "0px" : "10px")};
`;

export const ChooseBox = styled.div<{ margin?: string; button?: string }>`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-between;
  min-height: 50%;
  max-height: 145px;
  border-radius: 10px;
  background: #fff;
  flex-shrink: 0;
  font-family: Arial;
  font-weight: bold;
  overflow: auto;
  align-items: center;
  margin-top: ${(props) => props.margin == "no" ? "0px" : "10px"};
  margin-bottom: ${(props) => (props.margin == "no" ? "0px" : "10px")};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #848686;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 10px;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  direction: rtl;
  width: 90%;
  height: 15%;
  color: #000;
  border-radius: 5px;
  margin: 0 0 0.2vw 0;
`;
export const Label = styled.label<{ fontWeight?: string }>`
  font-size: 1vw;
  justify-self: start;
  text-align: right;
  font-weight: ${(props) => (props.fontWeight == "bold" ? "bold" : 400)};
  line-height: normal;
  direction: rtl;
  align-self: flex-end;
  min-width: 10%;
  padding: 5px;
`;

export const inputSelect = styled.select`
  width: 63%;
  max-height: 2%;
  height: 2vw;
  direction: rtl;
  font-size: 0.9vw;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  background-color: #d3d3d3;
  border-radius: 8px;
  border: 0;
`;

export const optionMenu = styled.option<{ align?: string }>`
  font-size: small;
  text-align: ${(props) => (props.align == "center" ? "center" : "end")};
`;

export const CloseCircle = styled(IoIosCloseCircleOutline)`
  size: 1.5vw;
  color: red;
  cursor: pointer;
`;

export const Loader = styled(ClipLoader)`
  color: #0b2d94;
  size: 50;
`;


export const Input = styled.input<{ isValid?: boolean }>`
  width: 58%;
  font-size: 0.9vw;
  height: 10%;
  text-align: center;
  font-weight: 100;
  background-color: #d3d3d3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.isValid ? "#D9D9D9" : "red")};
  padding: 5px;
  &:focus {
    border-color: black;
    background-color: #f0f0f0;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 110px;
  width: 90%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  overflow-y: auto;
`;

export const TechName = styled.div`
  width: 55%;
  height: 100%;
  font-weight: 400;
  color: white;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: none;
  padding: 4px;
  margin: 2px;
`;

export const DemoButton = styled.div`
  width: 58%;
  font-size: 0.9vw;
  height: 10%;
  text-align: center;
  font-weight: 100;
  background-color: #d3d3d3;
  border-radius: 5px;
  direction: rtl;
  border: none;
  padding: 5px;
`;

export const OptionsButton = styled.button`
  font-weight: 400;
  color: white;
  background-color: #6ab5fa;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  width: 64%;
  height: 10%;
`;

export const SubmitButton = styled.button`
  width: 50%;
  height: 80%;
  font-weight: 400;
  color: white;
  background-color: #6ab5fa;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 8px;
`;