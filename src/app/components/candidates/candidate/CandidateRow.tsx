import React, { useState } from 'react';
import * as Styles from "./candidate.styles";
import { delete_ } from '@/services/baseService';
import { SlTrash } from "react-icons/sl";
import InfoPopup from './infoPopup/InfoPopup';
import { admitionStatus } from './candidateEnums';


export interface Candidate {
  id?: string | any;
  first_name: string;
  last_name: string;
  status: string;
  email: string;
  phone: string;
  relevant_class: string;
}

const CandidateRow = ({ candidateData, fetchData, classes }:
  { candidateData: Candidate, fetchData: () => void, classes: Record<string, string> }) => {

  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    fetchData()
    setShowModal(false)
  }

  const ondelete = async () => {
    if (window.confirm(`האם את/ה בטוח/ה שברצונך למחוק את ${candidateData.first_name + ' ' + candidateData.last_name}`))
      await delete_('candidate', candidateData.id || '');
    fetchData()
  };

  return (
    <Styles.CandidateWrapper>
      <Styles.CandidateField>
        <Styles.deleteButton onClick={ondelete}><SlTrash /></Styles.deleteButton>
      </Styles.CandidateField>
      <Styles.openInfo onClick={() => setShowModal(true)}>
        <Styles.CandidateField>
          {admitionStatus[candidateData.status as keyof typeof admitionStatus]}
        </Styles.CandidateField>
        <Styles.CandidateField>{classes[candidateData.relevant_class]}</Styles.CandidateField>
        <Styles.CandidateField>{candidateData.email}</Styles.CandidateField>
        <Styles.CandidateField>{candidateData.phone}</Styles.CandidateField>
        <Styles.CandidateField>{candidateData.last_name}</Styles.CandidateField>
        <Styles.CandidateField>{candidateData.first_name} </Styles.CandidateField>
      </Styles.openInfo>
      {candidateData.id && showModal && (
        <InfoPopup onClose={onClose} id={candidateData.id}/>    )}
      
    </Styles.CandidateWrapper>
  );
};

export default CandidateRow;
