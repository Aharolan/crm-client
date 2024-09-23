import styled from "@emotion/styled";


export const Massage = styled.div`
  font-weight: bold;
  font-size: 1.5vw;
  align-self: center;
  font-family: Arial;
`;

export const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-size: 2vw;
  font-weight: bold;
  margin-right: 3%;
  text-decoration: underline;
  font-family: Arial;
`;

export const AddUserButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 14%;
  height: 100%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  margin-left: 2%;
  margin-right: 70%;
  min-width: 20px;
`;

export const button = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 50%;
  height: 150%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  min-width: 20px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1%;
  width: 95%;
  align-self: center;
`;

export const UserWrapper = styled.div<{ isHistorical: boolean }>`
  display: flex;
  width: 95%;
  align-self: center;
  justify-content: space-between;
  height: 3vw;
  background-color: ${(props) => (props.isHistorical ? "#A9A9A9" : "#f0f0f0")};
  margin: 0.5vw 0 0.5vw 0;
  &:hover {
    background-color: ${(props) =>
      props.isHistorical ? "#ffcccc" : "hsla(180, 100%, 50%, 0.9)"};
  }
  color: rgb(57, 52, 52);
  text-align: center;
  border-radius: 12px;
`;

export const UserField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8% 0 0.8% 0;
  font-size: 1.5vw;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const UserHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: Arial;
  font-size: 1.3vw;
  border-bottom: 0.4vw solid #000;
  padding-bottom: 1%;
`;

export const buttonUnderTable = styled.button`
  background-color: #6ab5fa;
  padding: 1%;
  width: 30%;

  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1vw;
  margin-left: 35%;
  margin-top: 2%;
  min-width: 20px;
`;
