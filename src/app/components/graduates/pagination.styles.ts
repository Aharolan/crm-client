import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 3vw; 
  height: 1.5vw;
  font-size: 1vw;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaginationText = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;
