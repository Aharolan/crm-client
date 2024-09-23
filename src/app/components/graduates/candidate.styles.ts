import styled from "@emotion/styled";

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
  height: 4%;
  padding: 1vw;
  margin-bottom: 2vw;
`;

export const TableCaption = styled.div`
  width: 29%;
  font-size: 1.8vw;
  font-weight: bold;
  margin-right: 4%;
  text-decoration: underline;
  font-family: Arial;
`;

export const AddStudentButton = styled.button`
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
`;

export const SearchButton = styled.input`
  background-color: #dfe5ea;
  width: 15%;
  height: 100%;
  direction: ltr;
  color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1vw;
  padding-right: 0.5vw;
  margin-left: 2%;
  margin-right: 60%;
  min-width: 20px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  align-items: center;
`;

export const TableHead = styled.div`
  text-align: center;
  display: flex;
  height: 2cqi;
  width: 95%;
  align-self: center;
  justify-content: space-between;
  overflow: auto;
  padding: 15px;
`;

export const CandidateWrapper = styled.div`
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

export const moreFeatureButton = styled.button`
  background-color: #6ab5fa;
  border-radius: 60px;
  border-width: 0;
  color: white;
  height: 90%;
  width: 13%;
  margin: 1.5%;
`;

export const deleteButton = styled.button`
  background-color: #6ab5fa;
  border-radius: 60px;
  border-width: 0;
  color: white;
  height: 90%;
  width: 13%;
  margin: 1.5%;
`;

export const BlueButtonField = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  height: 100%;
  width: 4%;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const CandidateField = styled.label`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2vw;
  height: 100%;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const CandidateHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 1vw;
`;

export const InfoMassage = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 1.5vw;
`;
