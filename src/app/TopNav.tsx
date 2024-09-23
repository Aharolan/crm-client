"use client";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { LinkButton } from "./components/sideBar/SideBar";

const NavContainer = styled.nav`
  background: #b5b5b5;
  height: 8.6%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: justify;
  align-items: center;
  flex-direction: row-reverse;
`;

const User = styled.div`
  height: 100%;
  line-height: 100px;
  width: 15%;
  font-weight: 520;
  font-family: Arial;
  font-size: 1.3vw;
  margin-left: 7vw;
  margin-bottom: 1vw;
`;

const NavTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 50%;
`;

const NavTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  height: 100%;
  width: 85%;
  font-weight: bold;
  font-family: Arial;
  font-size: 1.2vw;
  /* width: 106px;
  height: 28px; */
  flex-shrink: 0;
  border: 10px solid #f5f5f5;
  background: rgba(217, 217, 217, 0);
  color: white;
`;

const TopNav: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
  // let firstName = sessionStorage.getItem("user_first_name") || "";
  // let lastName = sessionStorage.getItem("user_last_name") || "";
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedFirstName = sessionStorage.getItem("user_first_name") || "";
            const storedLastName = sessionStorage.getItem("user_last_name") || "";
            setFirstName(storedFirstName);
            setLastName(storedLastName);
        }
    }, []);

  return (
    <NavContainer>
      <NavTitleContainer>
        <NavTitle>
          <LinkButton
            isMenu={true}
            isPressed={true}
            link="/"
            name="ניהול תלמידים"
            color="white"
            fontSize="1.6vw"
          />
        </NavTitle>
      </NavTitleContainer>
      <User>{firstName + " " + lastName}</User>
    </NavContainer>
  );
};

export default TopNav;
