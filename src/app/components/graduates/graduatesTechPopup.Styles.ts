import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const PopupWindowShadow = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(105, 105, 105, 0.5);
`;

export const PopupContainer = styled.div`
  width: 20vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  align-self: center;
  margin-right: auto;
  margin-left: 5%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LauderWrapper = styled.div`
  margin-top: 50%;
`;

export const CancelIcon = styled(IoIosCloseCircleOutline)`
  color: red;
  margin-top: 8px;
  font-size: 1.5vw;
`;

export const UpdateMassage = styled.h3`
  margin-top: 5%;
`;