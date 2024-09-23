import styled from "@emotion/styled";

export const Container = styled.div`
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
  justify-content: space-between;
  height: 2vw;
  padding: 1.3vw;
  flex-grow: 2;
  margin-bottom: 1vw;
`;

export const AddButton = styled.button`
  background-color: #6ab5fa;
  text-align: center;
  width: 10%;
  height: 98%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  font-weight: bold;
  text-align: center;
  margin-left: 1%;
  min-width: 25px;
`;

enum statusColor {
  worker = "#ecffda",
  accepted = "#bfefc4",
  left = "#FCFFD4",
  historical = "#d8d7d7",
  independent = "#CAD9FE",
  didndPass = "#FFE5DA"
}

export const RowWrapper = styled.div<{ status?: string }>`
  display: flex;
  width: 95%;
  align-self: center;
  justify-content: space-between;
  height: 1.9vw;
  background-color: ${(props) =>
    props.status === "עובד"
      ? statusColor.worker
      : props.status === "התקבל"
      ? statusColor.accepted
      : props.status === "עזב"
      ? statusColor.left
      : props.status === "לא עבר"
      ? statusColor.didndPass
      : props.status === "עצמאי"
      ? statusColor.independent
      : props.status === "historical"
      ? statusColor.historical
      : "#FFFFFF"};
  margin: 0.15vw 0 0.15vw 0;
  &:hover {
    background-color: #cdd9e2;
  }
  color: rgb(57, 52, 52);
  text-align: center;
  border-radius: 12px;
`;

export const DataField = styled.div<{ clickable?: boolean }>`
  width: 80%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-family: Arial, sans-serif;
  overflow: hidden;
  cursor: ${(props) => (props.clickable ? "pointer" : undefined)};
`;

export const SortButton = styled.button<{ asc?: boolean }>`
  border: none;
  margin-left: 2%;
  background-color: transparent;
  &:hover {
    background-image: -webkit-linear-gradient(
      ${(props) =>
        props.asc ? "gray 0%, lightgray 100%" : "lightgray 0%, gray 100%"}
    );
  }
`;

export const SearchButton = styled.input`
  background-color: #dfe5ea;
  width: 10%;
  height: 98%;
  direction: rtl;
  color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1vw;
  margin-left: 1%;
  min-width: 20px;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1%;
  width: 95%;
  align-self: center;
  border-bottom: 0.2vw solid #000;
  padding-bottom: 0.5%;
`;

export const TableInfoMassage = styled.h1`
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  width: 85%;
  display: flex;
  position: fixed;
  bottom: 4%;
  justify-content: center;
`;

export const TableHeadField = styled.div<{ type?: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: Arial;
  font-size: 1.3vw;
`;

export const TableCaption = styled.p`
  font-size: 2.5vw;
  font-weight: bold;
  margin-right: 4%;
  margin-top: 2.5%;
  font-family: Arial;
  flex-grow: 2;
  text-align: end;
  text-decoration: underline;
`;

export const buttonUnderTable = styled.button`
  background-color: #6ab5fa;
  position: fixed;
  bottom: 9%;
  padding: 1%;
  height: 4px;
  width: 350px;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1vw;
  align-self: center;
  min-width: 20px;
  vertical-align: middle;
  line-height: 5%;
`;
