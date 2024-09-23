import styled from "@emotion/styled";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95%;
  width: 100%;
`;

export const infoRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5vw;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`;

export const rowField = styled.div`
  width: 100%;
  height: 2.5vw;
  display: flex;
  justify-content: center;
  text-align: center;
  caret-color: transparent;
  background-color: #b5b5b5;
  border-radius: 15px 15px 0px 0px;
  border: none;
  outline-color: #b5b5b5;
  font-size: 1.1vw;
  align-items: center;
  font-family: Arial;
  font-weight: bold;
`;

export const InfoField = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: 3px;
  display: flex;
  justify-content: center;
  text-align: center;
  caret-color: transparent;
  background-color: #d9d9d9;
  border-radius: 0px 0px 15px 15px;
  border: none;
  outline-color: #d9d9d9;
  font-size: 1vw;
  align-items: center;
  font-family: Arial;
  font-weight: bold;
`;

export const CommentText = styled.div`
  font-family: Arial;
  font-weight: bold;
  font-size: 1vw;
  padding-right: 50px;
  padding-left: 50px;
`;

export const TableHeaderRow = styled.div<{ isStroller?: boolean }>`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 3%;
  margin-bottom: 1%;
  width: ${(props) => (props.isStroller ? "98.4%" : "99.5%")};
  margin-left: ${(props) => (props.isStroller ? "0.6%" : "0.5%")};
  margin-right: ${(props) => (props.isStroller ? "1%" : "2.5%")};
  align-items: center;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 2vh;
  background-color: transparent;
  font-size: 1vw;
  font-weight: bold;
  font-family: Arial;
`;

export const Table = styled.div`
  width: 100%;
  height: 55%;
  max-height: 80%;
`;

export const TableContent = styled.div`
  width: 100%;
  height: 90%;
  max-height: 95%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const GraduateWrapper = styled.div<{
  color?: string | null;
  isShowingInfo?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 1px;
  background-color: ${(props) => props.color || "#d3d3d3;"};
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: auto;
  font-size: 1vw;
  font-weight: bold;
  font-family: Arial;
  border: 1px solid #000;
  cursor: ${(props) => (props.isShowingInfo ? "pointer" : "default")};
`;

export const InterviewFeedbackWrapper = styled.div<{
  isErrorMassage?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px;
  background-color: #c9c7c7;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 1vw;
  width: 97.5%;
  height: 12%;
  border: none;
  outline: none;
  direction: rtl;
  padding-right: 25px;
  padding-left: 10px;
  font-family: Arial;
  font-weight: bold;
  color: ${(props) => (props.isErrorMassage ? "#870808" : "black")};
`;

export const InterviewFeedbackComment = styled.h1`
  font-size: 1vw;
  font-weight: normal;
  margin-left: auto;
  margin-right: 1%;
`;

export const InterviewFeedbackInput = styled.input`
  background-color: #c9c7c7;
  border-radius: 10px;
  width: 95%;
  height: 100%;
  border: none;
  outline: none;
  padding-right: 20px;
  padding-left: 10px;
  font-size: 1.1vw;
`;

export const GraduateField = styled.div`
  flex: 1;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const GraduateFieldSelect = styled.select<{ color?: string | null }>`
  flex: 1;
  height: 4vh;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
  width: 60%;
  direction: rtl;
  font-size: 1vw;
  background: none;
  border: none;
  outline: 0px solid transparent;
  font-weight: bold;
  text-align: center;
`;

export const interviewButton = styled.button`
  background-color: #6ab5fa;
  align-self: center;
  text-align: center;
  height: 22px;
  width: 25px;
  color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  font-size: 0.8vw;
  font-weight: bold;
  text-align: center;
  margin-left: 8px;
  vertical-align: middle;
  line-height: 22px;
  margin-top: 10px;
`;

export const TechContainer = styled.div`
  display: flex;
  align-self: end;
  margin-top: 10px;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row-reverse;
`;

export const TechHeader = styled.h3`
  font-size: 1.1vw;
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 4%;
  padding-right: 4px;
`;

export const TechName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7vw;
  height: 2vh;
  font-weight: 400;
  color: black;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: none;
  padding: 4px;
  margin: 2px;
  font-size: 1vw;
  font-family: Arial;
`;

export const AddButton = styled(IoMdAddCircle)<{ marginRight?: boolean }>`
  font-size: 1.5vw;
  color: #6ab5fa;
  margin-right: ${(props) => (props.marginRight ? "2.5%" : "0px")};
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
`;

export const PopupWindowShadow = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(105, 105, 105, 0.5);
`;

export const PopupContainer = styled.div`
  width: 20vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  align-self: center;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LauderWrapper = styled.div`
  margin-top: 50%;
`;

export const CancelIcon = styled(IoIosCloseCircleOutline)`
  color: red;
  margin-top: 8px;
  font-size: 1.5vw;
`;

export const UpdateMassage = styled.h3<{ error?: boolean; fontSize?: string }>`
  margin-top: 5%;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.3vw")};
  font-family: Arial;
  font-weight: bold;
  color: ${(props) => (props.error ? "#B1B1AF" : "black")};
`;
