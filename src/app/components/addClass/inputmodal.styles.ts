import { styled } from "styled-components"

const ModalWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: 100%; /* Position the modal below the button */
    width: 50%;
    display: absolute;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
`;


const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 12px;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;       
    
`;






export{ModalWrapper, ModalContent, CloseButton}