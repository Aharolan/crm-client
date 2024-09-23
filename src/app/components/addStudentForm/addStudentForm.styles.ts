import styled from 'styled-components';

const StyledDiv = styled.div`
  
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
`;

const Form = styled.form`
  padding: 0px 0px 0px 30px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

const Label = styled.label`
  font-weight: bold;
  width: 450px;
`;

const Input = styled.input`
  padding: 5px;
  width: 300px;
  text-align: left;
`;

const Select = styled.select`
  padding: 5px;
  width: 314px;
  margin-bottom: 0px;  
`;
const Button = styled.button`
  padding: 5px;
  background-color: #FF8C00;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 314px;  
`;

const SubmitButton = styled(Button)`
  width: 100px;
  background-color: #FF8C00;
`;




export {Form, Label, Input, Select, Button, SubmitButton, StyledDiv}