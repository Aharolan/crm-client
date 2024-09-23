"use client";
import React, { useState, useEffect } from "react";
import { getAll } from "../../services/baseService";
import { Interview } from "./ graduatesTypes";
import RowInterview from "./RowInterview";
import * as Styles from "./InterviewTable.styles";
import Pagination from "./Pagination";
import {
  sortInterviews,
  parseDate,
  isInterviewHistorical,
} from "./InterviewHistoricalUtils";
const InterviewsTable = () => {
  const [interviewList, setInterviewList] = useState<Interview[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayInterviews, setDisplayInterviews] = useState<Interview[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isShowingHistorical, setIsShowingHistorical] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoaded(true);
      const response = await getAll("interviews");
      const dataInterviews = response?.data;
      if (dataInterviews.length > 0) {
        const sortedInterviews = sortInterviews(dataInterviews);
        setInterviewList(sortedInterviews);
        setDisplayInterviews(sortedInterviews);
        setIsDataAvailable(true);
        setIsLoaded(false);
      } else {
        console.log("No Interviews data available");
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.error("Error fetching interview data:", error);
      setIsDataAvailable(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemsPerPage = 5;
  const totalItems = isShowingHistorical
    ? interviewList.length
    : interviewList.filter((interview) => !isInterviewHistorical(interview))
        .length;

  const partialList = (list: Interview[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const renderInterviews = () => {
    const interviewsToRender = isShowingHistorical
      ? interviewList
      : interviewList.filter((interview) => !isInterviewHistorical(interview));

    return partialList(interviewsToRender).map((interview) => (
      <RowInterview key={interview.id} InterviewData={interview} />
    ));
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowHistoricalInterviews = () => {
    setIsShowingHistorical(true);
    setCurrentPage(1);
  };

  const handleShowCurrentInterviews = () => {
    setIsShowingHistorical(false);
    setCurrentPage(1);
  };

  return (
    <div>
      <Styles.container>
        <Styles.Row>
          <Styles.TableCaption>ראיונות</Styles.TableCaption>
          <Styles.AddUserButton>הוסף ראיון</Styles.AddUserButton>
        </Styles.Row>
        <Styles.TableHead>
          <Styles.UserHeadField></Styles.UserHeadField>
          <Styles.UserHeadField> משרה</Styles.UserHeadField>
          <Styles.UserHeadField>תאריך ראיון</Styles.UserHeadField>
          <Styles.UserHeadField>שם הלקוח</Styles.UserHeadField>
        </Styles.TableHead>
        {isDataAvailable ? (
          isLoaded ? (
            <Styles.Massage>הנתונים יורדים</Styles.Massage>
          ) : (
            <Styles.Table>{renderInterviews()}</Styles.Table>
          )
        ) : (
          <Styles.Massage>אין ראיונות מתוכננים כרגע</Styles.Massage>
        )}
        ;
        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
        {isShowingHistorical && (
          <Styles.buttonUnderTable onClick={handleShowCurrentInterviews}>
            חזור לטבלה המקורית
          </Styles.buttonUnderTable>
        )}
        {!isShowingHistorical && (
          <Styles.buttonUnderTable onClick={handleShowHistoricalInterviews}>
            הצג ראיונות היסטוריים
          </Styles.buttonUnderTable>
        )}
      </Styles.container>
    </div>
  );
};

export default InterviewsTable;
