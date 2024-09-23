import styled from "styled-components";
import { IoIosCloseCircleOutline, IoMdAddCircle } from "react-icons/io";

export const CheckboxListContainer = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${(props) => (props.width ? props.width : "20vw")};
  height: ${(props) => (props.height ? props.height : "25vw")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5%;
  align-self: center;
  margin: auto;
`;

export const CheckboxListBody = styled.div`
  width: 85%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 5%;
  align-self: center;
  padding-top: 5%;
  overflow: auto;
  border: 6px solid #d9d9d9;

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

export const CheckboxListItem = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  min-height: 35px;
  margin: 1%;
`;

export const AddInputField = styled.input`
  width: 85%;
  height: 94%;
  background-color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1vw;
  padding: 0 15px;
  text-align: right;
  direction: rtl;
`;

export const AddNewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 10%;
  min-height: 45px;
  margin-top: 1%;
  margin-bottom: 7%;
  background-color: white;
  border-radius: 10px;
  align-self: center;
`;

export const Checkbox = styled.input`
  height: 50%;
  width: 10%;
  min-width: 31px;
  color: #6ab5fa;
`;

export const ConfirmButton = styled.button`
  height: 8%;
  width: 40%;
  border-radius: 25px;
  border: none;
  text-align: center;
  background-color: #6ab5fa;
  font-size: 0.9vw;
  font-weight: bold;
  color: white;
  margin: 4% auto 4% auto;
  cursor: pointer;
`;

export const AddButton = styled(IoMdAddCircle)`
  font-size: 130%;
  color: #6ab5fa;
  margin-left: 2.5%;
  cursor: pointer;
`;

export const HeaderLabel = styled.h1`
  font-size: 1.2vw;
  font-family: Arial;
  font-weight: bold;
  text-decoration: underline;
  margin: 6% 10% 8% 50%;
`;

export const InfoMassage = styled.div`
  font-size: 0.7vw;
  font-family: Arial;
  color: red;
  margin-top: -6%;
`;

export const Label = styled.h1`
  font-size: 1vw;
  font-weight: normal;
  font-family: Arial;
  margin-right: 10%;
`;

export const CheckboxListHead = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
  color: red;
  margin-top: 8px;
  font-size: 1.5vw;
  cursor: pointer;
`;

export const CloseWrapper = styled.div`
  margin-top: 8px;
  cursor: pointer;
`;

export const EmptyMassage = styled.h1`
  font-size: 1vw;
  font-weight: bold;
  font-family: Arial;
  color: #d0312d;
  `;
  
export const filterContainer = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size:1.1vw;
  width: 90%;
  height: 11%;
  text-align: right;  
  padding-bottom: 19px;  
`;

export const inputSelect = styled.select`
  width:60%;
  height: 2vw;
  direction:rtl;
  font-size: 1.2vw; 
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  background-color: white;
  border-radius: 8px;
  border: 0;
`;