import styled from "@emotion/styled";


export const container = styled.div`
  width: 100%;
  height: 100%;
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


export const AddUserButton = styled.button`
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

export const button = styled.button`
  background-color: red;
  padding: 5%;
  border-radius: 15px;
  border:none;
  color: white;
`; 

export const button_updet = styled.div`  
  cursor: pointer;  
  border:none;
  display:flex;
  width:88%;
  border-radius:12px;  
`;


export const SortButton = styled.button<{asc: boolean}>`
  border: none;
  margin-left: 2%;
  background-color: transparent;
  &:hover {
    background-image: -webkit-linear-gradient(${
      props => props.asc ? 'gray 0%, lightgray 100%': 'lightgray 0%, gray 100%'});
  }
`;

export const Table = styled.div`  
  margin: auto;
  display:flex;
  flex-direction:column;
  border-radius: 5px;
  align-items:center;
`;


export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 1%;
`;

export const UserWrapper = styled.div`  
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

export const UserField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 0.8% 0 0.8% 0;
  font-size: 1.2vw;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const UserHeadField = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: Arial;
  font-size: 1.3vw;
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
  align-items: center;
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


export const divHeder = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 90%;
  margin: 2% 0 4% 0;
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

export const error = styled.label`
  color:red;
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
  font-size:1.2vw;  
`;
