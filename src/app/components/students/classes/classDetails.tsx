"use client";
import React, { useEffect, useState } from "react";
import * as styled from "./class.styled";
import { ClassInfo, getClass } from "../../../services/classesService";
import { useRouter } from "next/navigation";

const ClassDetails = (props: { classId: string }) => {
  const [classDetails, setClassDetails] = useState<ClassInfo>();

  const router = useRouter();

  const moveToPage = (text: string) => {
    router.push(`/students/${text}/${props.classId}`);
  };

  const fetchData = () => {
    setClassDetails(getClass(props.classId));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <styled.Container>
      <styled.BasicData>
        <styled.Icon onClick={() => console.log("Edit button was pressed")} />
        <styled.ClassNumber>{classDetails?.className}</styled.ClassNumber>
        <styled.BasicDetails>{classDetails?.classCampus}</styled.BasicDetails>
        <styled.BasicDetails>{classDetails?.dayStart}</styled.BasicDetails>
        <styled.BasicDetails>{classDetails?.dayEnd}</styled.BasicDetails>
        <styled.BasicDetails>
          {classDetails?.studentsNumber}
        </styled.BasicDetails>
      </styled.BasicData>

      <styled.Grid>
        <styled.Button onClick={() => moveToPage(`courses/`)}>
          רשימת קורסים
        </styled.Button>
        <styled.Button
          onClick={() => moveToPage(`students_list/`)}
        >
          רשימת תלמידים
        </styled.Button>
        <styled.Button onClick={() => moveToPage(`feedbacks/`)}>
          ראיונות ופידבקים
        </styled.Button>
        <styled.Button onClick={() => moveToPage(`grades/`)}>
          גיליון ציונים כיתתי
        </styled.Button>
      </styled.Grid>
    </styled.Container>
  );
};

export default ClassDetails;
