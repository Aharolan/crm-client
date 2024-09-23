'use client';
import React from "react";
import * as Styles from "./UsersTable.styles";
import { SlTrash } from "react-icons/sl";
import { put } from "@/services/baseService";

export interface User {
  id?: string|any;
  first_name: string;
  last_name: string;
  active: string;
  email: string;
  phone_number: string;
  role: string;
  password:string;  
}
export const initialUser: User = {
  first_name: "",
  last_name: "",
  active: "",
  email: "",
  phone_number: "",
  role: "",
  password:"",
};

const RowUser = (
  { userData,fetchData,_onClick}: 
  {userData:User ,fetchData:()=> void,_onClick:()=>void} ) => {  
    
    const ondelete = async()=> { 
      if(!window.confirm(
        `האם אתה בטוח שברצונך למחוק את -  ${userData.first_name + ' ' + userData.last_name}`)
      )  return

      userData.active ='0'
      await put('users',userData.id,userData)      
      fetchData()
    }
 
  return (    
    <Styles.UserWrapper>    
      <Styles.UserField>
        <Styles.button  onClick={ondelete}><SlTrash/></Styles.button>
      </Styles.UserField>
      <Styles.button_updet  onClick={_onClick}>
        <Styles.UserField>{userData.password}</Styles.UserField>
        <Styles.UserField>{userData.active}</Styles.UserField>
        <Styles.UserField>{userData.role}</Styles.UserField>
        <Styles.UserField>{userData.email}</Styles.UserField>
        <Styles.UserField>{userData.phone_number}</Styles.UserField>
        <Styles.UserField>{userData.last_name}</Styles.UserField>
        <Styles.UserField>{userData.first_name}</Styles.UserField>  
      </Styles.button_updet>
  </Styles.UserWrapper>  

  );
};

export default RowUser;
