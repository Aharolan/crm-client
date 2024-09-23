import styled from "@emotion/styled";

export const container = styled.div`
  width: 100%;
  height: 100%;
`;

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

export const PopupContainer = styled.div`
  background-color: white;
  border-radius: 5%;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  height: 45%;
  min-height: 300px;
  min-width: 250px;
`;

export const label = styled.label`
  font-size: 1.5vw;
  font-weight: bold;
  border-bottom: 2px solid #000;
`;

export const cancelButton = styled.button`
  color: red;
  border: 1px solid red;
  width: 10%;
  height: 70%;
  font-size: 1.2vw;
  margin: 3% 0 3% 0;
  border-radius: 100%;
  cursor: pointer;
`;

export const divHeder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size: 1.2vw;
  width: 90%;
  text-align: right;
`;

export const inputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size: 100%;
  width: 90%;
  text-align: right;
  height: 8%;
`;

export const Input = styled.input<{ error: boolean }>`
  border: ${(props) => (props.error ? "0.7px solid red" : "none")};
  width: 62%;
  font-size: 100%;
  height: 100%;
  background-color: #d3d3d3;
  border-radius: 8px;
  left: 100%;
  direction: rtl;
`;

export const InputSelect = styled.select<{ error: boolean }>`
  border: ${(props) => (props.error ? "0.7px solid red" : "none")};
  width: 63.5%;
  direction: rtl;
  font-size: 100%;
  height: 100%;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  background-color: #d3d3d3;
  border-radius: 8px;
`;

export const saveButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 45%;
  height: 11%;
  color: white;
  border: none;
  border-radius: 20px;
  margin-bottom: 3%;
  font-size: 140%;
  cursor: pointer;
`;
