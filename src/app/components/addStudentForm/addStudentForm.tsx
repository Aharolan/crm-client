'use client'

import React, { useState } from 'react';
import * as styles from './addStudentForm.styles';
import axios from 'axios';


interface Student {
    name: string;
    id: string;
    address: string;
    mobile: string;
    email: string;
    familyState: string;
    class: string;
  }

const AddStudentForm: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [currentStudent, setCurrentStudent] = useState<Student>({
      name: '',
      id: '',
      address: '',
      mobile: '',
      email: '',
      familyState: '',
      class: '',
    });
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCurrentStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    };
  
    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      setCurrentStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    };
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      const missingSomeFields = Object.values(currentStudent).some(
        (value) => value === ''
      );
    
      if (missingSomeFields) {
        console.log('Empty file detected');
        return; 
      }

      try {
        await axios.post('http://localhost:8082/create', currentStudent);
        setStudents((prevStudents) => [...prevStudents, currentStudent]);
        setCurrentStudent({
          name: '',
          id: '',
          address: '',
          mobile: '',
          email: '',
          familyState: '',
          class: '',
        });
        console.log('A new student has been successfully entered')
      } catch (error) {
        console.error(error);
      }
    };

    const handlePrint = () => {
      students.forEach((student) => {
        console.log('Name:', student.name);
        console.log('ID:', student.id);
        console.log('Address:', student.address);
        console.log('Mobile:', student.mobile);
        console.log('Email:', student.email);
        console.log('Family State:', student.familyState);
        console.log('Class:', student.class);
        console.log('---');
      });
    };
  
    return (
      <styles.StyledDiv >
          <styles.Form >           
            <styles.Label>
              <styles.Input type="text" name="name" value={currentStudent.name} onChange={handleInputChange} />
              :שם התלמיד
            </styles.Label>
            <styles.Label>
              <styles.Input type="text" name="id" value={currentStudent.id} onChange={handleInputChange} />
              :ת.ז
            </styles.Label>            
            <styles.Label>
              <styles.Input type="text" name="address" value={currentStudent.address} onChange={handleInputChange} />
              :כתובת
            </styles.Label>
            <styles.Label>
              <styles.Input type="text" name="mobile" value={currentStudent.mobile} onChange={handleInputChange} />
              :נייד
            </styles.Label>
            <styles.Label>
              <styles.Input type="text" name="email" value={currentStudent.email} onChange={handleInputChange} />
              :מייל
            </styles.Label>
            <styles.Label>
              <styles.Select name="familyState" value={currentStudent.familyState} onChange={handleDropdownChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </styles.Select>
              :מצב משפחתי
            </styles.Label>         
            <styles.Label>
              <styles.Select name="class" value={currentStudent.class} onChange={handleDropdownChange}>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
              </styles.Select>
              :כיתה
            </styles.Label> 
            <styles.Label>
              <styles.Button type="button">רשימת קורסים:</styles.Button> 
            :רשימת קורסים
            </styles.Label>
            <styles.Label>
                <styles.Button type="button">גליון ציונים:</styles.Button>
              :גליון ציונים
            </styles.Label>
          </styles.Form>
        
        <styles.SubmitButton type="button" onClick={handleSubmit}>שמור תלמיד:</styles.SubmitButton>
      </styles.StyledDiv >
    ); 
  };
  
  export default AddStudentForm;
  