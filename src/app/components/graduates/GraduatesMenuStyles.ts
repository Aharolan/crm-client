import styled from "@emotion/styled";

export const MenuGrid = styled.div`
  height: 70%;
  width: 90%;
  position: relative;
  left: 5%;
  display: grid;
  row-gap: 10%;
  column-gap: 5%;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: 60% 25%;
  justify-content: center;
  margin-top: 5%;
  align-content: center;
  align-items: center;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  border: none;
  border-radius: 30px;
  background-color: #cad9fe;
  font-size: 3vw;
  color: #fff;
  font-weight: bold;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MenuLongButton = styled.button`
  ${MenuButton.__emotion_styles}
  grid-area: 2 / 1 / span 1 / span 3;
`;
