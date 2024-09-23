import SafeRouting from '@/components/safeRouting'
import CoursesList from '../../../components/students/courses/Courses'


const CoursesPage = ({ params }: { params: { classId: string } }) => {
    let classId;
    if(params.classId)
    classId = params.classId[0];
    return (
      <div>
        <SafeRouting><CoursesList classId={classId}/></SafeRouting>
      </div>
    )
  }
  
export default CoursesPage