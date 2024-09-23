import ClassGrades from "@/components/ClassGrades/ClassGrades";
import SafeRouting from "@/components/safeRouting"

export default function Home({ params }: { params: { classId: number ,courseId:number} }) {
  return (
    <main>
      
      <SafeRouting><ClassGrades classId={params.classId} courseId={params.courseId} /></SafeRouting>
    </main>
  )
}