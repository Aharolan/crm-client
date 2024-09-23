import styled from "@emotion/styled";

export const container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 2vw;
  padding: 1vw;
  margin-bottom: 2vw;
`;

export const TableCaption = styled.p`
  font-size: 1.8vw;
  font-weight: bold;
  margin-right: 3%;
  border-bottom: 0.2vw solid #000;
  font-family: Arial;
`;

export const AddClassButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 14%;
  height: 100%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  min-width: 20px;
  margin-right: 68.5%;
`;

export const Table = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: auto;
  padding: 15px;
`;

export const ClassWrapper = styled.div`
  display: flex;
  width: 95%;
  align-self: center;
  justify-content: space-between;
  height: 3vw;
  background-color: #f0f0f0;
  margin: 0.5vw 0 0.5vw 0;
  &:hover {
    background-color: hsla(180, 100%, 50%, 0.9);
  }
  color: rgb(57, 52, 52);
  text-align: center;
  border-radius: 12px;
`;

export const openInfo = styled.div`
  cursor: pointer;
  display: flex;
  width: 85%;
  border-radius: 12px;
`;

export const deleteButton = styled.button`
  background-color: red;
  border-radius: 15px;
  border-width: 0;
  color: white;
  height: 2vw;
  width: 2vw;
`;

export const ClassField = styled.label<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2vw;
  height: 100%;
  font-family: Arial, sans-serif;
  overflow: hidden;
  color: ${(props) => (props.isActive ? "black" : "gray")};
`;

export const ClassHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 1vw;
`;

export const changeViewButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 14%;
  height: 100%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  min-width: 20px;
  margin-right: 44.5%;
`;
