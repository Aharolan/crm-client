import React, { useState, useEffect } from "react";
import * as styles from "./infoPopup.styles";
import CandidateInfo from "./generalInfo/CandidateInfo";
import CandidateSchedule from "./candidateSchedule/CandidateSchdule";
import TelephoneSort from "./telephoneSort/TelephoneSort";
import CandidateDocuments from "./candidateDocument/CandidateDocuments";
import ContractDetails from "./contractDetails/ContractDetails";
import { allInfo, emptyAllInfo } from "./candidateTypes";
import {
  getSection,
  updateSection as updateSection,
} from "@/services/candidateService";
import { validation } from "@/utils/validation_utils";
import Milestones from "@/components/graduates/infoPopupGraduates/milestones";
import { ClipLoader } from "react-spinners";
import InterviewsComponent from "@/components/graduates/infoPopupGraduates/interviews";

interface InfoPopupProps {
  id: string;
  onClose: () => void;
  sourceCaller?: string;
  name?: string;
}

const InfoPopup: React.FC<InfoPopupProps> = ({
  onClose,
  id,
  sourceCaller,
  name,
}) => {
  const defaultSections = [
    "general",
    "telephon_sort",
    "schedule",
    "contract",
    "documents",
  ];
  const graduateSections = [
    "general",
    "contract",
    "documents",
    "courses",
    "feedbacks",
    "interviews",
    "milestones",
  ];

  const sections =
    sourceCaller === "graduates" || sourceCaller === "InterviewsCandidates"
      ? graduateSections
      : defaultSections;

  const enToHeb: { [key: string]: string } = {
    documents: "מסמכים",
    contract: "חוזה",
    schedule: "יום מיונים",
    telephon_sort: "מיון טלפוני",
    general: "כללי",
    milestones: "אבני דרך",
    interviews: "ראיונות",
    feedbacks: "פידבקים",
    courses: "קורסים",
  };

  const [activeSection, setActiveSection] = useState<string>(
    sourceCaller === "graduates"
      ? "milestones"
      : sourceCaller === "InterviewsCandidates"
      ? "interviews"
      : "general"
  );
  const [updated, setUpdated] = useState(false);
  const [allInfo, setAllInfo] = useState<allInfo>(emptyAllInfo);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [saveClicked, setSaveClicked] = useState(false);

  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);
  const rules: Record<
    string,
    Record<string, string[] | Record<string, string[]>>
  > = {
    general: {
      word: ["last_name", "first_name", "city", "lead_source"],
      number: ["phone", "whatsapp"],
      mail: ["email"],
      id: ["id_number"],
    },
    documents: { exist: { documents: ["document_file", "document_type"] } },
    contract: {},
    schedule: {},
    telephon_sort: {},
  };

  const source =
    sourceCaller === "graduates"
      ? "graduates"
      : sourceCaller === "InterviewsCandidates"
      ? "InterviewsCandidates"
      : "candidate";
  const fetch = async (section: string) => {
    try {
      setIsLoaded(true);

      const result = await getSection(source, section, id);
      if (result) {
        setAllInfo((prevInfo) => ({ ...prevInfo, [section]: result }));
        setIsLoaded(false);
        if (updated) {
          onClose();
        }

        setIsDataAvailable(true);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsDataAvailable(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetch(
        sourceCaller === "graduates"
          ? "milestones"
          : sourceCaller === "InterviewsCandidates"
          ? "interviews"
          : "general"
      );
    })();
  }, []);

  const setData = (section: string) => {
    const _setData = (key: string, value: string, index?: number) => {
      let temp = { ...allInfo };
      if (index !== undefined) {
        temp[section][index][key] = value;
      } else {
        temp[section][key] = value;
      }
      setAllInfo(temp as allInfo);
      if (!updated) setUpdated(true);
    };

    return _setData;
  };

  const addData = (section: string, dataToAdd: any) => {
    let temp = { ...allInfo };
    temp[section].push(dataToAdd);
    setAllInfo(temp as allInfo);
    if (updated === false) setUpdated(true);
  };

  const sectionsComponents: { [key: string]: () => React.JSX.Element } = {
    general: () => (
      <CandidateInfo
        data={allInfo.general}
        setData={setData("general")}
        errored={errors}
      />
    ),
    schedule: () => (
      <CandidateSchedule
        data={allInfo.schedule}
        setData={setData("schedule")}
      />
    ),
    telephon_sort: () => (
      <TelephoneSort
        data={allInfo.telephon_sort}
        setData={setData("telephon_sort")}
      />
    ),
    documents: () => (
      <CandidateDocuments
        data={allInfo.documents}
        setData={setData("documents")}
        errored={errors}
      />
    ),
    contract: () => (
      <ContractDetails data={allInfo.contract} setData={setData("contract")} />
    ),
    milestones: () => (
      <Milestones
        id={id}
        data={allInfo.milestones}
        setData={setData("milestones")}
        addData={addData}
      />
    ),

    interviews: () => (
      <InterviewsComponent
        id={id}
        data={allInfo.interviews}
        setData={setData("interviews")}
      />
    ),
  };
  const _onClose = () => {
    if (!updated || window.confirm("האם ברצונך לצאת בלי לשמור?")) {
      onClose();
    }
  };

  const onSave = async () => {
    if (activeSection !== "interviews" && activeSection !== "milestones") {
      let errors_ = validation(rules[activeSection], allInfo[activeSection]);
      if (errors_.some((ele) => ele.length)) {
        setErrors(errors_);
        return;
      }
    }
    if (saveClicked) {
      return;
    }
    setSaveClicked(true);
    try {
      await updateSection(source, activeSection, id, allInfo[activeSection]);
      setSaveClicked(false);
      await fetch(activeSection);
      setErrors([]);
      setUpdated(false);
    } catch (error) {
      console.error("error updating section:", error);
    }
  };

  const moveSection = (section: string) => {
    if (activeSection === section) return;
    if (
      !updated ||
      window.confirm(`לצאת מ ${enToHeb[activeSection]} בלי לשמור?`)
    ) {
      setSaveClicked(false);
      fetch(section);
      setActiveSection(section);
      setErrors([]);
      setUpdated(false);
    }
  };

  const displayName = name
    ? name
    : allInfo.general.first_name + " " + allInfo.general.last_name;

  return (
    <styles.PopupWindowShadow>
      <styles.modal>
        <styles.header>{`מידע על: ${displayName}`}</styles.header>
        {isDataAvailable ? (
          <>
            {isLoaded ? (
              <styles.TableInfoMassage>
                <ClipLoader color="#0b2d94" size={50} loading={isLoaded} />
                {updated && "...שומר נתונים "}
              </styles.TableInfoMassage>
            ) : (
              <>
                <styles.section>
                  {sectionsComponents[activeSection]()}
                </styles.section>
              </>
            )}
          </>
        ) : (
          <styles.TableInfoMassage>...אין נתונים להצגה</styles.TableInfoMassage>
        )}
        <styles.buttonsRow>
          <styles.buttons>
            {sections.map((label, index) => (
              <styles.sectionButton
                key={index}
                active={label === activeSection}
                onClick={() => moveSection(label)}
              >
                {enToHeb[label]}
              </styles.sectionButton>
            ))}
          </styles.buttons>
          <styles.buttonsLeft>
            <styles.saveButton onClick={onSave} disabled={saveClicked}>
              ✔
            </styles.saveButton>
            <styles.closeButton onClick={_onClose}>סגור</styles.closeButton>
          </styles.buttonsLeft>
        </styles.buttonsRow>
      </styles.modal>
    </styles.PopupWindowShadow>
  );
};

export default InfoPopup;
