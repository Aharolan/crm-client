import styled from "@emotion/styled";


export const container = styled.div`
  background-color: #f5f5f5;
  height: 80vh; 
  width: 80vw;
  min-height: 300px; 
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding:2%;
  top: 10%;
  left:10%;
  z-index: 10;
  position: absolute;
  overflow: auto;
  border: groove;
  border-radius: 10px;
`;

export const Header = styled.div`
  background-color: #f5f5f5;
  align-self: flex-end;
  font-size: 1.5vw;
  width: 15%;
  margin-bottom: 2%;
`;

export const infoRow = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 4vh;
  width: 90%;
  font-size: 1.5vw;
`;

export const infoRowup = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 5vh;
  width: 73%;
  
`;

export const rowField = styled.input`
  width: 28%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #d3d3d3;
  border-radius: 10px;
`;

export const Th = styled.th`
  height: 40px;
  background-color: #F1F1F1;
  font-family: 'Arial', sans-serif;
  font-size: 1vw; 
`;



export const rowFieldselect = styled.select`
  width: 28%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #d3d3d3;
  border-radius: 10px;
`;

export const TableHeaderRow = styled.div`
  ${infoRow.__emotion_styles}
  margin-top: 4%;
`
export const tableheader = styled.div`
  ${rowField.__emotion_styles}
  background-color: transparent;
  border-radius: 0;
`

export const Table = styled.div`
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
  margin: 0;
`;




export const CandidateWrapper = styled.div<{color?: string | null}>`
  display: flex;
  justify-content: space-between;
  padding: 1px;
  background-color: ${props  => props.color || '#d3d3d3;'};
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 10px;
`;


export const CandidateField = styled.div`
  flex: 1;
  height:4vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;


export const notes = styled.div`
  background-color: #d3d3d3;
  width: 90%;
  height: 20%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  direction: rtl;
  font-size: 1vw;
  margin-top: auto;
  margin-bottom: 3%;
  border-radius: 10px;
`;

export const textarea = styled.textarea`
  height: 85%;
  background-color: transparent;
  text-align: right;
`;

export const buttons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3%;
  width: 15%;
  align-self: flex-start;
  margin-left: 3%;
`;

export const CloseButton = styled.button`
  background-color: #5DA6C4;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1vw;
  width: 70%;
`;


export const Save = styled.button`
  background-color: #5DA000;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2vw;
  width: 15%;
`;

export const PopupContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  height: 20rem; 

  
  input {
    font-size: 16px; 
    height: 40px; 
    margin-bottom: 15px; 
    box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
    border: none;
    background-color: #d3d3d3;
    border-radius: 8px;
    margin-right: 15px;
    left: 100%;
    direction: rtl; 
  }
`;


export const inputcontaner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;


export const InputFieldOne = styled.input`
  font-size: 20.5px; 
    height: 40px; 
    margin-bottom: 15px; 
    border: none;
    background-color: inherit;
    border-radius: 8px;
    margin-right: 15px;
    left: 100%;
`;






