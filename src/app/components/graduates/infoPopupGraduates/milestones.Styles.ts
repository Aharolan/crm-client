import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95%;
  width: 100%;
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

export const rowField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  caret-color: transparent;
  background-color: #d3d3d3;
  border-radius: 10px;
  border: none;
  outline-color: #d3d3d3;
  font-size: 1.1vw;
  font-family: Arial;
  align-items: center;
  font-weight: bold;
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
  font-size: 1vw;
  font-weight: bold;
  font-family: Arial;
  border: 1px solid #000;
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

export const AddMilestone = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const interviewButton = styled.button`
  background-color: #6ab5fa;
  align-self: center;
  text-align: center;
  width: 180px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.8vw;
  font-weight: bold;
  text-align: center;
  margin-left: 8px;
  vertical-align: middle;
  line-height: 27px;
  margin-top: 10px;
`;

export const TableEmptyInfoMassage = styled.h1`
  align-self: center;
  font-family: Arial;
  font-size: 1.1vw;
  margin-top: 5vw;
  font-weight: bold;
  color: #B1B1AF;
`;

export const EmptyDateInfo = styled.h1`
  font-family: Arial;
  font-size: 1vw;
  font-weight: bold;
  color: #B1B1AF;
  margin-left: 15px;
  margin-right: 15px;
`;
