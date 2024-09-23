'use client'

import React, { useState, FormEvent } from 'react';
import * as styles from './classform.styles'
import InputModal from './InputModal';
import * as requests from './CrudFunctions';

interface FormData {
  className:string;
  classTeacher:string;
  startDate:string;
};

const ClassForm: React.FC = () => {
  const [className, setClassName] = useState<string>('');
  const [classTeacher, setClassTeacher] = useState<string>('');
  const [startDate, setStartDate] = useState<string >('');
  const [openCoursesModal, setOpenCoursesModal] = useState<boolean>(false);
  const [openStudentsModal, setOpenStudentsModal] = useState<boolean>(false);
  const [openCampusModal, setOpenCampusModal] = useState<boolean>(false);


  const handleOpenCoursesModal = () => {
    setOpenCoursesModal(true);
  };

  const handleOpenStudentsModal = () => {
    setOpenStudentsModal(true);
  };

  const handleOpenCampusModal = () => {
    setOpenCampusModal(true);
  };

  const handleCloseModal = () => {
    setOpenCoursesModal(false);
    setOpenStudentsModal(false);
    setOpenCampusModal(false);
  };
  

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = {
      className,
      classTeacher,
      startDate,
    };
    
    
    if(Object.values(formData).some(value => value === '')){
      console.log('missing some fields');
      
      return;
    }
    else {
      requests.addClass(formData);
      console.log(formData);
    }
  };
  
  return (
    <styles.CenteredWrapper>
      <styles.FormWrapper onSubmit={handleSubmit}>
        <styles.InputWrapper>
          <styles.Input
            type = "text"
            value = {className}
            onChange = {(e) => setClassName(e.target.value)}
          />
          <styles.Label>:שם הכיתה</styles.Label>
        </styles.InputWrapper>
        
        <styles.InputWrapper>
          <styles.Input
            type = "text"
            value = {classTeacher}
            onChange = {(e) => setClassTeacher(e.target.value)}
          />
          <styles.Label>:אב כיתה</styles.Label>
        </styles.InputWrapper>
        
        <styles.InputWrapper>
          <styles.Button type='button' onClick={handleOpenCoursesModal}>רשימת קורסים</styles.Button>
            {openCoursesModal && <InputModal onClose={handleCloseModal}
              list={['Item 1', 'Item 2', 'Item 3']} />}
          <styles.Label>:רשימת קורסים</styles.Label>
        </styles.InputWrapper>
        
        <styles.InputWrapper>
          <styles.Button type='button' onClick={handleOpenStudentsModal}>רשימת תלמידים</styles.Button>
            {openStudentsModal && <InputModal onClose={handleCloseModal}
              list={['Item 1', 'Item 2', 'Item 3']} />}
          <styles.Label>:רשימת תלמידים</styles.Label>
        </styles.InputWrapper>
        
        <styles.InputWrapper>
          <styles.Button type='button' onClick={handleOpenCampusModal}>קמפוס</styles.Button>
            {openCampusModal && <InputModal onClose={handleCloseModal}
              list={['Item 1', 'Item 2', 'Item 3']} />}
          <styles.Label>:קמפוס</styles.Label>
        </styles.InputWrapper>
        
        <styles.InputWrapper>
          <styles.Input
            type = "date"
            value = {startDate}
            onChange = {(e) => setStartDate(e.target.value)}
          />
          <styles.Label>:תאריך תחילת הכשרה</styles.Label>
        </styles.InputWrapper>
        <styles.SubmitButton type = "submit" >שמור</styles.SubmitButton>
    </styles.FormWrapper>
  </styles.CenteredWrapper>
  );
};

export default ClassForm;