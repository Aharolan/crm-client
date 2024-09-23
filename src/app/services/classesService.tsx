const mockData: Array<{
  id: number;
  className: string;
  campus: string;
  amountOfStudents: number;
  StartDate: string;
  EndDate: string;
  status: string;
}> = [
  {
    id: 1,
    className: "Angular",
    campus: "Jerusalem",
    amountOfStudents: 25,
    StartDate: "20/07/2023",
    EndDate: "31/08/2023",
    status: "not active",
  },
  {
    id: 2,
    className: "React",
    campus: "Petah Tikva",
    amountOfStudents: 30,
    StartDate: "15/08/2023",
    EndDate: "29/09/2023",
    status: "active",
  },
  {
    id: 3,
    className: "C#",
    campus: "Rishon Lezion",
    amountOfStudents: 15,
    StartDate: "01/09/2023",
    EndDate: "26/10/2023",
    status: "not active",
  },
  {
    id: 4,
    className: "Java",
    campus: "Tel Aviv",
    amountOfStudents: 40,
    StartDate: "01/10/2023",
    EndDate: "25/11/2023",
    status: "active",
  },
  {
    id: 5,
    className: "Python",
    campus: "Haifa",
    amountOfStudents: 50,
    StartDate: "01/11/2023",
    EndDate: "23/12/2023",
    status: "active",
  },
  
  {
    id: 6,
    className: "C#",
    campus: "Rishon Lezion",
    amountOfStudents: 7,
    StartDate: "01/09/2023",
    EndDate: "26/10/2023",
    status: "active",
  },
  {
    id: 7,
    className: "Java",
    campus: "Tel Aviv",
    amountOfStudents: 44,
    StartDate: "01/10/2023",
    EndDate: "25/11/2023",
    status: "not active",
  },
];

const data = () => {
  return mockData
}

export default data;
export interface ClassInfo {
  className: string;
  classCampus: string;
  dayStart: string;
  dayEnd: string;
  studentsNumber: string;
}

export const classItem: ClassInfo = {
  className: "  כיתה   7",
  classCampus: "קמפוס: ירושלים",
  dayStart: "23/10/2014 :תאריך התחלה",
  dayEnd: "23/10/2018 :תאריך סיום",
  studentsNumber: "14 :תלמידים בכיתה",
};

export const getClass = (classId: string) => {
  console.log("class ", classId);
  return classItem;
};
