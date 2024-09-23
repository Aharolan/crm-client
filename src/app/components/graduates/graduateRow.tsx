"use client";
import React from "react";
import * as Styles from "./Graduates.styles";
import * as Types from "./ graduatesTypes";

const GraduateRow = ({ graduateData }: { graduateData: Types.Graduate }) => {
  const { firstName, lastName, email, phoneNumber, relevantClass, status } =
    graduateData;

  return (
    <Styles.GraduateWrapper status={status}>
      <Styles.GraduateField>{status}</Styles.GraduateField>
      <Styles.GraduateField>{relevantClass}</Styles.GraduateField>
      <Styles.GraduateField>{email}</Styles.GraduateField>
      <Styles.GraduateField>{phoneNumber}</Styles.GraduateField>
      <Styles.GraduateField>{lastName}</Styles.GraduateField>
      <Styles.GraduateField>{firstName}</Styles.GraduateField>
    </Styles.GraduateWrapper>
  );
};

export default GraduateRow;
