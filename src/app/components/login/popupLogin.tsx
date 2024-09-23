'use client'
import { getAll } from '@/services/baseService';
import * as Styles from './popupLogin.stylse'
import { useEffect, useState } from 'react'
import { User } from '../users/RowUser';
import { regxes} from '@/utils/validation_utils';


interface inputUser{
    email:string;    
    password:string;         
}

const PopLogin =({onClose} : {onClose: () => void})=>{  
    const [IsValidEmail,setIsValidEmail]= useState(true)     
    const [ErrorMessage,setErrorMessage] =useState('')
    const[users,setusers] = useState<User[]>([])
    const[input,setinput] = useState<inputUser>({
        email:'',    
        password:''
    })

    const fetchData = async () => {
        const response  = await getAll('users')
        const dataUsers = response?.data;
         if (dataUsers) {            
             setusers(dataUsers); 
         } else {
             console.log('No candidate data available.');
         }         
    }
    
    useEffect(() => {
        fetchData();
    }, []);    
       
    
      
    const examination = () => {   
        let exists = false 
            
        users.forEach((user) => {            
            if (user.email === input.email && parseInt(user.active) === 1){
                if(user.password === input.password ) {
                    sessionStorage.setItem('user_role', user.role)
                    sessionStorage.setItem('user_first_name', user.first_name)
                    sessionStorage.setItem('user_last_name', user.last_name)
                    onClose();
                    return
                }
                else {
                    exists = true
                    setErrorMessage(' !! סיסמא שגויה');
                }
            }           
        })

        !exists && setErrorMessage(' !! משתמש לא רשום ')
    }  

    return(
        <Styles.div>
            <Styles.popup>
                <Styles.inputWrapper>                    
                    <Styles.lable> מייל: </Styles.lable>
                    <Styles.inputname 
                    type='text' name='email' onChange={(e) => {
                        setinput({ ...input, email: e.target.value });
                        setIsValidEmail(regxes.mail.test(e.target.value)) }}/>                   
                </Styles.inputWrapper>
                {!IsValidEmail && <Styles.mailError>הכנס מייל תקין</Styles.mailError>}
                <Styles.inputWrapper>
                    <Styles.lable> סיסמה: </Styles.lable>
                    <Styles.inputname type='password' name='password' 
                    onChange={(e) => setinput({ ...input, password: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {examination();}}}/>         
                </Styles.inputWrapper> 
                <Styles.buttonWrapper>
                    <Styles.button onClick={()=>examination()}>
                        התחבר
                    
                    </Styles.button >
                </Styles.buttonWrapper>
            </Styles.popup>
            
            {ErrorMessage !== '' &&  <Styles.warning>
                <Styles.lableWarning>
                    {ErrorMessage}                    
                </Styles.lableWarning>  
                <Styles.buttonClose onClick={()=> setErrorMessage("")}>סגור</Styles.buttonClose>             
            </Styles.warning>}
        </Styles.div>
    )
}
export default PopLogin
