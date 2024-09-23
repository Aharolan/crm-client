import { getAll } from "./baseService";
import {ClassData} from "@/components/class/Class"

export const getClassesOptions = async () => {
    let response = await getAll('class');
    let classes: ClassData[] = response?.data || []
  
    return Object.fromEntries(classes.map(_class => [_class.name, _class.id]))
}
