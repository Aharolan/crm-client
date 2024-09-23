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
  height: 2vw;
  padding: 1vw;
  margin-bottom: 2vw;
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

enum statusColor {
  worker = "#ecffda",
  finished = "#cad9fe",
  fired = "#ffe5da",
}

export const GraduateWrapper = styled.div<{ status?: any }>`
  display: flex;
  width: 95%;
  align-self: center;
  justify-content: space-between;
  height: 3vw;
  background-color: ${(props) =>
    props.status === "עובד"
      ? statusColor.worker
      : props.status === "סיים"
      ? statusColor.finished
      : props.status === "פוטר"
      ? statusColor.fired
      : "#FFFFFF"};
  margin: 0.5vw 0 0.5vw 0;
  &:hover {
    background-color: hsla(180, 100%, 50%, 0.9);
  }
  color: rgb(57, 52, 52);
  text-align: center;
  border-radius: 12px;
`;

export const GraduateField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8% 0 0.8% 0;
  font-size: 1.2vw;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const GraduateHeadField = styled.div<{ type?: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: Arial;
  font-size: 1.3vw;
`;

export const GraduateInfoMassage = styled.h1`
  font-weight: bold;
  font-size: 2vw;
  align-self: center;
  font-family: Arial;
`;
