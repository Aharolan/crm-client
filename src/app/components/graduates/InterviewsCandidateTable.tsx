"use client";
import React, { useState } from "react";
import * as Styles from "./GenericTable/Buttons.Styles";
import Table from "./GenericTable/table";
import GraduateTechPopup from "./graduatesTechPopup";

const InterviewsCandidatesTable: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string>("");
  const [studentId, setStudentId] = useState<number>(-1);
  const [studentName, setStudentName] = useState<string>("");

  const InterviewButton: React.FC<{
    id: number;
    name: string;
    buttonName: string;
  }> = ({ id, name, buttonName }) => (
    <Styles.Button
      onClick={() => {
        setIsOpen(`${buttonName}${id}`);
        setStudentId(id);
        setStudentName(name);
      }}
    >
      {buttonName}
    </Styles.Button>
  );

  const TechPopup: React.FC = () => (
    <GraduateTechPopup
      studentId={String(studentId)}
      onClose={() => setIsOpen("")}
    />
  );

  return (
    <Table
      pageTableHeader="מועמדים לראיונות"
      isStudents={"InterviewsCandidates"}
      tableHeaders={[
        { name: "" },
        { name: "עיר מגורים", sort: "city" },
        { name: "כיתה", sort: "class_number" },
        { name: "שם משפחה", sort: "last_name" },
        { name: "שם פרטי", sort: "first_name" },
      ]}
      tableNameToFetch="interviewsCandidates"
      buttons={[
        {
          name: "טכנולוגיות",
          component: InterviewButton,
          popup: TechPopup,
          isPopupOpen: isOpen,
        },
      ]}
    />
  );
};

export default InterviewsCandidatesTable;
