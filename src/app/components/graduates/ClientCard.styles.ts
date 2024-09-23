import styled from "@emotion/styled";

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
  overflow: scroll;
`;

export const container = styled.div`
  background-color: #f5f5f5;
  height: 70vh;
  width: 60vw;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  top: 10%;
  position: absolute;
  border: groove;
  border-radius: 17px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  background-color: #f5f5f5;
  align-self: flex-end;
  font-size: 1.2vw;
  margin-top: -3%;
  margin-bottom: 0.5%;
  white-space: nowrap;
`;

export const infoRow = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  height: 7%;
  width: 100%;
  font-size: 1.5vw;
  margin-left: 5px;
  margin-right: 5px;
`;

export const infoRowup = styled.div`
  height: 2vh;
`;

export const rowField = styled.input`
  width: 18vw;
  height: 4vh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: right;
  text-indent: 20px;

  background-color: #d3d3d3;
  border-radius: 10px;
  direction: rtl;
  border: none;
  outline-color: #dcdcdc;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const technologiesRow = styled.input`
  caret-color: transparent;

  width: 18vw;
  height: 4vh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: right;
  text-indent: 20px;

  background-color: #d3d3d3;
  border-radius: 10px;
  direction: rtl;
  border: none;
  outline-color: #dcdcdc;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.div`
  color: #ff0000;
  font-size: 10px;

  margin-top: 5px;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1%;
  margin-bottom: -2%;
  width: 100%;
`;
export const tableHeader = styled.div`
  width: 100%;
  height: 4vh;

  background-color: transparent;
  font-size: 80%;
`;

export const Table = styled.div`
  width: 100%;
  height: 50%;
  max-height: 80%;
  overflow-y: auto;
  margin: 0;
`;

export const GraduateWrapper = styled.div<{ color?: string | null }>`
  display: flex;
  justify-content: space-between;
  padding: 1px;
  background-color: ${(props) => props.color || "#d3d3d3;"};
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: auto;
`;

export const GraduateField = styled.div`
  flex: 1;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const notes = styled.div`
  background-color: #d3d3d3;
  width: 97%;
  height: 20%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  direction: rtl;
  font-size: 1vw;
  margin-top: auto;
  margin-bottom: 3%;
  margin-left: 1%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  text-align: right;
  border: none;
  resize: none;
  outline: none;
`;

export const interviewButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 14%;
  height: 5%;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.8vw;
  margin-right: 84%;
  min-width: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const buttons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3%;
  width: 100%;
  align-self: flex-start;
  margin-left: 3%;
`;

export const CloseButton = styled.button`
  background-color: #5da6c4;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1vw;
  width: 10%;
`;

export const Save = styled.button`
  background-color: #5da000;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1vw;
  width: 10%;
  margin-right: 78%;
`;

export const PopupContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  height: 20rem;

  input {
    font-size: 16px;
    height: 40px;
    margin-bottom: 15px;
    box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
    border: none;
    background-color: #d3d3d3;
    border-radius: 8px;
    margin-right: 15px;
    left: 100%;
    direction: rtl;
  }
`;

export const inputcontaner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const InputFieldOne = styled.input`
  font-size: 20.5px;
  height: 40px;
  margin-bottom: 15px;
  border: none;
  background-color: inherit;
  border-radius: 8px;
  margin-right: 15px;
  left: 100%;
`;

export const TableInfoMassage = styled.h1`
  align-self: center;
  align-items: center;
  margin-top: 5%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
`;
