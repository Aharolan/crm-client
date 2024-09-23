import styled from '@emotion/styled';

export const div = styled.div`
  width:100%;
  height:100%;
  display: flex;   
  flex-direction:column;  
  justify-content: center; 
  align-items: center;
  color:red;  
  font-size:1.7vw;     
`;
export const button = styled.button`
  
  width:10%;
  height:6%;
  border:none;
  border-radius:12px;
  &:hover{ 
    background-color:rgba(0, 0, 0, 0.4);
  }
`;

