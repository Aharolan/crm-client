import styled from '@emotion/styled';


const PageWrapper = styled.div`
  height: 100%;
  width:100%;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-content: center;
  height: 2.5vw; 
  padding: 1vw;
  margin-bottom: 2vw;
 `;

const AddDayButton = styled.button`
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


const PageHeader = styled.p`
  font-size: 1.8vw;
  font-weight: bold;  
  margin-right: 3%;
  font-family: Arial;
`;


const TableHead = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  overflow: auto;
  padding: 15px; 
`;

const TableHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-family: Arial;
  font-size: 1vw;
`

const Table = styled.div`
  margin: auto;
  display:flex;
  flex-direction:column;
  border-radius: 5px;
  align-items:center;
`;


const UserRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
`

const UserField = styled.label`
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

export const Deleteuser = styled.button`
  background-color: red;
  border-radius: 15px;
  border-width: 0;
  color: white;
  height: 2vw;
  width: 1.5vw;
 `;



export {Table,  TableHead, TableHeadField,UserRow,UserField,  AddDayButton, PageHeader, PageWrapper, FirstLine };


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
  height: 23vw;   
  width:18vw;
  min-height: 300px;
  min-width: 200px; 
  margin-right: 10vw;   
`;

export const CancelButton = styled.button`
  color:red;
  border: 1px solid red;
  width:10%;  
  font-size:1.2vw;  
  margin: 0 0 3% 0;
  border-radius :15px;
`;

export const HeadrRow = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 90%;
  margin: 2% 0 4% 0;
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


export const label = styled.label`
  font-size: 1.5vw;
  font-weight: bold;
  border-bottom: 2px solid #000;
`;

export const input = styled.input`
  width:69%;  
  font-size: 1.2vw; 
  height: 2.3vw; 
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);    
  background-color: #d3d3d3;
  border-radius: 8px;
  left: 100%;
  direction: rtl;    
`;


export const InputSelect = styled.select`

  width:70%;
  direction:rtl;
  font-size: 1.2vw; 
  height: 2.3vw; 
  box-shadow: 0 20px 40px rgba(0, 1, 0, 0.1);
  border: none;
  background-color: #d3d3d3;
  border-radius: 8px;    
`;

export const errorAndSave = styled.div`
  height: 4vw;
  width:40%;
`
export const error = styled.p`
  color: red;
  font-size: 1vw;
  margin: 0;
  padding: 0.2vw;
`


export const SaveButton = styled.button`
  background-color: #6AB5FA;
  text-align: center;
  width: 100%;
  height:2vw;
  color: white;
  border: none;
  border-radius: 50px;  
  margin-bottom:3%;
  font-size:1.6vw;  
`;





