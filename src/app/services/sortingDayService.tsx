import { getAll, put } from "./baseService";



export const  getSortingDaysDates = async () => {
    const dates =  await getAll('sorting_day/getdates')
    return dates?.data || {}
};

export const updateSortingDay = async (data: Record<string,string|Array<any>>) => {
    let _data = {...data}
    delete _data['candidates']
    await put('sorting_day', _data.id as string, _data)
}
