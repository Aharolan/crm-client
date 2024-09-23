'use client';
import React, { useState, useEffect } from 'react';
import { getAll, post } from '@/services/baseService';
import CandidateRow , {Candidate} from './CandidateRow';
import * as Styles from './candidate.styles'
import Pagination from "../../pagination/Pagination"; 
import { admitionStatus } from './candidateEnums';
import { validation } from '@/utils/validation_utils';
import { TbArrowsSort } from 'react-icons/tb'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'

const option_relevant_class: {[key: string]: string} = {id1: '1', id2: '2',id3: '3', id4: '4'}


const Table = () => {
  const initialStudent: Candidate = {
    first_name: "",
    last_name: "",
    status: "",
    email: "",
    phone: "",
    relevant_class:"",
  };

  const [currentStudent, setCurrentStudent] = useState<Candidate>({ ...initialStudent });
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);
  const [searchCandidList, setSearchCandidList] = useState<Candidate[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState<string[]>([])


  const rules: Record<string, string[]> = 
        {           
                word: ['last_name','first_name'],
                number: ['phone'],
                mail: ['email'],
                id: ['id'],
                exist: Object.keys(initialStudent)           
        }
    ;
  
  const fetchData = async () => {
        try {
          const response = await getAll('candidate');
          const data_candidate = response?.data;
          if (data_candidate) {
            setCandidateList(data_candidate);
            setSearchCandidList(data_candidate);
          } else {
            console.log('No candidate data available.');
          }
        } catch (error) {
          console.error('Error fetching candidate data:', error);
        }
      };
    
  useEffect(() => {
    fetchData();
  }, []); 

  const handleSort = (columnName: string) => {
    if (sortBy === columnName) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnName);
      setSortOrder('asc');
    }
  };

  const itemsPerPage = 5;

  const prtialList = (list: Candidate[]) =>{
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
     return currentItems
  }

  const renderCandidates = () => {
    let sortedList = [...searchCandidList];
    if (sortBy) {
      sortedList = sortedList.sort((a, b) => {
        const columnA = a[sortBy as keyof Candidate]||"";
        const columnB = b[sortBy as keyof Candidate]||"";

        if (sortOrder === 'asc') {
          return columnA.localeCompare(columnB);
        } else {
          return columnB.localeCompare(columnA);
        }
      });
    }

    return prtialList(sortedList).map((candidate, index) => (
      <CandidateRow key={index} candidateData={candidate} fetchData={fetchData}
      classes ={option_relevant_class}/>
    ));
  };

  const closeAddStudent = () => {
    setCurrentStudent({...initialStudent})
    setErrors([])
    setPopupIsOpen(false)   
  }
  
  const saveStudent = async () => {
     let errors_ = validation(rules, currentStudent);
      
    if(errors_.length){
        setErrors(errors_)
        return
    }

    try {
      await post('candidate', currentStudent);
      fetchData();
      closeAddStudent()   
    } catch (error) {
      console.error('Error saving student:', error);
    }
    
  };
  
  const filterCandidates = (search_: string) => {
    const filtered = candidateList.filter(candidate => {
      return Object.values(candidate).some(field => `${field}`.includes(search_));
    });
    setSearchCandidList(filtered);
    handlePageChange(1)
  };

  const addStudent = () => {
    setPopupIsOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
  <Styles.container>
    
    <Styles.Row>
      <Styles.TableCaption>מועמדים</Styles.TableCaption>
      <Styles.SearchButton 
        type="text"
        placeholder="&#128269;"
        onChange={(e) => {
          filterCandidates(e.target.value);
        }}
      />

      <Styles.AddStudentButton onClick={() => addStudent()}>הוסף מועמד</Styles.AddStudentButton>
    </Styles.Row>

      <Styles.TableHead>
        <Styles.CandidateHeadField></Styles.CandidateHeadField>
        <Styles.CandidateHeadField>סטטוס
        </Styles.CandidateHeadField>
        <Styles.CandidateHeadField>כיתה רלוונטית
        </Styles.CandidateHeadField>
        <Styles.CandidateHeadField>מייל</Styles.CandidateHeadField>
        <Styles.CandidateHeadField>פלאפון </Styles.CandidateHeadField>
        <Styles.CandidateHeadField>שם משפחה
        
          <Styles.SortButton onClick={(e) => {handleSort('last_name')}}>
          {sortBy === 'last_name' ? 
            (sortOrder === 'asc' ? <BiUpArrowAlt size={22}/> : <BiDownArrowAlt size={22}/>)
            : <TbArrowsSort size={20}/>}
            </Styles.SortButton>
        
        </Styles.CandidateHeadField>
        <Styles.CandidateHeadField>שם פרטי
       
        
          <Styles.SortButton onClick={() => handleSort('first_name')}>
          {sortBy === 'first_name' ? 
            (sortOrder === 'asc' ? <BiUpArrowAlt size={22}/> : <BiDownArrowAlt size={22}/>)
            : <TbArrowsSort size={20}/>}
          </Styles.SortButton>
          
        
        </Styles.CandidateHeadField>
      </Styles.TableHead>

    <Styles.Table>
      {renderCandidates()}
    </Styles.Table>

      {popupIsOpen && (
        <Styles.PopupWindowShadow>
          <Styles.PopupContainer >
            <Styles.divHeder>
            <Styles.label>
              הוסף מועמד
            </Styles.label>
              <Styles.cancelbutton onClick={closeAddStudent}>x</Styles.cancelbutton> 
            </Styles.divHeder>
            <Styles.inputcontaner >

            שם פרטי
            <Styles.input 
              type="text" error ={errors.includes('first_name')}
              onChange={(e) => setCurrentStudent({ ...currentStudent, first_name: e.target.value })}
            />
            </Styles.inputcontaner>
            <Styles.inputcontaner >
            שם משפחה
            <Styles.input
              type="text" error ={errors.includes('last_name')}
              onChange={(e) => 
                setCurrentStudent({ ...currentStudent, last_name: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner 
            >
              
            מייל
            <Styles.input
              type="email" error ={errors.includes('email')} name='email'
              onChange={(e) => setCurrentStudent({ ...currentStudent, email: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner >
              נייד
            <Styles.input
              type="text" error ={errors.includes('phone')}
              onChange={(e) => setCurrentStudent({ ...currentStudent, phone: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner >
              כיתה<br></br> רלוונטית
              
              <Styles.InputSelect
                error ={errors.includes('relevant_class')}
                onChange={(e) => setCurrentStudent({ ...currentStudent, relevant_class: e.target.value })}
                value={currentStudent.relevant_class}
                >
                
                <option value=""> </option>
                {...Object.entries(option_relevant_class).map(
                  ([key, value]) => <option value={key}>{value}</option>
                )}
              </Styles.InputSelect>
              
            </Styles.inputcontaner>
            <Styles.inputcontaner >
              סטטוס
              <Styles.InputSelect 
                error ={errors.includes('status')}
                onChange={(e) => setCurrentStudent({ ...currentStudent, status: e.target.value })}
                value={currentStudent.status}
                >
                <option value=""> </option>
                {...Object.entries(admitionStatus).map(
                  ([key, value]) => <option value={key}>{value}</option>
                )}
              </Styles.InputSelect>
            </Styles.inputcontaner>     
            <Styles.saveButton onClick={saveStudent}>שמור</Styles.saveButton>
          </Styles.PopupContainer>
        </Styles.PopupWindowShadow>
      )}
    <Pagination
      totalItems={searchCandidList.length}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
    />
  </Styles.container>
  
  );
};

export default Table;
