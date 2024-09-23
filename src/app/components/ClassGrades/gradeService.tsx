
interface StudentResponse {
    full_name: string,
    missions: string | null,
    avg_grade: number | null
}

export interface StudentGrade {
    fullName: string,
    missions: Array<number | null>,
    avgGrade: number
}


export interface GradesClass {
    courseName: string,
    missions: string[],
    studentGrade: StudentGrade[],
    classAverages: number[],
    averageAverages: number
}

export const avgClass = (studentsGrades: StudentGrade[]): number => {
    const validGrades = studentsGrades.filter((student) => student.avgGrade > 0);
    const sum = validGrades.reduce((acc, student) => acc + student.avgGrade, 0);
    return sum / validGrades.length;
};

export const average = (studentsGrades: StudentGrade[]): number[] => {
    const missions = studentsGrades[0].missions;
    const averages = missions.reduce((acc: number[] = [], mission, i) => {
        const count: number = studentsGrades.reduce((c, student) => {
            return c + (student.missions[i] !== null ? 1 : 0);
        }, 0);
        const sum: number = studentsGrades.reduce((s, student) => {
            return s + Number(student.missions[i] !== null ? student.missions[i] : "0");
        }, 0);
        acc.push(sum / count);
        return acc;
    }, []);
    return averages;
};


export const createMissionsGrade = (classMissions: string[], studentList: StudentResponse[]): StudentGrade[] => {
    const studentGrades: StudentGrade[] = studentList.map((student) => {
        const missions = getStudentGrade(
            defaultMission(classMissions),
            studentMissions(student.missions)
        );
        return {
            fullName: student.full_name,
            missions: missions,
            avgGrade: student.avg_grade,
        } as StudentGrade;
    });

    return studentGrades;
};

const getStudentGrade = (defaultDict: { [key: string]: number | null }, studentGrad: { [key: string]: number | null }) => {
    const combinedObject = { ...defaultDict, ...studentGrad };
    const arr = Object.values(combinedObject);
    return arr;
};

const defaultMission = (missions: string[]): { [key: string]: number | null } => {
    return missions.reduce((obj: { [key: string]: number | null }, mission) => {
        obj[mission] = null;
        return obj;
    }, {});
};

function studentMissions(missionsString: string | null): { [key: string]: number } {
    if (!missionsString) {
        return {};
    } else {
        const missionsGrades: { [key: string]: number } = {};
        const missions = missionsString.split(',')

        missions.forEach((mission) => {
            const parts = mission.split(':');
            if (parts.length === 2) {
                missionsGrades[parts[0].trim()] = parseInt(parts[1].trim());
            }

        });
        return missionsGrades;
    }

}

