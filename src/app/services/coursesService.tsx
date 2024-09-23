
const dataCourses =  [{
    id: '111',
    class: '1',
    course_name: 'אינפיטי-כתה-1',
    category: 'מתמטיקה',
    courseLength: 'חודש',
    },

    {id: '131',
    class: '3',
    course_name: 'אינפיטי-כתה-3',
    category: 'מתמטיקה',
    courseLength: 'חודש',},

    {id: '145',
    class: '1',
    course_name: 'אלגברה-כתה-1',
    category: 'מתמטיקה',
    courseLength: 'חודשיים',
    },

    {id: '311',
    class: '1',
    course_name: 'פיתון-כתה-1',
    category: 'תכנות',
    courseLength: 'חודשיים',
    },

    {id: '312',
    class: '1',
    course_name: 'פולסטאק-כתה-1',
    category: 'תכנות',
    courseLength: 'חודשיים',
    },
    
    {id: '14',
    class: '3',
    course_name: 'oop-כתה-3',
    category: 'תכנות',
    courseLength: 'חודש',
    },
]


export const getClassCourses = (classId: string) => {
    let res = dataCourses.filter((course) => course.class === classId)
    return res
}
import { getAll,delete_ ,getRows ,put} from "./baseService"


export const getAllCourses = async () => {
    let res = await getAll(`courses`)
    return res?.data || {}
}

export const deleteOneCourse = async (id:string) => {
        await delete_('courses',id );  
}

export const getCourses=async (id:string) => {
    let res = await getRows('courses','reads' ,id);
    return res?.data || {}
};

export const isActiveNo =async (id:string,data:any) => {
    await put('courses',id,data);  
};
