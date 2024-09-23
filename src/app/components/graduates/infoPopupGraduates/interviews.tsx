"use client";
import React, { useEffect, useState, useRef } from "react";
import * as Styles from "./interviews.Styles";
import { get, put } from "@/services/baseService";
import { Interviews as InterviewsComponent } from "../../candidates/candidate/infoPopup/candidateTypes";
import { CheckboxItem } from "../genericCheckboxList";
import GenericCheckboxList from "../genericCheckboxList";
import { ClipLoader } from "react-spinners";

const statusOption: Record<string, string> = {
  "לא עבר": "#FFE5DA",
  התקבל: "#bfefc4",
};

interface InterviewsProps {
  id: string;
  data: InterviewsComponent[];
  setData: (key: string, value: any, index?: number) => void;
}

const InterviewsComponent: React.FC<InterviewsProps> = ({
  id,
  data,
  setData,
}) => {
  const [comment, setComment] = useState("");
  const [techList, setTechList] = useState<any[]>([]);
  const [isTechListOpen, setIsTechListOpen] = useState<boolean>(false);
  const [isAddingComment, setIsAddingComment] = useState<number>();
  const [isShowingComment, setIsShowingComment] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [mentorComment, setMentorComment] = useState<string>("");

  const handleAddComment = (index: number) => {
    setData("text", comment, index);
    setIsAddingComment(-1);
  };

  const openNewRowComponent = (eventId: number) => {
    setIsAddingComment(eventId);
  };

  const fetchGraduateTechnologies = async () => {
    try {
      setIsLoading(true);
      const response = await get("graduateTech", id);
      const result = response;
      if (result.length > 0) {
        setTechList(result);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const fetchGraduateMentorComment = async (id: string) => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await get(`graduates/interviews/comment`, id);
      const result = response;
      if (result.length > 0) {
        setMentorComment(result[0].mentorComment);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const updateData = async (updatedData: CheckboxItem[]) => {
    try {
      setIsSaving(true);
      setIsLoading(true);
      const dataToUpdate = {
        studentId: id,
        updatedTech: updatedData,
      };
      const response = await put("graduateTech", id, dataToUpdate);
      const result = response;
      if (result) await fetchGraduateTechnologies();
      setIsSaving(false);
    } catch (error) {
      console.error(`Error fetching data.`, error);
    }
  };

  useEffect(() => {
    fetchGraduateTechnologies();
    fetchGraduateMentorComment(id);
  }, []);

  const renderGraduates = () => {
    if (!Array.isArray(data)) {
      return null;
    }
    let hoverTimeout: NodeJS.Timeout;

    return data.map((interview, index) => (
      <>
        <Styles.GraduateWrapper
          isShowingInfo={interview.event_name === "לא עבר"}
          onMouseOver={
            interview.event_name === "לא עבר"
              ? () => {
                  hoverTimeout = setTimeout(() => {
                    setIsShowingComment(interview.event_id);
                  }, 2000);
                }
              : undefined
          }
          onMouseOut={
            interview.event_name === "לא עבר"
              ? () => {
                  clearTimeout(hoverTimeout);
                  setIsShowingComment(-1);
                }
              : undefined
          }
          key={interview.event_id}
          color={statusOption[interview.event_name]}
        >
          <Styles.GraduateFieldSelect
            onChange={(e) => {
              setData("event_name", e.target.value, index);
              if (e.target.value === "לא עבר") {
                openNewRowComponent(interview.event_id);
              }
            }}
            defaultValue={interview.event_name}
          >
            <option disabled hidden value=""></option>
            <option
              value="לא עבר"
              onChange={() => {
                openNewRowComponent(interview.company_id);
              }}
            >
              לא עבר
            </option>
            <option value="התקבל">התקבל</option>
          </Styles.GraduateFieldSelect>
          <Styles.GraduateField>{interview.date}</Styles.GraduateField>
          <Styles.GraduateField>{interview.position}</Styles.GraduateField>
          <Styles.GraduateField>{interview.company_name}</Styles.GraduateField>
        </Styles.GraduateWrapper>
        {isAddingComment === interview.event_id ? (
          <Styles.InterviewFeedbackWrapper>
            <Styles.InterviewFeedbackInput
              placeholder="הוסף פידבק לראיון:"
              onChange={(e) => setComment(e.target.value)}
            />
            <Styles.AddButton onClick={() => handleAddComment(index)} />
          </Styles.InterviewFeedbackWrapper>
        ) : (
          isShowingComment === interview.event_id && (
            <Styles.InterviewFeedbackWrapper isErrorMassage={!interview.text}>
              {interview.text ? "פידבק מהראיון:" : "אין פידבק להצגה..."}
              {interview.text && (
                <Styles.InterviewFeedbackComment>
                  {interview.text}
                </Styles.InterviewFeedbackComment>
              )}
            </Styles.InterviewFeedbackWrapper>
          )
        )}
      </>
    ));
  };

  return (
    <>
      <Styles.Container>
        <Styles.infoRow>
          <Styles.rowField>הערכת מנטור</Styles.rowField>
          <Styles.InfoField>
            <Styles.CommentText>
              {mentorComment ? (
                mentorComment
              ) : (
                <Styles.UpdateMassage error={true} fontSize="1vw">
                  ...אין נתונים להצגה
                </Styles.UpdateMassage>
              )}
            </Styles.CommentText>
          </Styles.InfoField>
        </Styles.infoRow>
        <Styles.TechContainer>
          <Styles.TechHeader>:טכנולוגיות</Styles.TechHeader>

          {techList &&
            techList.map((tech) =>
              tech.isSelected ? (
                <Styles.TechName>{tech.name}</Styles.TechName>
              ) : null
            )}
          <Styles.AddButton
            marginRight={true}
            onClick={() => {
              setIsTechListOpen(true);
            }}
          />
        </Styles.TechContainer>
        {isTechListOpen && techList.length > 0 && (
          <Styles.PopupWindowShadow
            onClick={(e) => {
              e.stopPropagation();
              setIsTechListOpen(false);
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
                    <ClipLoader color="#0b2d94" size={80} loading={true} />
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
                    setIsTechListOpen(false);
                  }}
                  onClose={() => {
                    setIsTechListOpen(false);
                  }}
                  emptyMassage="אין טכנולוגיות להצגה"
                ></GenericCheckboxList>
              )}
            </Styles.PopupContainer>
          </Styles.PopupWindowShadow>
        )}
        <Styles.Table>
          <Styles.TableHeaderRow isStroller={data.length > 5}>
            <Styles.TableHeader>שם הלקוח</Styles.TableHeader>
            <Styles.TableHeader>משרה</Styles.TableHeader>
            <Styles.TableHeader>תאריך סטטוס</Styles.TableHeader>
            <Styles.TableHeader>סטטוס</Styles.TableHeader>
          </Styles.TableHeaderRow>
          <Styles.TableContent>
            {data.length > 0 ? (
              renderGraduates()
            ) : (
              <Styles.UpdateMassage error={true}>
                {"...אין נתונים להצגה"}
              </Styles.UpdateMassage>
            )}
          </Styles.TableContent>
        </Styles.Table>
      </Styles.Container>
    </>
  );
};

export default InterviewsComponent;
