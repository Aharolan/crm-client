import SafeRouting from '@/components/safeRouting'
import ClassesTable from '@/components/students/classes/Classes'

const ClassesPage = () => {
  return (
    <div>
      <SafeRouting><ClassesTable/></SafeRouting>
    </div>
  )
}

export default ClassesPage
