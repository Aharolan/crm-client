import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export const Button = styled.div<{ isPressed: boolean }>`
  display: flex;
  justify-content: space-around;
  align-self: center;
  margin-bottom: 6px;
  text-align: center;
  font-weight: bold;
  background-color: ${(props) => (props.isPressed ? "#A7A3A3" : "#c9c7c7")};
  border-radius: 1px;
  height: 3.6vw;
  width: 91%;
  margin-top: 5%;
  font-size: 1.1vw;
  border: none;
`;

export const SubButton = styled.button<{ isPressed: boolean }>`
  height: 2.5vw;
  border: none;
  display: flex;
  align-items: center;
  font-weight: normal;
  margin-bottom: 1%;
  text-align: center;
  font-weight: bold;
  background-color: ${(props) => (props.isPressed ? "#b9b5b5" : "#c9c7c7")};
  border-radius: 1px;
  width: 91%;
  margin-top: 1%;
  font-size: 1.1vw;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #d8d7d7;
  width: 15%;
  height: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const ArrowDownIcon = styled(IoIosArrowDown)`
  font-size: 1.5vw;
`;

export const ArrowBackIcon = styled(IoIosArrowBack)`
  font-size: 1.5vw;
`;

export const ArrowIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  text-align: center;
  cursor: pointer;
  margin-right: 5%;
`;

export const LinkWrapper = styled.div<{ $sub?: string, $menu? : string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  font-family: Arial;
  font-weight: bold;
  color: black;
  margin-left: ${(props) => (props.$sub || props.$menu ? "0" : "13%")};
`;

export const StyledLink = styled.div<{
  $sub?: string;
  $pressed?: string;
  $color?: string;
  $fontsize?: string;
}>`
  font-family: Arial;
  font-weight: ${(props) =>
    props.$sub && !props.$pressed ? "normal" : "bold"};
  color: ${(props) => (props.$color ? props.$color : "black")};
  font-size: ${(props) =>
    props.$color ? props.$color : props.$sub ? "1vw" : "1.2vw"};
`;
