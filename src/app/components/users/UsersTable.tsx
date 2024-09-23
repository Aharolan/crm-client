'use client';
import React, { useState, useEffect } from 'react';
import { getAll, post ,put} from '@/services/baseService';
import RowUser , {User as User, initialUser} from './RowUser';
import * as Styles from './UsersTable.styles'
import Pagination from '@/components/pagination/Pagination';
import { validation } from '@/utils/validation_utils';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { TbArrowsSort } from 'react-icons/tb';


const UsersTable = () => { 

  const [errors, setErrors] = useState<string[]>([])
  const [currentUser, setCurrentUser] = useState<User>({ ...initialUser });
  const [userList, setUserList] = useState<User[]>([]);
  const [searchUsers, setSearchUsers] = useState<User[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [popupIsOpen, setPopupIsOpen] = useState(false);  
  const [currentPage, setCurrentPage] = useState(1);  
  const [originUserMail, setOriginalUserMail] = useState<string>('');

  const rules: Record<string, string[]> = 
        {           
          word: ['last_name','first_name'],
          number: ['phone_number'],
          mail: ['email'],
          exist: Object.keys(initialUser)
        }
    ;
  
  const fetchData = async () => {
        try {
          const response = await getAll('users');          
          const dataUsers = response?.data;             
          if (dataUsers) {
            setUserList(dataUsers);                
            setSearchUsers(dataUsers);  
            
          } else {
            console.log('No user data available.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
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

  const prtialList = (list: User[]) =>{
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
     return currentItems
  }

  const renderCandidates = () => {
    let sortedList = [...searchUsers];    
    if (sortBy) {
      sortedList = sortedList.sort((a, b) => {
        const columnA = a[sortBy as keyof User]
        const columnB = b[sortBy as keyof User];

        if (sortOrder === 'asc') {
          return columnA.localeCompare(columnB);
        } else {
          return columnB.localeCompare(columnA);
        }
      });
    }

    return prtialList(sortedList).map((user, index) => (            
      <RowUser key={index} userData={user}  fetchData ={() => fetchData()} 
       _onClick={() => {setCurrentUser(user); setOriginalUserMail(user.email) ; setPopupIsOpen(true)} }/>       
    ));
  };
  

  const saveNewUser = async () => {          
      try {
        let errors_ = validation(rules, currentUser)      
        if(errors_.length){
            setErrors(errors_)
            return
        }          
        if(currentUser.email!==originUserMail && searchUsers.some((user) => user.email === currentUser.email )){          
          alert(' המייל כבר קיים במערכת') 
          setErrors(['email'])        
          return
        }
        
        if (currentUser.id) {
          await put('users',currentUser.id,currentUser)
        } else {
          await post('users', currentUser);  
        }
    
        fetchData(); 
        closeAddUser()   
      } catch (error) {
        console.error(currentUser.id ? 'Error updete user': 'Error saving user:', error);
      }     
  };  

  const filterUsers = (search_: string) => {
    
    const filtered = userList.filter(user => {
      return Object.values(user).some(field => `${field}`.includes(search_));
    });

    setSearchUsers(filtered);
    handlePageChange(1)
  };

 

  const addUser = () => {
    setPopupIsOpen(true);
  };

  const closeAddUser = () => {
    setPopupIsOpen(false) 
    setCurrentUser({...initialUser})
    setOriginalUserMail('') 
    setErrors([]) 
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
  <Styles.container>
    <Styles.Row>
      <Styles.TableCaption>משתמשים</Styles.TableCaption>
      <Styles.SearchButton
        type="text"
        placeholder="&#128269;"
        onChange={(e) => {
          filterUsers(e.target.value);
        }}
      />
      <Styles.AddUserButton onClick={() => addUser()}>הוסף משתמש</Styles.AddUserButton>
    </Styles.Row>

      <Styles.TableHead>       
        <Styles.UserHeadField></Styles.UserHeadField> 
        <Styles.UserHeadField>סיסמא</Styles.UserHeadField>
        <Styles.UserHeadField>סטטוס</Styles.UserHeadField>
        <Styles.UserHeadField> תפקיד</Styles.UserHeadField>
        <Styles.UserHeadField>מייל</Styles.UserHeadField>
        <Styles.UserHeadField>פלאפון </Styles.UserHeadField>
        <Styles.UserHeadField>שם משפחה 
        <Styles.SortButton onClick={() => handleSort('last_name')} asc={sortOrder === 'asc'}>
          {sortBy === 'last_name' ? 
            (sortOrder === 'asc' ? <BiUpArrowAlt size={22}/> : <BiDownArrowAlt size={22}/>)
            : <TbArrowsSort size={20}/>}
            </Styles.SortButton> 
        </Styles.UserHeadField>
        <Styles.UserHeadField>שם פרטי  
        <Styles.SortButton onClick={() => handleSort('first_name')} asc={sortOrder === 'asc'}>
          {sortBy === 'first_name' ? 
            (sortOrder === 'asc' ? <BiUpArrowAlt size={22}/> : <BiDownArrowAlt size={22}/>)
            : <TbArrowsSort size={20}/>}
            </Styles.SortButton>        
        </Styles.UserHeadField> 
      </Styles.TableHead>

    <Styles.Table>
      {renderCandidates()}
    </Styles.Table>
      {popupIsOpen && (
        <Styles.PopupWindowShadow>        
          <Styles.PopupContainer>
            <Styles.divHeder>
            <Styles.label>
              {currentUser.id ?  'ערוך משתמש': 'הוסף משתמש'}
              </Styles.label>
            
            <Styles.cancelbutton onClick={closeAddUser}>x</Styles.cancelbutton> 
          </Styles.divHeder>
          <Styles.inputcontaner>

            שם פרטי
            <Styles.input error ={errors.includes('first_name')}
              type="text" value={currentUser.first_name}
              onChange={(e) => setCurrentUser({ ...currentUser, first_name: e.target.value })}
            />
            </Styles.inputcontaner>
            <Styles.inputcontaner>
            שם משפחה
            <Styles.input error ={errors.includes('last_name')}
              type="text" value={currentUser.last_name}
              onChange={(e) => setCurrentUser({ ...currentUser, last_name: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner>
            מייל
            <Styles.input error ={errors.includes('email')} name='email'
              type="text" value={currentUser.email}
              onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner>
              נייד
            <Styles.input error ={errors.includes('phone_number')}
              type="text" value={currentUser.phone_number}
              onChange={(e) => setCurrentUser({ ...currentUser, phone_number: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner> 
              סיסמא
              
            <Styles.input error ={errors.includes('password')}
              type="text" value={currentUser.password}
              onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
              />
            </Styles.inputcontaner>
            <Styles.inputcontaner>
              תפקיד 
              <Styles.InputSelect error ={errors.includes('role')}
                as="select" value={currentUser.role}
                onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                >
                <option value=""> </option>
                <option value="מנהל">מנהל</option>
                <option value="מנטור"> מנטור</option>
                <option value="מזכיר\ה">מזכיר\ה</option>
                <option value="מנהל ראשי">מנהל ראשי</option>
                
              </Styles.InputSelect>
            </Styles.inputcontaner>
            
            <Styles.inputcontaner>
              סטטוס
              <Styles.InputSelect error ={errors.includes('active')}
                as="select" value={currentUser.active}
                onChange={(e) => setCurrentUser({ ...currentUser, active: e.target.value })}
                >
                <option value=""> </option>
                <option value="1">פעיל </option>
                <option value="0">לא פעיל  </option>
                
              </Styles.InputSelect>
            </Styles.inputcontaner>
            <Styles.saveButton onClick={saveNewUser}>שמור</Styles.saveButton>
          </Styles.PopupContainer>
        </Styles.PopupWindowShadow>
      )}

    <Pagination
      totalItems={searchUsers.length}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
    />
  </Styles.container>
  );
};

export default UsersTable;
