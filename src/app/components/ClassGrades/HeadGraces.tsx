import * as Styles from './ClassGrades.styles'
import { StudentGrade } from './gradeService'


export const HeadGrades = (props: { mission: string[] }) => {
    return (
        <Styles.TableHead>
            <Styles.ExamTitle>שם התלמיד</Styles.ExamTitle>
            {props.mission.map((title) =>
                <Styles.ExamTitle>{title} </Styles.ExamTitle>
            )}
            <Styles.ExamTitle>ממוצע לתלמיד</Styles.ExamTitle>
        </Styles.TableHead>
    )
}

export const StudentGrades = (props:{studentGrade: StudentGrade}) => {
    const student = props.studentGrade
    return (
        <Styles.TableRows>
            <Styles.StudentName>{student.fullName}</Styles.StudentName>
            {student.missions.map(title =>
                title ?
                    <Styles.MissionRow>{title} </Styles.MissionRow>
                    :
                    <Styles.NullRow>לא משתתף</Styles.NullRow>
            )}
            <Styles.StudentAverage>{student.avgGrade}</Styles.StudentAverage>
        </Styles.TableRows>
    )
}

export const TailGrades = (props: { examsAverage: number[], averageAverages?: number }) => {
    return (
        <Styles.TableRows>
            <Styles.AverageClass>ממוצע כיתתי</Styles.AverageClass>
            {props.examsAverage.map((average) =>
                <Styles.AverageTask>{average} </Styles.AverageTask>
            )}
            <Styles.AverageAverages>{props.averageAverages} </Styles.AverageAverages>
        </Styles.TableRows>
    )
}





