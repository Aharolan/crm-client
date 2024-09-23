"use client";
import * as Styles from "./GraduatesMenuStyles";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const GraduatesMenu = () => {
  const router = useRouter();
  const [isPressed, setLastPressed] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setLastPressed(index === isPressed ? null : index);
    const module = "graduates/";
    const paths = [
      `${module}customers`,
      `${module}interviews`,
      `${module}InterviewsCandidates`,
      `${module}graduatesList`,
    ];
    router.push(`/${paths[index]}`);
  };

  return (
    <Styles.MenuGrid>
      <Styles.MenuButton onClick={() => handleClick(0)}>
        רשימת לקוחות
      </Styles.MenuButton>
      <Styles.MenuButton onClick={() => handleClick(1)}>
        ראיונות
      </Styles.MenuButton>
      <Styles.MenuButton onClick={() => handleClick(2)}>
        מועמדים לראיונות
      </Styles.MenuButton>
      <Styles.MenuLongButton onClick={() => handleClick(3)}>
        רשימת בוגרים
      </Styles.MenuLongButton>
    </Styles.MenuGrid>
  );
};

export default GraduatesMenu;
