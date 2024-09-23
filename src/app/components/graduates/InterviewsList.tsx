"use client";
import React, { useState } from "react";
import * as Styles from "./GenericTable/Buttons.Styles";
import InterviewTable from "./interviewsTable";
import InterviewsCandidatesPopup from "./interviewsCandidatesPopup";
import EditInterview from "./editInterviewPopup";
import { MdOutlineEdit } from "react-icons/md";

type InterviewsListProps = {
  id?: string;
};

const initialInfo = {
  companyName: "",
  date: "",
  position: "",
  id: -1,
};

const InterviewsList: React.FC<InterviewsListProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<string>("");
  const [interviewId, setInterviewId] = useState<number>(-1);
  const [customerName, setCustomerName] = useState<string>("");
  const [fullInfo, setFullInfo] = useState(initialInfo);
  const [shouldUpdateTable, setShouldUpdateTable] = useState<boolean>(true);


  const handleClose = () => {
    setIsOpen("")
  };

  const CandidatesButton: React.FC<{
    id: number;
    name: string;
    buttonName: string;
    fullInfo: any;
  }> = ({ id, name, buttonName, fullInfo}) => (
    <Styles.Button
      onClick={() => {
        setIsOpen(`${buttonName}${id}`);
        setInterviewId(id);
        setCustomerName(name);
        setFullInfo(fullInfo);
      }}
    >
      {buttonName}
    </Styles.Button>
  );

  const EditButton: React.FC<{
    id: number;
    name: string;
    buttonName: string;
    fullInfo:  { companyName: string; date: string; position: string; id: number; };
  }> = ({ id, name, buttonName, fullInfo}) => (
    <Styles.circle>
    <MdOutlineEdit
    size="1em"
      color="white"
      onClick={() => {
        setIsOpen(`${buttonName}${id}`);
        setInterviewId(id);
        setCustomerName(name);
        setFullInfo(fullInfo);
      }}
    >
      {buttonName}
      </MdOutlineEdit>
      </Styles.circle>
  );

  const handleSave = () => {
    setShouldUpdateTable(!shouldUpdateTable);
  };

  const CandidatesPopup: React.FC = () => (
   <InterviewsCandidatesPopup setter={handleClose} companyName={customerName} interviewID={String(interviewId)}>
   </InterviewsCandidatesPopup>
  );

  const EditInterviewPopup: React.FC = () => (
    <EditInterview 
    close={handleClose} 
    interviewId={interviewId} 
    fullInfo={fullInfo}
    onSave={handleSave}
    >
    </EditInterview>
  );

  return (
    <InterviewTable
    key={shouldUpdateTable ? "updateTable" : "update"}
      id={id ? id : undefined}
      buttons={[
        {
          name: "מועמדים",
          component: CandidatesButton,
          popup: CandidatesPopup,
          isPopupOpen: isOpen,
        },{
          name: "ערוך ראיון",
          component: EditButton,
          popup: EditInterviewPopup,
          isPopupOpen: isOpen,
        }
      ]}
    />
  );
};

export default InterviewsList;
