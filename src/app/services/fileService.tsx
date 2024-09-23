
import axios from "axios";
import { api_url, delete_, post ,get} from "./baseService";


export const uploadFile = async (data: any, name: string) => {
    try {
        

        const response = await post("files", {content: data, name: name})

      return response;
    } catch (err) {
      console.log(err);
    }
}



export const deleteFile = async (currentPath: any) => {
  const response = await axios.delete(`${api_url}/files/`, { data: { filePath: currentPath } });
}

export const downloadfile = async (name:string) => {
  const encode = encodeURIComponent(name);
  try {
        const data = await get("files", encode).then(response => {
            return response;
        });
      
        
        window.open(`http://localhost:8081/down/${encode}`);

        return data;
    } catch (err) {
        console.log(err);
    }
};

