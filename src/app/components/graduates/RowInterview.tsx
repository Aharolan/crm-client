"use client";
import React from "react";
import * as Styles from "./InterviewTable.styles";
import { Interview } from "./ graduatesTypes";
import { isInterviewHistorical } from "./InterviewHistoricalUtils";


const RowInterview = ({
  InterviewData: InterviewData,
}: {
  InterviewData: Interview;
  
}) => {
  const isHistorical = isInterviewHistorical(InterviewData);

  
  return (
    <Styles.UserWrapper isHistorical={isHistorical}>
      <Styles.UserField>
        <Styles.button>מועמדים</Styles.button>
      </Styles.UserField>
      <Styles.UserField>{InterviewData.job}</Styles.UserField>
      <Styles.UserField>
        {InterviewData.interviewDate.toString()}
      </Styles.UserField>
      <Styles.UserField>{InterviewData.companyName}</Styles.UserField>
    </Styles.UserWrapper>
  );
};

export default RowInterview;
