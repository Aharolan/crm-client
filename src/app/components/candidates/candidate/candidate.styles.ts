import styled from "@emotion/styled";


export const container = styled.div`
  width:100%;
  height:100%;
`;


export const Row = styled.div`
  width:100%;
  display: flex;
  align-items: center;  
  flex-direction: row-reverse;
  height: 2vw; 
  padding: 1vw;
  margin-bottom: 2vw;
`;


export const TableCaption = styled.p`
  font-size: 1.8vw;
  font-weight: bold;  
  margin-right: 3%;
  border-bottom: 0.2vw solid #000;
  font-family: Arial;
`;

export const AddStudentButton = styled.button`
  background-color: #6AB5FA;
  text-align: center;
  width:14%;
  height:100%;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1vw;
  min-width:20px;  
`;

export const SearchButton = styled.input`
  background-color: #DFE5EA;
  width:10%;
  height: 98%;
  direction: rtl;
  color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1vw;
  padding-right: 0.5vw;
  margin-left:2%;
  margin-right:60%;
  min-width:20px;
`

export const SortButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    background-image: -webkit-linear-gradient(gray 0%, lightgray 100%)
  }
`;


export const Table = styled.div`
  margin: auto;
  display:flex;
  flex-direction:column;
  border-radius: 5px;
  /* align-items:center; */
`;



export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: auto;
  padding: 15px; 
`;

export const CandidateWrapper = styled.div`
  display: flex;
  width:95%;
  align-self: center;
  justify-content: space-between;
  height: 3vw;
  background-color: #fff;
  margin:0.5vw 0 0.5vw 0;
  &:hover {
  background-color: hsla(180, 100%, 50%, 0.9); 
  }  
  color: rgb(57, 52, 52);
  text-align: center;   
  border-radius:12px;
`;


export const openInfo = styled.div`
  cursor:pointer;
  display:flex;
  width:85%;
  border-radius:12px;
`


export const deleteButton = styled.button`
  background-color: red;
  border-radius: 15px;
  border-width: 0;
  color: white;
  height: 2vw;
  width: 1.5vw;
 `;

export const CandidateField = styled.label`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2vw;
  height: 100%;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const CandidateHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 1vw;
`;


export const PopupWindowShadow = styled.div`
  width:100vw;
  height:100vh; 
  z-index: 1;
  top:0;
  left:0;  
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: scroll;
`;

export const PopupContainer = styled.div`
  background-color: #f5f5f5;  
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 27.5vw;   
  width:20vw;
  min-height: 300px;
  min-width: 200px; 
  margin-right: 10vw;   
`;


export const label =styled.label`
  font-size: 1.5vw;
  font-weight: bold;
  border-bottom: 2px solid #000;
`;

export const  cancelbutton =styled.button`
  color:red;
  border: 1px solid red;
  width:10%;  
  font-size:1.2vw;  
  margin: 0 0 3% 0;
  border-radius :15px;
`;

export const divHeder = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size:1.2vw;
  width: 90%;
  text-align: right;    
`;

export const inputcontaner = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size:1.2vw;
  width: 90%;
  text-align: right;    
`;


export const input = styled.input<{error: boolean}>`
  border: ${props => props.error ? '0.7px solid red' : 'none'};
  width:69%;  
  font-size: 1.2vw; 
  height: 2vw; 
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);    
  background-color: #d3d3d3;
  border-radius: 8px;
  left: 100%;
  direction: rtl;    
`;

export const InputSelect = styled.select<{error: boolean}>`
  border: ${props => props.error ? '0.7px solid red' : 'none'};
  width:70%;
  direction:rtl;
  font-size: 1.2vw; 
  height: 2vw; 
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  background-color: #d3d3d3;
  border-radius: 8px;    
`;


export const saveButton = styled.button`
  background-color: #6AB5FA;
  text-align: center;
  width:45%;
  height:8%;
  color: white;
  border: none;
  border-radius: 50px;  
  margin-bottom:3%;
  font-size:1.6vw;  
`;