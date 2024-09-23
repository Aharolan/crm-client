import styled from "styled-components";
import {
  TbSquareRoundedArrowRight,
  TbSquareRoundedArrowLeft,
} from "react-icons/tb";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const PaginationRightButton = styled(TbSquareRoundedArrowRight)<{
  disabled?: boolean;
}>`
  color: ${(props) => (props.disabled ? "#ccc" : "black")};
  border-radius: 4px;
  text-align: center;
  margin: 0 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;
  width: 3vw;
  height: 1.5vw;
  font-size: 1vw;

  &:hover {
    color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

export const PaginationLeftButton = styled(TbSquareRoundedArrowLeft)<{
  disabled?: boolean;
}>`
  color: ${(props) => (props.disabled ? "#ccc" : "black")};
  border-radius: 4px;
  text-align: center;
  margin: 0 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;
  width: 3vw;
  height: 1.5vw;
  font-size: 1vw;

  &:hover {
    color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

export const PaginationText = styled.span`
  margin: 0 10px;
  font-size: 16px;
  font-family: Arial;
  font-weight: 100;
`;
