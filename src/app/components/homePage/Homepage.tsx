'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Styles from "./homepage.styles"
import PopLogin from '../login/popupLogin';



const Homepage: React.FC = () => {  
  let firstName = sessionStorage.getItem( 'user_first_name' ) || '' 
  const [needLogin, setNeedLogin]= useState(firstName === '')
  const onClose = ()=>  {
    setNeedLogin(false)
  }
  return (

    <Styles.PageContainer>
      {
        needLogin ? 
        <PopLogin onClose={onClose} />
        : 
        <Styles.enterd>ברוכים הבאים!  </Styles.enterd>
      }
    </Styles.PageContainer>
  );
};

export default Homepage;
