import styled from "@emotion/styled";


export const div = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width:100vw;
  height:100vh; 
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  justify-content: center; 
  align-items: center; 
`;

export const popup = styled.div`
  background-color: #ffffff;
  padding-top:2%;
  width:20%;
  height:40%;  
  align-items: center; 
  border-radius:19px; 
  display:flex;
  flex-direction:column;
`;


export const inputWrapper = styled.div`
width:80%;
height:14%;
direction: rtl;
background-color:#e4e4e4;
border-radius:14px;
margin:3% 0 0 0;
display:flex;
flex-direction:column;
`;

export const lable = styled.label`
font-size:1vw;
margin:0 2% 0 0;
`;

export const mailError = styled.label`
color: red;
`;

export const inputname = styled.input`
  background-color: #e4e4e4;
  display:flex;
  margin:0 3% 0 0;
  width:94%;
  height:39%;  
  border:none;
  &:hover{
  background-color:#d0d0d0;
}
  `;

export const buttonWrapper = styled.div`
margin: 15% 0 0 0 ;
height:10%;
width:50%;
`;

export const button = styled.button`
background-color:#6eacf2;
border:none;
border-radius:14px;
height:100%;
width:100%;
font-size:1vw;
&:hover{
  background-color:#5e9ce2;
}
`;

export const warning = styled.div`
flex-direction:column;
width:30%;
height:17%;
display:flex;
background-color:white;
position:absolute;
justify-content: center;
align-items:center;
border-radius:12px;
box-shadow:0px 0px 9px 0px rgba(0, 0, 0, 0.5);

`;

export const lableWarning = styled.label`
color:red;
font-size:1.5vw;
`;

export const buttonClose = styled.button`
color:white;
width:25%;
height:22%;
background-color:#6eacf2;
&:hover{
  background-color:#5e9ce2;
}
margin:4% 0 0 0;
border:none;
border-radius:12px;
font-size:1vw;
`;