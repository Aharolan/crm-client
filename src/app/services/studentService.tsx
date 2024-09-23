import { getAll,delete_ ,getRows ,put} from "./baseService"


export const getAllStudents = async () => {
    let res = await getAll(`students`)
    return res?.data || {}
}

export const deleteOneStudent = async (id:string) => {
        await delete_(`students`,id );  
}
export const getStudentClass =async ( id:string) => {
    let res = await getRows(`students`,"reads" ,id);
    console.log(res?.data)
    return res?.data || {}
};

export const isActiveNo =async (id:string,data:any) => {
    await put(`students`,id,data);  
};