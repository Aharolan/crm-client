import SafeRouting from "@/components/safeRouting";
import MainMenu from "../components/students/MainMenu";

const mainMenuStudents = () => {
  return (
    <SafeRouting>
      <MainMenu />
    </SafeRouting>
  );
};

export default mainMenuStudents;
