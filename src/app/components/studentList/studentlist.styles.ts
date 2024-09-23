import styled from 'styled-components';


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;  

const Th = styled.th`
  padding: 10px;
  background-color: #8181be9f;
  text-align: center;
`;

const Td = styled.td`
  text-align: center;
`;

const Button = styled.button`
  padding: 20px;
  text-align: center;
  background-color: orange;
  border-radius: 10px;
  cursor: pointer;
  height: 80px;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 2px solid black;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

export { Table, Th, Td, Button, TableHeaderRow, ButtonContainer };
