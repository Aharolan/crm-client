'use client'

import React, { useState } from 'react';
import * as Styles from './studentlist.styles';

function StudentList() {
    const [students,setStudents] = useState([
      { name: 'Course 1', id: 1111111, address: 'Israel', phone: '2 months', mail: "a@gmail.com",Marital_Status:"single"},
      { name: 'Course 1', id: 1111111, address: 'Israel', phone: '2 months', mail: "a@gmail.com",Marital_Status:"single"},
      { name: 'Course 1', id: 1111111, address: 'Israel', phone: '2 months', mail: "a@gmail.com",Marital_Status:"single"}
    ]);

    return (
      <div>
        <Styles.ButtonContainer>
          <Styles.Button>הוספת תלמידים</Styles.Button>
        </Styles.ButtonContainer>
        <Styles.Table>
          <thead>
            <Styles.TableHeaderRow>
              {<Styles.Th>ציונים</Styles.Th>}
              <Styles.Th>קורס</Styles.Th>
              <Styles.Th>מצב משפחתי</Styles.Th>
              <Styles.Th>מייל</Styles.Th>
              <Styles.Th>נייד</Styles.Th>
              <Styles.Th>כתובת</Styles.Th>
              <Styles.Th>.ת.ז</Styles.Th>
              <Styles.Th>שם</Styles.Th>
            </Styles.TableHeaderRow>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <Styles.Td>
                  {<Styles.Button>ציונים</Styles.Button>}
                </Styles.Td>
                <Styles.Td>
                  {<Styles.Button>קורס </Styles.Button>}
                </Styles.Td>
                <Styles.Td>{student.Marital_Status}</Styles.Td>
                <Styles.Td>{student.mail}</Styles.Td>
                <Styles.Td>{student.phone}</Styles.Td>
                <Styles.Td>{student.address}</Styles.Td>
                <Styles.Td>{student.id}</Styles.Td>
                <Styles.Td>{student.name}</Styles.Td>
              </tr>
            ))}
          </tbody>
        </Styles.Table>
      </div>
    );
  };

  export default StudentList;
  
