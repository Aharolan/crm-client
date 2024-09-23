"use client";
import React, { useState } from "react";
import * as Styles from "./table.Styles";
import StudentDetailsPopup from "@/components/studentDetailsPopup/studentDetailsPopup";
import InfoPopup from "../../candidates/candidate/infoPopup/InfoPopup";

interface RowProps {
  data: Record<string, any>;
  isStudent?: string;
  statusColor?: string;
  showButton?: boolean;
  updateTable: () => void;
  buttons?: Array<{
    name?: string;
    component: React.ElementType;
    popup: React.ElementType;
    isPopupOpen: string;
  }>;
}

const Row: React.FC<RowProps> = ({
  data,
  isStudent,
  buttons,
  statusColor,
  showButton = true,
  updateTable,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [infoPopupOpen, setInfoPopupOpen] = useState<boolean>(false);
  const [sourceCaller, setSourceCaller] = useState<string>("");

  const updateSourceCaller = (caller: string) => {
    setSourceCaller(caller);
  };

  const dataArray = Object.keys(data)
    .filter((key) => key !== "id")
    .map((key) => data[key]);
  data.ID && delete data.ID;

  const renderButtons = () => {
    return buttons?.map((button, index) => {
      if (showButton) {
        const DynamicButtonComponent = button.component;
        const DynamicPopUpComponent = button.popup;

        return (
          <div key={index}>
            <DynamicButtonComponent
              fullInfo={data}
              id={data.id}
              name={data.name ? data.name : data.companyName}
              buttonName={button.name}
            />
            {button.isPopupOpen === `${button.name}${data.id}` && (
              <DynamicPopUpComponent
                name={data.name ? data.name : data.companyName}
                id={data.id}
              />
            )}
          </div>
        );
      }
    });
  };

  const handleClosePopup = (value: boolean) => {
    setIsPopupOpen(false);
  };

  return (
    <Styles.RowWrapper status={statusColor}>
      {isPopupOpen && (
        <StudentDetailsPopup
          id={data.id}
          closePopup={handleClosePopup}
          openSecondPopup={setInfoPopupOpen}
          sourceCaller={isStudent ? isStudent : ""}
        />
      )}
      {infoPopupOpen && (
        <InfoPopup
          name={
            data.first_name && data.last_name
              ? `${data.first_name} ${data.last_name}`
              : ""
          }
          id={data.id}
          onClose={() => {
            updateTable();
            setInfoPopupOpen(false);
          }}
          sourceCaller={isStudent ? isStudent : ""}
        />
      )}
      {buttons && <Styles.DataField>{renderButtons()}</Styles.DataField>}
      {dataArray.map((dataItem, index) => (
        <Styles.DataField
          clickable={true}
          onClick={() => {
            isStudent ? setIsPopupOpen(true) : undefined;
          }}
          key={index}
        >
          {dataItem}
        </Styles.DataField>
      ))}
    </Styles.RowWrapper>
  );
};

export default Row;
