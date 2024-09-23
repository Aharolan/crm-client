import styled from "styled-components";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const PopupContainer = styled.div`
  width: 20vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  align-self: center;
  margin: auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 11;
`;

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

export const CancelButton = styled.button`
  color: red;
  margin-top: 10px;
  border: 1.5px solid red;
  height: 25px;
  width: 7%;
  font-size: 1vw;
  border-radius: 15px;
  align-self: flex-end;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  margin-top: 0.5%;
  width: 100%;
`;

export const IsLoadedWrapper = styled.div`
  margin-top: 45%;
  height: 100%;
`;

export const HeaderInfoText = styled.h1`
  font-size: 1.2vw;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const InfoErrorText = styled(HeaderInfoText)`
  font-size: 1.2vw;
  margin-top: 50%;
`;

export const InfoText = styled(HeaderInfoText)`
  font-size: 1vw;
  font-weight: normal;
`;

export const EmailText = styled(InfoText)`
  text-decoration: underline;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 10px;
  text-align: center;
  margin-top: 3%;
`;

export const PopupHead = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const MoreInfoButton = styled.button`
  height: 80%;
  width: 25%;
  border-radius: 25px;
  border: none;
  text-align: center;
  background-color: #6ab5fa;
  font-size: 0.7vw;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  z-index: 1000;
  cursor: pointer;
`;

export const CopyMassage = styled.div`
  position: fixed;
  width: 15vw;
  height: 5vh;
  left: 2px;
  background-color: #6ab5fa;
  font-family: Arial;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 80%;
  border-radius: 0 10px 10px 0;
`;

export const CopyIcon = styled(FaRegCopy)`
  margin-top: 20px;
  cursor: pointer;
  font-size: 20px;
  color: #113557;
  margin-right: 10px;
`;

export const CancelIcon = styled(IoIosCloseCircleOutline)`
  color: red;
  margin-top: 8px;
  font-size: 1.5vw;
`;
