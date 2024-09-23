import SafeRouting from "@/components/safeRouting"
import UsersTable from "@/components/users/UsersTable"

const Home = () => {
    return (
      <div>
        <SafeRouting role="מנהל"><UsersTable/></SafeRouting>
      </div>
     
    )
  }
  
  export default Home