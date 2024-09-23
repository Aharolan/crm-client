"use client";
import React, { useState } from "react";
import * as Styles from "./button.styles";
import AddStudentPopup, { student } from "./popup";

const MyButton = () => {
  const [open, setOpen] = useState(false);

  const addStudent = (student: student) => {
    console.log(student);
    closeOpen();
  };

  const closeOpen = () => {
    setOpen(!open);
  };

  return (
    <Styles.all>
      <Styles.button onClick={closeOpen}>כפתור לחלון</Styles.button>
      {open && (
        <AddStudentPopup
          onClose={closeOpen}
          onSave={(course) => addStudent(course)}
        />
      )}
    </Styles.all>
  );
};

export default MyButton;
