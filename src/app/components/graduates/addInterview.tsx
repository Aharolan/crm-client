"use client";
import React, { useEffect, useState } from "react";
import * as Styles from "./GenericTable/Buttons.Styles";
import GenericCheckboxList from "./genericCheckboxList";
import CandidatesCheckboxList from "./candidatesCheckboxList";
import { getAll, post } from "@/services/baseService";
import { FcCollapse } from "react-icons/fc";
import { ClipLoader } from "react-spinners";
import InterviewForm from "./interviewForm";

interface technologiesForm {
  id?: number;
  name: string;
  isSelected?: boolean;
}

interface candidatesForm {
  id?: number;
  name: string;
  isSelected?: boolean;
  classNumber: string;
}

interface customersForm {
  id?: number;
  name: string;
  isSelected?: boolean;
}

interface initialNewInterview {
  customerID: number;
  position: string;
  date: string;
  candidatesIDs: number[];
  technologiesIDs: number[];
  newTechnologiesNames: string[];
}

const initialNewInterview: initialNewInterview = {
  customerID: -1,
  position: "",
  date: "0000-00-00",
  candidatesIDs: [],
  technologiesIDs: [],
  newTechnologiesNames: [],
};

const AddInterview = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(true);
  const [customers, setCustomers] = useState<customersForm[]>([]);
  const [candidates, setCandidates] = useState<candidatesForm[]>([]);
  const [showChooseTech, setShowChooseTech] = useState<boolean>(false);
  const [relevantClasses, setRelevantClasses] = useState<string[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);
  const [newInterview, setNewInterview] = useState(initialNewInterview);
  const [technologies, setTechnologies] = useState<technologiesForm[]>([]);
  const [showChooseCandidates, setShowChooseCandidates] =
    useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoaded(true);
      const response = await getAll("interviews/newInterview");
      const fullInfo = response?.data;
      if (fullInfo["customers"].length > 0) {
        const { technologies, candidates, customers } = fullInfo;
        setTechnologies(technologies);
        setCandidates(candidates);
        allClasses(candidates);
        setCustomers(customers);
        setIsDataAvailable(true);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      setIsDataAvailable(false);
    } finally {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const allClasses = (candidateData: candidatesForm[]) => {
    const setOfClasses = new Set<string>();
    for (let candidate of candidateData) {
      setOfClasses.add(candidate.classNumber);
    }
    const relevantClasses = Array.from(setOfClasses).sort();
    setRelevantClasses(relevantClasses);
  };

  const onOpenCandidatesHandle = () => {
    setShowChooseTech(false);
    setShowConfirm(false);
    setShowChooseCandidates(true);
  };

  const onOpenTechHandle = () => {
    setShowChooseCandidates(false);
    setShowConfirm(false);
    setShowChooseTech(true);
  };

  const closeAll = () => {
    setShowChooseTech(false);
    setShowChooseCandidates(false);
    setShowConfirm(true);
  };

  const saveEditedInterview = async () => {
    const techObjects = technologies.filter(
      (tech) => tech.isSelected && tech.id
    );
    const techIDS = techObjects.map((tech) => tech.id);
    const newTechObjects = technologies.filter(
      (tech) => tech.isSelected && !tech.id
    );
    const newTechNames = newTechObjects.map((tech) => tech.name);
    const candidatesObjects = candidates.filter(
      (candidate) => candidate.isSelected
    );
    const candidatesIDs = candidatesObjects.map((candidate) => candidate.id);

    const interviewToAdd = JSON.parse(JSON.stringify(newInterview)); // Creates a completely separate copy
    interviewToAdd.technologiesIDs = techIDS;
    interviewToAdd.candidatesIDs = candidatesIDs;
    interviewToAdd.newTechnologiesNames = newTechNames;

    const response = await post("interviews", interviewToAdd);
    if (response?.status == 201) {
      onClose();
      onSave();
    } else {
      window.alert("השמירה נכשלה. נא נסה שוב במועד מאוחר יותר");
    }
  };

  return (
    <Styles.PopupWindowShadow onClick={onClose}>
      <Styles.PopupContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isDataAvailable ? (
          <React.Fragment>
            <Styles.divHeder>
              <Styles.Label fontWeight="bold">{"ראיון חדש"}</Styles.Label>
              <Styles.CloseCircle onClick={onClose} />
            </Styles.divHeder>
            {isLoaded ? (
              <Styles.TableInfoMassage>
                <Styles.Loader />
              </Styles.TableInfoMassage>
            ) : (
              <React.Fragment>
                <InterviewForm
                  customers={customers}
                  setNewInterview={setNewInterview}
                />

                {showChooseCandidates && (
                  <CandidatesCheckboxList
                    width={"100%"}
                    height={"18vw"}
                    header={"מועמדים"}
                    items={candidates}
                    onClose={closeAll}
                    onSave={onCandidatesClose}
                    relevantClasses={relevantClasses}
                    closeIcon={<FcCollapse />}
                  />
                )}
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
                    onClose={closeAll}
                    onSave={onTechClose}
                    closeIcon={<FcCollapse />}
                  />
                )}
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
                  <React.Fragment>
                    <Styles.ChooseBox margin="no" button="no">
                      <Styles.InputRow>
                        <Styles.Label>טכנולוגיות:</Styles.Label>
                        <Styles.OptionsButton onClick={onOpenTechHandle}>
                          עדכון
                        </Styles.OptionsButton>
                      </Styles.InputRow>
                    </Styles.ChooseBox>
                    <Styles.ChooseBox margin="no" button="no">
                      {technologies.map((tech) =>
                        tech.isSelected ? (
                          <Styles.TechName>{tech.name}</Styles.TechName>
                        ) : null
                      )}
                    </Styles.ChooseBox>
                  </React.Fragment>
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
                    onClick={() => {
                      saveEditedInterview();
                    }}
                  >
                    שמור
                  </Styles.SubmitButton>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <Styles.Container>
            <Styles.TableInfoMassage>
              ...אין נתונים להצגה
            </Styles.TableInfoMassage>
          </Styles.Container>
        )}
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};
export default AddInterview;
