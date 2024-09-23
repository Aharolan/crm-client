"use client";
import TitleGraduates from "@/components/graduates/titleGraduates";
import * as Styles from "./Graduates.styles";
import GraduatesTable from "./graduatesTable";

const GraduatesList = () => {
  return (
    <Styles.Container>
      <Styles.Row>
        <TitleGraduates title={"רשימת בוגרים"}></TitleGraduates>
      </Styles.Row>
      <GraduatesTable></GraduatesTable>
    </Styles.Container>
  );
};

export default GraduatesList;
