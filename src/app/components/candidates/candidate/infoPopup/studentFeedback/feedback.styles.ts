import styled from "@emotion/styled";


export const container = styled.div`
  height: 90%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px; 
  padding: 5px; 
  overflow: scroll;
  ::-webkit-scrollbar {
  display: none;
}
`;

export const feedbackContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px; 
  overflow: hidden; 
`;


export const feedbackBody = styled.div`
  padding: 5px;
  background-color: #D9D9D9;
`;

export const feedback = styled.div`
  width: 95%;
  border-radius: 5px; 
  margin-bottom: 15px;
  background-color: white;
  text-align: center;
  overflow: hidden; 
`;

export const feedbackTitle = styled.div`
  margin-bottom:  5px;
  height: 30%;
  width: 100%;
  background-color: #B5B5B5;
  ;
`
