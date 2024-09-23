import styled from 'styled-components';

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 420px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px
`;

const Label = styled.label`
  margin-right:  10px;
  flex-basis: 150px;
  flex-shrink: 0; 
`;

const Button = styled.button`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  flex: 9;
  margin-right: 5px

`;

const SubmitButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  width: 23%;
  align-self: flex-start;
`;

const ModalWrapper = styled.div`

`;

const ModalContent = styled.div`
  width: 100px;
  hight: 100px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const ModalCloseButton = styled.button`
    padding: 3px;
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    width: 60%;
    align-self: flex-start;
`;


export {SubmitButton, Button, Label, Input,
    InputWrapper, FormWrapper, CenteredWrapper,
    ModalWrapper, ModalContent, ModalCloseButton}