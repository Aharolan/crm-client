import React from "react";
import GenericSideBarButtons from "./SideBarButton";

const buttons = [
  {
    id: 1,
    buttonName: "מועמדים לראיונות",
    url: "/graduates/InterviewsCandidates",
  },
  { id: 2, buttonName: "ראיונות", url: "/graduates/interviews" },
  { id: 3, buttonName: "לקוחות", url: "/graduates/customers" },
  { id: 4, buttonName: "בוגרים", url: "/graduates/graduatesList" },
];

const GraduatesButtons = ({ currentURL }: { currentURL: string }) => {
  return <GenericSideBarButtons buttons={buttons} currentURL={currentURL} />;
};

export default GraduatesButtons;
