import React, { useState, useEffect } from "react";
import { get, put } from "@/services/baseService";
import * as Styles from "./graduatesTechPopup.Styles";
import GenericCheckboxList from "./genericCheckboxList";
import { CheckboxItem } from "./genericCheckboxList";
import { ClipLoader } from "react-spinners";

const GraduateTechPopup = ({
  studentId,
  onClose,
}: {
  studentId: string;
  onClose: () => void;
}) => {
  const [techList, setTechList] = useState<CheckboxItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await get("graduateTech", studentId);
      const result = response;
      if (result.length > 0) {
        setTechList(result);
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async (updatedData: CheckboxItem[]) => {
    try {
      setIsSaving(true);
      setIsLoading(true);
      const dataToUpdate = {
        studentId: studentId,
        updatedTech: updatedData,
      };
      const response = await put("graduateTech", studentId, dataToUpdate);
      const result = response;
      if (result) setIsLoading(false);
      setIsSaving(false);
      setTechList(result);
      onClose();
    } catch (error) {
      console.error(`Error fetching data.`, error);
    }
  };

  return (
    <Styles.PopupWindowShadow
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <Styles.PopupContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isLoading ? (
          <>
            <Styles.LauderWrapper>
              <ClipLoader color="#0b2d94" size={50} loading={true} />
            </Styles.LauderWrapper>
            {isSaving && (
              <Styles.UpdateMassage>...מעדכן נתונים</Styles.UpdateMassage>
            )}
          </>
        ) : (
          <GenericCheckboxList
            header=":טכנולוגיות"
            items={techList}
            defaultIcon={true}
            placeHolder="הוסף טכנולוגיה:"
            onSave={async (data) => {
              await updateData(data);
            }}
            onClose={onClose}
            emptyMassage="אין טכנולוגיות להצגה"
          ></GenericCheckboxList>
        )}
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};

export default GraduateTechPopup;
