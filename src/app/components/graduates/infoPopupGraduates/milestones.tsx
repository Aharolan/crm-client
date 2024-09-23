"use client";

import React, { useEffect, useState, useRef } from "react";
import * as Styles from "./milestones.Styles";
import NewMilestone from "./newMilestone";
import { Milestones } from "../../candidates/candidate/infoPopup/candidateTypes";

const statusOption: Record<string, string> = {
  "לא עבר": "#FFE5DA",
  עצמאי: "#CAD9FE",
  עזב: "#FCFFD4",
  התקבל: "#bfefc4",
};

interface MilestonesProps {
  id: string;
  data: Milestones[];

  setData: (key: string, value: any, index?: number) => void;
  addData: (section: string, dataToAdd: any) => void;
}

const Milestones: React.FC<MilestonesProps> = ({
  id,
  data,
  setData,
  addData,
}) => {
  const [isAddingRow, setIsAddingRow] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  const renderGraduates = () => {
    if (!Array.isArray(data)) {
      return null;
    }

    return data.map((milestone, index) => (
      <Styles.GraduateWrapper
        key={index}
        color={statusOption[milestone.event_name]}
      >
        <Styles.GraduateFieldSelect
          onChange={(e) => {
            setData("event_name", e.target.value, index);
          }}
          defaultValue={milestone.event_name}
        >
          <option disabled hidden value=""></option>
          <option value="לא עבר">לא עבר</option>
          <option value="עצמאי">עצמאי</option>
          <option value="עזב">עזב</option>
          <option value="התקבל">התקבל</option>
        </Styles.GraduateFieldSelect>
        <Styles.GraduateField>{milestone.date}</Styles.GraduateField>
        <Styles.GraduateField>{milestone.position}</Styles.GraduateField>
        <Styles.GraduateField>{milestone.company_name}</Styles.GraduateField>
      </Styles.GraduateWrapper>
    ));
  };

  const openNewRowComponent = () => {
    setIsAddingRow(true);
  };
  useEffect(() => {
    if (isAddingRow && tableRef.current) {
      tableRef.current.scrollTo({
        top: tableRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isAddingRow]);

  const handleAddNewMilestone = (newMilestone: any) => {
    addData("milestones", newMilestone);
    setIsAddingRow(false);
  };

  return (
    <>
      <Styles.Container>
        <Styles.infoRow>
          <Styles.rowField>
            {data[0]?.start_date ? (
              data[0].start_date + " "
            ) : (
              <Styles.EmptyDateInfo>
                ...אין נתונים על תחילת ההכשרה
              </Styles.EmptyDateInfo>
            )}
            :תחילת הכשרה
          </Styles.rowField>
        </Styles.infoRow>

        <Styles.Table>
          <Styles.TableHeaderRow isStroller={data.length > 5}>
            <Styles.TableHeader>שם הלקוח</Styles.TableHeader>
            <Styles.TableHeader>משרה</Styles.TableHeader>
            <Styles.TableHeader>תאריך סטטוס</Styles.TableHeader>
            <Styles.TableHeader>סטטוס</Styles.TableHeader>
          </Styles.TableHeaderRow>

          <Styles.TableContent ref={tableRef}>
            {data.length > 0 ? (
              renderGraduates()
            ) : (
              <Styles.TableEmptyInfoMassage>
                ...אין נתונים להצגה
              </Styles.TableEmptyInfoMassage>
            )}
            {isAddingRow && (
              <NewMilestone
                addNewMilestone={(newMilestone) =>
                  handleAddNewMilestone(newMilestone)
                }
                id={id}
              />
            )}
          </Styles.TableContent>
          <Styles.AddMilestone>
            {isAddingRow ? null : (
              <Styles.interviewButton onClick={openNewRowComponent}>
                הוסף אבן דרך
              </Styles.interviewButton>
            )}
          </Styles.AddMilestone>
        </Styles.Table>
      </Styles.Container>
    </>
  );
};

export default Milestones;
