"use client";
import React, { useState, useEffect } from "react";
import * as Styles from "./interviewsCandidatesPopup.styles";
import { getAll } from "@/services/baseService";
import axios from "axios";
import { api_url } from "@/services/baseService";
import { ImCancelCircle } from "react-icons/im";
import { ClipLoader } from "react-spinners";

const InterviewsCandidatesPopup = ({ setter, companyName, interviewID,
}: { setter: () => void, companyName: string, interviewID: string }) => {

  interface InterviewsCandidates {
    isSelected?: boolean;
    id?: string;
    student_id?: number;
    first_name: string;
    last_name: string;
    class_number: string;
    city: string;
  };

  const finalChecked: string[] = [];
  const [shoeAll, setShowAll] = useState(true);
  const [currentClass, setCurrentClass] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [relevantClasses, setRelevantClasses] = useState<string[]>([]);
  const [candidateList, setCandidateList] = useState<InterviewsCandidates[]>([]);
  const [alreadyChecked, setAlreadyChecked] = useState<InterviewsCandidates[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alreadyChecked = await getAll(`GraduatesInterviews/read/${interviewID}`);
        if (alreadyChecked) {
          setAlreadyChecked(alreadyChecked.data);
        }
      } catch (error) {
        console.error("Error fetching candidate data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidatesResponse = await getAll("interviewsCandidates");
        const candidateData = candidatesResponse?.data;
        if (candidateData) {
          sortByChecked(candidateData);
          allClasses(candidateData);
          addIsChecked(candidateData);
          setCandidateList(candidateData);
        }
      } catch (error) {
        console.error("Error fetching candidate data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (alreadyChecked) {
      fetchData();
    }
  }, [alreadyChecked]);

  const isChecked = (id: any) => {
    return alreadyChecked?.some((candidate) => candidate.student_id == id);
  };

  const sortByChecked = (candidateData: [InterviewsCandidates]) => {
    setCandidateList(
      candidateData.sort((a, b) => {
        if (isChecked(a.id) && !isChecked(b.id)) {
          return -1;
        }
        if (isChecked(b.id) && !isChecked(a.id)) {
          return 1;
        } else {
          return 0;
        }
      }));
  };

  const allClasses = (candidateData: [InterviewsCandidates]) => {
    const setOfClasses = new Set<string>();
    for (let candidate of candidateData) {
      setOfClasses.add(candidate.class_number);
    }
    let relevantClasses = Array.from(setOfClasses).sort();
    setRelevantClasses(relevantClasses);
  };

  const addIsChecked = (candidateData: [InterviewsCandidates]) => {
    for (let candidate of candidateData) {
      isChecked(candidate.id)
        ? (candidate.isSelected = true)
        : (candidate.isSelected = false);
    }

  };

  const submitHandler = async () => {
    for (let candidate of candidateList) {
      if (candidate.isSelected) {
        finalChecked.push(String(candidate.id));
      }
    }
    const dataToUpdate = {
      interviewId: interviewID,
      candidatesId: finalChecked,
    };
    try {
      await axios.put(`${api_url}/GraduatesInterviews`, dataToUpdate);
      setter();
    } catch (error) {
      console.error("error updating students ", error);
    }
  };

  const updater = (id: string | undefined) => {
    const filteredObjIndex = candidateList.findIndex((obj) => obj.id == id);
    const tempFilteredList = [...candidateList];
    tempFilteredList[filteredObjIndex].isSelected =
      !candidateList[filteredObjIndex].isSelected;
    setCandidateList(tempFilteredList);
  };

  const filterCandidates = (search_: string) => {
    if (search_) {
      setCurrentClass(search_)
      setShowAll(false)
    } else {
      setShowAll(true)
    }
  };

  return (
    <Styles.PopupWindowShadow>
      <Styles.PopupContainer>
        <Styles.divHeder>
          <Styles.label>מועמדים ל{companyName}</Styles.label>
          <ImCancelCircle size={30} color="red" onClick={setter} />
        </Styles.divHeder>
        {loading ? (
          <Styles.TableInfoMassage>
            <ClipLoader color="#0b2d94" size={60} loading={loading} />
          </Styles.TableInfoMassage>
        ) :
        <React.Fragment>
          <Styles.inputContainer>
            :מכיתה
            <Styles.inputSelect
              onChange={(key) => {
                filterCandidates(key.target.value);
              }}>
              <option value={""}></option>
              {relevantClasses.map((key) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </Styles.inputSelect>
          </Styles.inputContainer>
        <Styles.rectangle>
          {shoeAll &&
            candidateList.map((key) => (
              <Styles.inPopupRow>
                {key.first_name} {key.last_name}
                <Styles.inputRow
                  key={key.id}
                  type="checkbox"
                  id={key.id}
                  checked={key.isSelected}
                  onChange={() => updater(key.id)}
                ></Styles.inputRow>
              </Styles.inPopupRow>
            ))}
          {!shoeAll && candidateList.map((key) => (
            (key.class_number == currentClass) && (
              <Styles.inPopupRow>
                {key.first_name} {key.last_name}
                <Styles.inputRow
                  type="checkbox"
                  key={key.id}
                  id={key.id}
                  checked={key.isSelected}
                  onChange={() => updater(key.id)}
                ></Styles.inputRow>
              </Styles.inPopupRow>
            )))}
        </Styles.rectangle>
        <Styles.submitButton onClick={submitHandler}>
          אישור
        </Styles.submitButton>
          </React.Fragment>
          }
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};

export default InterviewsCandidatesPopup;
