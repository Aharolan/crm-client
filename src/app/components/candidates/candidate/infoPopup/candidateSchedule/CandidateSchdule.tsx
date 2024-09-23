'use client';
import React, { useEffect, useState } from 'react';
import * as Styles from './candidateSchdule.styles';
import { CandidateScheduleData } from '../candidateTypes';
import { general } from '../infoPopup.styles';
import { endSortDayStatus } from '../../candidateEnums';
import { getSortingDaysDates } from '@/services/sortingDayService';

	
const CandidateSchedule = (
  {data, setData}:{data: CandidateScheduleData,  setData: (key: string, value: any)=>void}
    ) => {  
      const [dates, setDates] = useState<Record<string, string>>({})

      useEffect(
        () => {getSortingDaysDates().then(x => setDates(x))}, []
      )
      const fieldProperties: {[key: string] : any}[] = [
        {field: 'date', text: 'זומן לתאריך', type: 'select', options: dates},
        {field: 'invited', text: 'וידוא הגעה:', type: 'checkbox'},
        {field: 'arrival_time', text: 'שעת הגעה', type: 'time', extraProps: {min:"09:00", max:"22:00"}},
        {field: 'symbols', text: 'סמלים (מתוך 15)', type: 'text'},
        {field: 'cubes', text: 'קוביות (מתוך 8)', type: 'text'},
        {field: 'automated_exam', text: 'מבחן אוטומטים - איטרציה ראשונה', type: 'text'},
        {field: 'interviewer_notes', text: 'הערות מראיין', type: 'textarea'},
        {field: 'status', text: 'סטטוס סיום יום מיונים', type: 'select', options: endSortDayStatus},
        {field: 'comments', text: 'הערות', type: 'textarea'},
      ]
  
  return ( 

    <Styles.container>  
        {fieldProperties.map((field) => 
          field.type === 'checkbox' ? 
          <Styles.checkboxField>
            <general.chckboxLabel> {field.text}</general.chckboxLabel> 
            <general.checkbox 
              type="checkbox"            
              onChange={(e) => setData(field.field , e.target.checked )}
              checked={data[field.field as keyof CandidateScheduleData] as boolean}              
              />
          </Styles.checkboxField>
          : 
          <Styles.field>
              <general.label> {field.text}</general.label>
              {field.type === 'select' &&
                <general.select
                  value={data[field.field as keyof CandidateScheduleData] as string}  
                  onChange={(e) => setData(field.field, e.target.value)}>
                    <option value=''></option>
                    {field.options && 
                    Object.entries(field.options).map(
                      ([key, value]) =>  <option value={key}>{`${value}`}</option>
                    )}
                </general.select>
              }
              {field.type === 'textarea' &&
                <general.textarea
                  onChange={(e) => setData(field.field , e.target.value )}
                  value={data[field.field as keyof CandidateScheduleData] as string}  
                />
              }
              {['text', 'time', 'date'].includes(field.type) &&
                <general.input
                  type={field.type} {...(field.extraProps || {})}
                  onChange={(e) => setData(field.field , e.target.value )}
                  value={data[field.field as keyof CandidateScheduleData]}  
                />
              }
          </Styles.field>
        )}    
         
    </Styles.container>

  );
};

export default CandidateSchedule;
