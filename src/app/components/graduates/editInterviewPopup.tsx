import React, { useEffect, useState } from "react";
import * as Styles from "./GenericTable/Buttons.Styles";
import { put, getAll } from "@/services/baseService";
import GenericCheckboxList from "./genericCheckboxList";
import CandidatesCheckboxList from "./candidatesCheckboxList";
import { FcCollapse } from "react-icons/fc";

interface technologiesForm {
  id?: number;
  name: string;
  isSelected?: boolean;
  classNumber?: string;
}

interface candidatesForm {
  id?: number;
  name: string;
  isSelected?: boolean;
  classNumber: string;
}

// convert date from 01/01/23 format to 2024-01-01 format
const convertDateFormat = (inputDate: string): string => {
  const [day, month, year] = inputDate.split("/");
  const outputDate = `20${year}-${month}-${day}`;
  return outputDate;
};

interface EditInterviewProps {
  close: () => void;
  onSave: () => void;
  interviewId: number;
  fullInfo: {
    companyName: string;
    date: string;
    position: string;
    id: number;
  };
}

const EditInterview: React.FC<EditInterviewProps>= ({
  close,
  interviewId,
  fullInfo,
  onSave,
}) => {
  const [relevantClasses, setRelevantClasses] = useState<string[]>([]);
  const [input, setInput] = useState(fullInfo);
  const [technologies, setTechnologies] = useState<technologiesForm[]>([]); // Holds all technologies for presentation
  const [candidates, setCandidates] = useState<candidatesForm[]>([]); // Holds all candidates for presentation
  const [showConfirm, setShowConfirm] = useState<boolean>(true);
  const finalTechIDSelected: number[] = [];
  const newTechnologiesNames: string[] = [];
  const finalCandidatesIDSelected: (number | undefined)[] = [];
  const [showChooseTech, setShowChooseTech] = useState<boolean>(false);
  const [showChooseCandidates, setShowChooseCandidates] = useState<boolean>(false);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await getAll(`interviews/edit_interview/${interviewId}`);
      const technologiesList = response?.data.technologies;
      const candidatesList = response?.data.candidates;
      setTechnologies(technologiesList);
      setCandidates(candidatesList);
      allClasses(candidatesList);
    } catch (error) {
      setIsDataAvailable(false);
      console.error("Error fetching candidate data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [interviewId]);

  useEffect(() => {
    if (fullInfo) {
      setInput({
        ...fullInfo,
        date: convertDateFormat(fullInfo.date),
      });
    }
  }, [fullInfo]);

  const showOnlyChooseTechButton = () => {
    if (!showChooseTech && !technologies.some((tech) => tech.isSelected)) {
      return true;
    }
    return false;
  };

  const showSelectedTechButtons = () => {
    if (
      !showChooseTech &&
      technologies.some((tech) => tech.isSelected) &&
      !showChooseCandidates
    ) {
      return true;
    }
    return false;
  };

  const showOnlyUpdateTechButton = () => {
    if (
      !showChooseTech &&
      technologies.some((tech) => tech.isSelected) &&
      showChooseCandidates
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onOpenTechHandle = () => {
    setShowChooseCandidates(false);
    setShowConfirm(false);
    setShowChooseTech(true);
  };

  const onOpenCandidatesHandle = () => {
    setShowChooseTech(false);
    setShowConfirm(false);
    setShowChooseCandidates(true);
  };

  const onClose = () => {
    setShowChooseTech(false);
    setShowChooseCandidates(false);
    setShowConfirm(true);
  };

  const allClasses = (candidateData: candidatesForm[]) => {
    const setOfClasses = new Set<string>();
    for (let candidate of candidateData) {
      setOfClasses.add(candidate.classNumber);
    }
    const relevantClasses = Array.from(setOfClasses).sort();
    setRelevantClasses(relevantClasses);
  };

  const onTechClose = (data: technologiesForm[]) => {
    setShowChooseTech(false);
    setShowConfirm(true);
    setTechnologies(data);
  };

  const onCandidatesClose = (data: candidatesForm[]) => {
    setShowChooseCandidates(false);
    setShowConfirm(true);
    setCandidates(data);
  };

  const saveEditedInterview = async () => {
    technologies.forEach((technology) => {
      if (technology.isSelected) { // only selected technologies needs to be saved
        if (technology.id) { // if the technology has an id, we can just save it directly
          finalTechIDSelected.push(technology.id);
        } else { // if the technology has no id, we need to save it first as a new technology, after get it's id we can save it
          newTechnologiesNames.push(technology.name);
        }
      }
    });
    candidates.map((candidate) => {
      if (candidate.isSelected) {
        finalCandidatesIDSelected.push(candidate.id);
      }
    });
    const dataToUpdate = {
      technology_id: finalTechIDSelected,
      newTechnologiesNames: newTechnologiesNames,
      students_id: finalCandidatesIDSelected,
      updateInterview: {
        date: input.date,
        position: input.position,
      },
    };

    const response = await put("interviews", String(interviewId), dataToUpdate);
    if (response.message) {
      close();
      onSave();
    } else {
      window.alert('השמירה נכשלה. נא נסה שוב במועד מאוחר יותר');
    }
  };

  return (
    <Styles.PopupWindowShadow onClick={close}>
      <Styles.PopupContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isDataAvailable ? (
          <>
            <Styles.divHeder>
              <Styles.Label>{"ערוך ראיון"}</Styles.Label>
              <Styles.CloseCircle 
              onClick={close} 
              />
            </Styles.divHeder>
            <Styles.InputsContainer>
              <Styles.InputRow>
                <Styles.Label>שם לקוח:</Styles.Label>
                <Styles.DemoButton>{input.companyName}</Styles.DemoButton>
              </Styles.InputRow>
              <Styles.InputRow>
                <Styles.Label>משרה:</Styles.Label>
                <Styles.Input
                  type="text"
                  isValid={true}
                  value={input?.position}
                  onChange={(e) => {
                    setInput({ ...input, position: e.target.value });
                  }}
                />
              </Styles.InputRow>
              <Styles.InputRow>
                <Styles.Label>תאריך:</Styles.Label>
                <Styles.Input
                  type="date"
                  isValid={true}
                  data-date-format="DD MMMM YYYY"
                  value={input.date}
                  onChange={(e) => {
                    setInput({ ...input, date: e.target.value });
                  }}
                />
              </Styles.InputRow>
              <Styles.InputRow />
            </Styles.InputsContainer>
            {showChooseCandidates && (
              <CandidatesCheckboxList
                width={"100%"}
                height={"18vw"}
                header={"מועמדים"}
                items={candidates}
                onClose={onClose}
                onSave={onCandidatesClose}
                relevantClasses={relevantClasses}
                closeIcon={<FcCollapse />}
              />
            ) }
            {!showChooseCandidates && (
              <Styles.ChooseBox margin="no">
                <Styles.InputRow>
                  <Styles.Label>מועמדים:</Styles.Label>
                  <Styles.OptionsButton onClick={onOpenCandidatesHandle}>
                    בחירת מועמדים
                  </Styles.OptionsButton>
                </Styles.InputRow>
              </Styles.ChooseBox>
            )}
            {showChooseTech && (
              <GenericCheckboxList
                width={"100%"}
                height={"18vw"}
                header={"טכנולוגיות"}
                placeHolder={"הוסף טכנולוגיה"}
                items={technologies}
                onClose={onClose}
                onSave={onTechClose}
                closeIcon={<FcCollapse />}
              />
            ) }
            {showOnlyChooseTechButton() && (
              <Styles.ChooseBox margin="no" button="no">
              <Styles.InputRow>
                <Styles.Label>טכנולוגיות:</Styles.Label>
                <Styles.OptionsButton onClick={onOpenTechHandle}>
                  בחירת טכנולוגיות
                </Styles.OptionsButton>
              </Styles.InputRow>
            </Styles.ChooseBox>
            )}
            {showSelectedTechButtons() && (
              <Styles.ChooseBox margin="no" button="no">
              <Styles.InputRow>
                <Styles.Label>טכנולוגיות:</Styles.Label>
                <Styles.OptionsButton onClick={onOpenTechHandle}>
                  עדכון
                </Styles.OptionsButton>
              </Styles.InputRow>
              {technologies.map((tech) =>
                tech.isSelected ? (
                  <Styles.TechName>{tech.name}</Styles.TechName>
                ) : null
              )}
            </Styles.ChooseBox>
            )}
            {showOnlyUpdateTechButton() && (
              <Styles.ChooseBox margin="no" button="no">
                <Styles.InputRow>
                  <Styles.Label>טכנולוגיות:</Styles.Label>
                  <Styles.OptionsButton onClick={onOpenTechHandle}>
                    עדכון
                  </Styles.OptionsButton>
                </Styles.InputRow>
              </Styles.ChooseBox>
            )}
            {showConfirm && (
              <Styles.SubmitButton
                onClick={(e) => {
                  saveEditedInterview();
                }}
              >
                שמור
              </Styles.SubmitButton>
            )}
          </>)
          :( <Styles.Container>
            <Styles.TableInfoMassage>...אין נתונים להצגה</Styles.TableInfoMassage>
          </Styles.Container>)}
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};

export default EditInterview;
