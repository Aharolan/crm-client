import { get, put } from "./baseService";
import * as types from "@/components/candidates/candidate/infoPopup/candidateTypes";

export const getSection = async (
  moduleName: string,
  section: string,
  id: string
) => {
  let res = await get(`${moduleName}/${section}`, id);

  if (!res) return;

  if (section === "documents") {
    if (!Array.isArray(res)) res = [res];
    res = { documents: res, id_candidate: id };
  }
  return res;
};

export const updateSection = async (
  moduleName: string,

  section: string,
  id: string,
  data: Record<string, any>
) => {
  Object.keys(data).forEach((key) => {
    if (data[key] === null) data[key] = "";
  });

  if (section === "documents") {
    data = { documents: data["documents"] };
  }
  await put(`${moduleName}/${section}`, id, data);
};
