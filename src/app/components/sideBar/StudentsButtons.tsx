import React from "react";
import GenericSideBarButtons from "./SideBarButton";

const buttons = [
  { id: 1, buttonName: "כיתות", url: "/students/classes" },
  { id: 2, buttonName: "קורסים", url: "/students/courses" },
  { id: 3, buttonName: "תלמידים", url: "/students/students_list" },
  { id: 4, buttonName: "ציונים", url: "/students/grades" },
  { id: 5, buttonName: "ראיונות ופידבקים", url: "/students/feedbacks" },
];

const StudentsButtons = ({ currentURL }: { currentURL: string }) => {
  return <GenericSideBarButtons buttons={buttons} currentURL={currentURL} />;
};

export default StudentsButtons;
