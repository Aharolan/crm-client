import React from 'react';
import * as styles from './inputmodal.styles';

interface ModalProps {
  onClose: () => void;
  list:string[];
}

const InputModal: React.FC<ModalProps> = ({onClose, list }) => {
  return(
    <styles.ModalWrapper>
      <styles.ModalContent>
        <styles.CloseButton onClick={onClose}>X</styles.CloseButton>
        <ul>
            {list.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </styles.ModalContent>
    </styles.ModalWrapper>
  );
};

export default InputModal;
