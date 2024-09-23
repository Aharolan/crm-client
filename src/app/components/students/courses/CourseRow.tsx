import * as Styles from "./Courses.styles";
import { SlTrash } from "react-icons/sl";

export interface Course {
  id?: string| any;
  class: string,
  course_name: string,
  category: string,
  courseLength: string,
}

const CourseRow = ({deleteData, courseData ,fetchData }:
   {deleteData: (id: string) => void, courseData:Course, fetchData: ()=> void}) => {

  const ondelete = () => {
    if(window.confirm(`האם את/ה בטוח/ה שברצונך למחוק את ${courseData.course_name}`))
    deleteData(courseData.id)
  };

  return (
    <Styles.CoursesWrapper>
        <Styles.openInfo onClick={() => console.log(courseData.id)}>
          <Styles.CourseField>
            <Styles.deleteButton ><SlTrash onClick={ondelete}/></Styles.deleteButton>
          </Styles.CourseField>
          <Styles.CourseField>{courseData.courseLength} </Styles.CourseField>
          <Styles.CourseField>{courseData.category} </Styles.CourseField>
          <Styles.CourseField>{courseData.course_name}</Styles.CourseField>
        </Styles.openInfo>
    </Styles.CoursesWrapper>
  );
};

export default CourseRow
