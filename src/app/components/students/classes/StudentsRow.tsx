import * as Styles from "./Students.styles";
import { SlTrash } from "react-icons/sl";
import { IoDocuments } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { isActiveNo } from "@/services/studentService";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  class: string;
  status: string;
  isActive :  string;
}

const studentsRow = ({ studentRow, setStudentsList ,setSearchStudentList,studentsList}:
   {studentRow:Student ,setStudentsList:any,setSearchStudentList:any
    ,studentsList:Student[]}) => {

    const delStudent = (currentStudent:Student) => {
      isActiveNo(currentStudent.id,{isActive : "no"});
      let newData =studentsList.filter((students) => students.id !=currentStudent.id )
      setStudentsList(newData);
      setSearchStudentList(newData);
    };
  return (
    <Styles.StudentWrapper>
        <Styles.StudentField>
          <Styles.deleteButton  onClick={() =>delStudent(studentRow)}> <SlTrash/> </Styles.deleteButton>
          <Styles.optionButton >  <MdOutlineFeedback/>  </Styles.optionButton>
          <Styles.optionButton> <IoDocuments/></Styles.optionButton>
        </Styles.StudentField>
        <Styles.openInfo onClick={() => console.log(studentRow.id)}>
          <Styles.StudentField>{studentRow.email}</Styles.StudentField>
          <Styles.StudentField>{studentRow.phone}</Styles.StudentField>
          <Styles.StudentField>{studentRow.lastName}</Styles.StudentField>
          <Styles.StudentField>{studentRow.firstName} </Styles.StudentField>
        </Styles.openInfo>
    </Styles.StudentWrapper>
  );
};

export default studentsRow;