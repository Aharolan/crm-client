import styled from "@emotion/styled";

export const Size = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 600px;
  min-width: 800px;
  position: absolute;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const Warper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #f1f1f1;
  height: 100%;
  width: 100%;
`;

export const Main = styled.main`
  width: 85%;
  height: 100%;
  background-color: #f1f1f1;
  flex-shrink: 0;
`;
