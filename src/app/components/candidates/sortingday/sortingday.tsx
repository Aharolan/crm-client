'use client';

import React, { useEffect, useState } from "react";
import * as Styles from "./sortingday.styles";
import { get } from "@/services/baseService";
import { updateSortingDay } from "@/services/sortingDayService";
import { usersNames } from '@/services/usersService';


const statusOption: Record<string, string> = {
  התקבל :'#BEDEAA',
  נדחה:'#F39595',
  מחכה_להחלטה :'#FFA07A',
  לקבוע_יום_נוסף : '#99B3E7'
}

export interface Candidate {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
}

export interface DayData extends Record<string,string|Array<any>> {
  id: any,
  date: string,
  location:string,
  mentor:string, 
  notes:string,
  candidates: Candidate[]
}

const SortingDay = ({id, onClose_}: {id: string, onClose_: () => void}) => {

  const [dayData, setDayData] = useState<DayData>({} as DayData);
  const [names,setnames] = useState({}) 

   const onChange = (key: string, value: string) => {
      let temp = {...dayData}
      temp[key as keyof DayData] = value;
      setDayData(temp)
   }

  const fetch = async () => {
    let x = await get('sorting_day', id)
    setDayData(x)
    let name = await usersNames('מנטור');
    setnames(name)
    
  }

  useEffect(
    () => {fetch()}, []
  )

  const save = async () => {
      await updateSortingDay(dayData)
      fetch()
   }

  const renderCandidates = () => {
    return (dayData.candidates)?.map((candidate) => (
      <Styles.CandidateWrapper key={candidate.email} color={statusOption[candidate.status]}>
        <Styles.CandidateField>{candidate.status}</Styles.CandidateField>
        <Styles.CandidateField>{candidate.phone}</Styles.CandidateField>
        <Styles.CandidateField>{candidate.email}</Styles.CandidateField>
        <Styles.CandidateField>{candidate.last_name}</Styles.CandidateField>
        <Styles.CandidateField>{candidate.first_name}</Styles.CandidateField>
    </Styles.CandidateWrapper>
    ));
  };


  return (
    <Styles.container>
      <Styles.Header><u> :פרטי יום מיונים </u></Styles.Header>
      <Styles.infoRowup>
      <Styles.Th>תאריך</Styles.Th>
      <Styles.Th>מקום</Styles.Th>  
      <Styles.Th>מנטור</Styles.Th>
      </Styles.infoRowup>
      <Styles.infoRow>
        <Styles.rowField
          type="date"
          value={dayData.date} 
          onChange={(e) => onChange('date', e.target.value)}/>
        <Styles.rowFieldselect 
          value={dayData.location} 
          onChange={(e) => onChange('location', e.target.value)}>
              
          <option value=""></option>
         <option value="ירושלים">ירושלים</option>
          <option value="בני ברק">בני ברק</option>
          </Styles.rowFieldselect>

        <Styles.rowFieldselect
          value={dayData.mentor}
          onChange={(e) => onChange("mentor", e.target.value)}
        >
        <option value=""> </option>
        {...Object.entries(names).map(([id, name]) => <option value={`${name}`}>{`${name}`}</option>)}
        </Styles.rowFieldselect>

      </Styles.infoRow>

      <Styles.TableHeaderRow>
        <Styles.tableheader>שם פרטי</Styles.tableheader>
        <Styles.tableheader>שם משפחה</Styles.tableheader>
        <Styles.tableheader>נייד</Styles.tableheader>
        <Styles.tableheader>מייל</Styles.tableheader>
        <Styles.tableheader>סטטוס</Styles.tableheader>
      
      </Styles.TableHeaderRow>
      
      <Styles.Table>{renderCandidates()}</Styles.Table>
      
      <Styles.notes>
          הערות
          <Styles.textarea
            value={dayData.notes}  
            onChange={(e) => onChange('notes', e.target.value)}  
        />
      </Styles.notes>
      <Styles.buttons>
        <Styles.CloseButton onClick={onClose_}>סגור</Styles.CloseButton>
        <Styles.Save onClick={save}>✔</Styles.Save>
      </Styles.buttons>
    </Styles.container>
     
  );
};

export default SortingDay;
