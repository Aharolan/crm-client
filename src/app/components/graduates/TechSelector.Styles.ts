import styled from "styled-components";
import { IoIosCloseCircleOutline, IoMdAddCircle } from "react-icons/io";

export const CheckboxListContainer = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${(props) => (props.width ? props.width : "205px")};
  height: ${(props) => (props.height ? props.height : "250px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25); */
  border-radius: 5px;
`;

export const CheckboxListHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const CheckboxListBody = styled.div`
  width: 204px;
  height: 205px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  align-self: center;
  padding-left: 5px;
  margin: 5px 0px 5px 0px;
  box-shadow: 0px 2.5px 5px 2.5px rgba(0, 1, 0, 0.1);
`;

export const CheckboxListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 147px;
  overflow-y: visible;
  overflow-x: hidden;
  margin: 5px 9px 2px 5px;
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
  width: 173px;
  height: 27px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fff;
  padding: 2px 5px;
  /* margin-bottom: 5px; */
  border: none;
  margin: 0.2em;
`;

export const Label = styled.h1`
  font-size: 0.9vw;
  font-weight: normal;
  font-family: Arial;
  margin-right: 8%;
`;

export const Checkbox = styled.input`
  height: 60%;
  width: 10%;
  background-color: #6ab5fa;
`;

export const AddInputField = styled.input`
  width: 120px;
  background-color: white;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 1vw;
  padding: 2px 15px;
  margin: 0.2em;
  text-align: right;
`;

export const AddNewItemContainer = styled.div`
  width: 182px;
  height: 32px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 10px 3px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 1, 0, 0.1);
`;

export const AddButton = styled(IoMdAddCircle)`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  color: #6ab5fa;
  margin-left: 2.5%;
  cursor: pointer;
`;

export const HeaderLabel = styled.h1`
  font-size: 1.2vw;
  font-family: Arial;
  font-weight: bold;
  text-decoration: underline;
  /* margin: 6% 10% 8% 50%; */
`;

export const InfoMassage = styled.div`
  font-size: 0.7vw;
  font-family: Arial;
  color: red;
  margin-top: -6%;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
  color: red;
  margin-top: 8px;
  font-size: 1.5vw;
  cursor: pointer;
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
`;

export const EmptyMassage = styled.h1`
  font-size: 0.9vw;
  font-weight: bold;
  font-family: Arial;
  color: #d0312d;
`;

export const filterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size: 1.1vw;
  width: 90%;
  height: 11%;
  text-align: right;
  padding-bottom: 19px;
`;

export const inputSelect = styled.select`
  width: 60%;
  height: 2vw;
  direction: rtl;
  font-size: 1.2vw;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  background-color: white;
  border-radius: 8px;
  border: 0;
`;

export const SubmitButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 35%;
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
  margin: 9px 0px 9px 0px;
  padding: 0.2vw;
`;
