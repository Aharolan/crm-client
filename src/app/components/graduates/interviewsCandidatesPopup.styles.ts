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
`;

export const PopupContainer = styled.div`
  width: 17%;
  height: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
  flex-shrink: 0;
  font-family: Arial;
  align-items: center;
  /* justify-content: top; */
`;

export const divHeder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 90%;
  height: 11%;
  padding-bottom: 2.5px;
`;

export const label = styled.label`
  font-size: 1.2vw;
  font-weight: bold;
  text-decoration-line: underline;
  direction: rtl;
`;

export const TableInfoMassage = styled.h1`
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const inputContainer = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size:1.1vw;
  width: 90%;
  height: 11%;
  text-align: right;  
  padding-bottom: 5px;  
`;

export const rectangle = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  overflow-y: auto;
`;

export const inputRow = styled.input`
  margin-left: 5px;
  width: 10%;
  height: 50%;
`;

export const inPopupRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  text-indent: 5px;
  flex-shrink: 0;
  direction: rtl;
  width: 90%;
  height: 15%;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  margin:0.35vw 0 0.1vw 0;
  font-size: 1vw;
`;

export const submitButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 50%;
  height: 2vw;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  min-width: 20px;
  margin: auto;
`;

export const inputSelect = styled.select`
  width:60%;
  height: 2vw;
  direction:rtl;
  font-size: 1.2vw; 
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  background-color: #d9d9d9;
  border-radius: 8px;
  border: 0;
`;
