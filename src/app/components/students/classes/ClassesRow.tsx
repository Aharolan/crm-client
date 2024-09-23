import React, {  useState } from 'react';
import * as Styles from "./classes.styles";
import { delete_ } from '@/services/baseService';
import { SlTrash } from "react-icons/sl";
import { useRouter } from "next/navigation";

export interface Class {
  status: string;
  id?: string| any;
  className: string;
  campus: string;
  amountOfStudents: number;
  StartDate: string;
  EndDate: string; 
}
const ClassRow = ({ classesData, status}:
   {classesData:Class, status:string}) => {

  const [showModal, setShowModal] = useState(false);  
  
  const router = useRouter();

  const onDelete =   async () => {
    if(window.confirm(`האם את/ה בטוח/ה שברצונך למחוק את ${classesData.className}`))
    await delete_('class', classesData.id || '');
  };
  return (
    <Styles.ClassWrapper>
        <Styles.ClassField isActive={true}>
          <Styles.deleteButton  onClick={onDelete}><SlTrash/></Styles.deleteButton>
        </Styles.ClassField>
        <Styles.openInfo onClick={() => setShowModal(true)}>
          <Styles.ClassField isActive={status == "active"}>{classesData.EndDate}
          </Styles.ClassField>
          <Styles.ClassField isActive={status == "active"}>{classesData.StartDate}
          </Styles.ClassField>
          <Styles.ClassField isActive={status == "active"}>{classesData.amountOfStudents}
          </Styles.ClassField>
          <Styles.ClassField isActive={status == "active"}>{classesData.campus}
          </Styles.ClassField>
          <Styles.ClassField isActive={status == "active"}>{classesData.className}
          </Styles.ClassField>
        </Styles.openInfo>
      {classesData.id && showModal && (        
        router.push(`/students/classes/${classesData.id}`)
        )}      
    </Styles.ClassWrapper>
  );
};

export default ClassRow;
