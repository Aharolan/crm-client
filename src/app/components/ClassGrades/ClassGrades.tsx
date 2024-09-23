"use client"
import { useEffect, useState ,useRef} from 'react';
import * as Styles from './ClassGrades.styles'
import { HeadGrades, StudentGrades, TailGrades } from './HeadGraces'
import { average, avgClass, createMissionsGrade, StudentGrade, GradesClass } from './gradeService';
import { getTwoParameter } from '@/services/baseService';

const ClassGrades = (props: { classId: number, courseId: number }) => {

  const defaultGradeData: GradesClass = {
    courseName: "",
    missions: [],
    studentGrade: [],
    classAverages: [],
    averageAverages: 0,
  };

  const [gradeData, setGradeData] = useState<GradesClass>(defaultGradeData);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTwoParameter('grades','class_and_course',''+props.classId,''+props.courseId);
        const data = await response?.data

        const missions: string[] = data.missions.map((element) => element.name);
        const studentGrade = createMissionsGrade(missions, data.students);
        const classAverage = avgClass(studentGrade);
        const graged: GradesClass = {
          courseName: data.course[0].name,
          missions: missions,
          studentGrade: studentGrade,
          classAverages: average(studentGrade),
          averageAverages: classAverage,
        };
        setGradeData(graged);
    
      } catch (newError) {
        setError(newError);
        console.error("error from server - ", error);
      } 
    };

    fetchData();
  }, []);

  return (
    <Styles.Table>
      <Styles.PageHead>
        <Styles.Title>גליון ציונים כיתתי - {gradeData.courseName}</Styles.Title>
        <Styles.AddTableBtn>הוסף מטלה</Styles.AddTableBtn>
      </Styles.PageHead>
      <Styles.GradeTable>
        <HeadGrades mission={gradeData.missions} />
        <Styles.StudentsGrades >
          {gradeData.studentGrade.map(studentGrade =>
            <StudentGrades studentGrade={studentGrade} />)
          }
        </Styles.StudentsGrades>
        <TailGrades examsAverage={gradeData.classAverages} averageAverages={gradeData.averageAverages} />
      </Styles.GradeTable>
    </Styles.Table>
  )
}

export default ClassGrades;

