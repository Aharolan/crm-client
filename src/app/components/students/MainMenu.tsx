"use client";
import React from "react";
import * as Styles from "./MainMenu.styles";
import { useRouter } from "next/navigation";

const MainMenu = () => {
  const router = useRouter();

  const routerChange = (text: string) => {
    router.push(`/students/${text}`);
  };
  return (
    <Styles.container>
      <Styles.Button onClick={() => routerChange("students_list")}>
        רשימת תלמידים
      </Styles.Button>
      <Styles.Button onClick={() => routerChange("courses")}>
        רשימת קורסים
      </Styles.Button>
      <Styles.Button onClick={() => routerChange("classes")}>
        רשימת כיתות
      </Styles.Button>
    </Styles.container>
  );
};

export default MainMenu;
