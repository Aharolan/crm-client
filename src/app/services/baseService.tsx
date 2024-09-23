import axios from "axios";
import { response } from "express";

export const api_url = "http://localhost:8081";

export const post = async (moduleName: string, data: any) => {
    try {
      const response = await axios.post(`${api_url}/${moduleName}/create`, data);
      return response;
    } catch (err) {
      console.log(err);
    }
}
export const put = async (moduleName: string, id : string, data: any) => {
    try {
        const response = await axios.put(`${api_url}/${moduleName}/update/${id}`, data);
        return response.data;
      } catch (err) {
        console.log(err);
      }
}

export const getAll = async (moduleName: string) => {
    try {
      const response = await axios.get(`${api_url}/${moduleName}`);
      return response
    } catch (error:any) {
      if(error.message === 'Network Error'){
          window.location.href = 'Server_problem';       
      }
        console.log(error);
      }
}

export const getColumn = async (moduleName: string, columnName: string) => {
  try {
      const response = await axios.get(`${api_url}/${moduleName}/column/${columnName}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
};

export const get = async (moduleName: string, id : string) => {
    try {
        const response = await axios.get(`${api_url}/${moduleName}/read/${id}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
}

export const delete_ = async (moduleName: string, id : string) => {
  try {
        const response = await axios.delete(`${api_url}/${moduleName}/delete/${id}`);
        return response;
      } catch (err) {
        console.log(err);
      }
}

export const getTwoParameter = async (moduleName: string,specificPath:string, firstId : string,secondeId:string) => {
  try {
      const response = await axios.get(`${api_url}/${moduleName}/${specificPath}/${firstId}/${secondeId}`);
      return response;
    } catch (err) {
      console.log(err);
    }
}
  
export const getRows = async (moduleName: string , id_column:string, id:string) => {
  try {
    const response = await axios.get(`${api_url}/${moduleName}/${id_column}/${id}`);  
        return response
  } catch (error:any) {
    if(error.message === 'Network Error'){
        window.location.href = 'Server_problem';       
    }
      console.log(error);
    }
}
