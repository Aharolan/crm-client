import React from "react";
import * as Styles from "./candidate.styles";
import * as Types from "./graduatesTypes";

export interface interviewsCandidates {
  id?: string;
  first_name: string;
  last_name: string;
  stuClass: string;
  city: string;
}

const CandidateRow = ({candidateData}: {candidateData: Types.interviewsCandidates;}) => {
  const technologies = () => {
    console.log("The technologies button was pressed");
  };
  const addInterview = () => {
    console.log("The addInterview button was pressed");
  };
  const {id, first_name, last_name, stuClass, city} = candidateData

  return (
    <Styles.CandidateWrapper>
      <Styles.BlueButtonField>
        <Styles.moreFeatureButton onClick={addInterview}></Styles.moreFeatureButton>
        <Styles.moreFeatureButton onClick={technologies}></Styles.moreFeatureButton>
      </Styles.BlueButtonField>
      <Styles.CandidateField>{city}</Styles.CandidateField>
      <Styles.CandidateField>{stuClass}</Styles.CandidateField>
      <Styles.CandidateField>
        {last_name} {first_name}
      </Styles.CandidateField>
    </Styles.CandidateWrapper>
  );
};

export default CandidateRow;
