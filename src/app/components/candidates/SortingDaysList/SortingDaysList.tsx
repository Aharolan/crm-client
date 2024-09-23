'use client'

import React, { useState,useEffect } from 'react';
import * as Styles from './SortingDaysList.styles';
import SortingDay  from '../../candidates/sortingday/sortingday';
import { getAll, post, get } from '@/services/baseService';
import { usersNames } from '@/services/usersService';
import { delete_ } from '@/services/baseService';
import { SlTrash } from "react-icons/sl";



interface sortingtype {
  id: any,
  date: string,
  location:string,
  mentor:string, 
  quantity_participate:number
}


const SortingDaysList = () => {

      
    const initialSortDay: sortingtype = {
      id: null,
      date: "",
      location: "",
      mentor: "",
      quantity_participate:0
    };

    const [names,setnames] = useState({}) 
    const [dayOpen, setDayOpen] = useState(null);
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState<sortingtype>({ ...initialSortDay });
    const [sortingDayList,setSortingDayList] = useState<sortingtype[]>([])
    const [errorMessage, setErrorMessage] = useState('')

    const openAddSortingDay = () => {
      setPopupIsOpen(true);
    };

   

    const fetchData = async () => {
      try {
          const response = await getAll('sorting_day');
          
          const data_day = response?.data;
        if (data_day) {
          setSortingDayList(data_day);  
        } else {
          console.log('No candidate data available.');
        }
          let name = await usersNames('מנטור');
          setnames(name)
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    const ondelete =   async (e:any,id:any) => {
      e.stopPropagation();
      if(!window.confirm(`האם אתה בטוח ?`)) return
      await delete_('sorting_day', id || '');
      fetchData() 
    };

    const closeAddDay = () => {
      setPopupIsOpen(false);
      setCurrentDay({...initialSortDay})
    }

    const onSave = async (newStudent: any) => {
   
      if (Object.values(newStudent).every(field => `${field}`.trim() !== ''))
     { try {
        await post('sorting_day', newStudent);
        fetchData(); 
        setPopupIsOpen(false) 

      }catch(error){
        console.error('Error saving student:', error);
      }  }
      else {
        setErrorMessage('כל השדות חובה!')
      }

    };

    useEffect(
      () => {fetchData();}, []
    )

    return (
      <div>
      {popupIsOpen && (
        <Styles.PopupWindowShadow>
          <Styles.PopupContainer>
            <Styles.HeadrRow>
             <Styles.label> הוסף יום מיונים</Styles.label>
            <Styles.CancelButton onClick={closeAddDay}>x</Styles.CancelButton>
            </Styles.HeadrRow>
          
            <Styles.inputcontaner>
              תאריך
              <Styles.input 
                type="date"
                onChange={(e) => setCurrentDay({ ...currentDay, date: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner>
              מקום
              <Styles.InputSelect 
                onChange={(e) => setCurrentDay({ ...currentDay, location: e.target.value })}
                >
                <option value=""> </option>
                <option value="ירושלים">ירושלים</option>
                <option value="בני ברק">בני ברק</option>
                </Styles.InputSelect>
                
            </Styles.inputcontaner>
            <Styles.inputcontaner>
              מנטור
              <Styles.InputSelect 
                onChange={(e) => setCurrentDay({ ...currentDay, mentor: e.target.value })}
                >
                <option value=""> </option>
                {...Object.entries(names).map(([id, name]) => <option value={`${name}`}>{`${name}`}</option>)}
              </Styles.InputSelect>
            </Styles.inputcontaner>
          
           <Styles.errorAndSave>
           {errorMessage && <Styles.error>{errorMessage}</Styles.error>}
            <Styles.SaveButton onClick={() => onSave(currentDay)}>save</Styles.SaveButton>
           </Styles.errorAndSave>

        </Styles.PopupContainer>
        </Styles.PopupWindowShadow>
          )}

        <Styles.PageWrapper>
          <Styles.FirstLine>
            <Styles.AddDayButton onClick={openAddSortingDay}>יצירת יום מיונים חדש</Styles.AddDayButton> 
            <Styles.PageHeader>ימי מיונים</Styles.PageHeader>
          </Styles.FirstLine>

              <Styles.TableHead>
                <Styles.TableHeadField>תאריך</Styles.TableHeadField>
                <Styles.TableHeadField>מקום</Styles.TableHeadField>
                <Styles.TableHeadField>כמות משתתפים</Styles.TableHeadField>
                <Styles.TableHeadField>מנטור</Styles.TableHeadField>
                <Styles.TableHeadField></Styles.TableHeadField>
              </Styles.TableHead>             

              
              <Styles.Table>
                {sortingDayList?.map((day, index) => (
                  <Styles.UserRow key={index} onClick={() => setDayOpen(day.id)}>
                    <Styles.UserField>{day.date}</Styles.UserField>
                    <Styles.UserField>{day.location}</Styles.UserField>
                    <Styles.UserField>{day.quantity_participate}</Styles.UserField>
                    <Styles.UserField>{day.mentor}</Styles.UserField>
                    <Styles.UserField  onClick={(e) => ondelete (e,day.id)}>
                      <Styles.Deleteuser ><SlTrash/></Styles.Deleteuser>
                    </Styles.UserField>
                  </Styles.UserRow>
                )
                )}
                </Styles.Table>
        </Styles.PageWrapper>
      {dayOpen && <SortingDay id={dayOpen} onClose_={()=> {setDayOpen(null), fetchData()}}/>}

      </div>
    );
};

export default SortingDaysList;
