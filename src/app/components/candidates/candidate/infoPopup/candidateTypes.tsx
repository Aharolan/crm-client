export interface candidateInfoGeneral {
  id: string;
  status: string;
  relevant_class: string;
  id_number: string;
  last_name: string;
  first_name: string;
  whatsapp: string;
  image_path: string;
  lead_source: string;
  lead_creator: string;
  lead_created_at: string;
  responsible: string;
  campaign: string;
  email: string;
  phone: string;
  marital_status: string;
  birth_date: string;
  city: string;
  house_number: string;
  street: string;
  notes: string;
  id_candidate: string;
}

const emptyInfoGeneral: candidateInfoGeneral = {
  id: "",
  status: "",
  relevant_class: "",
  id_number: "",
  last_name: "",
  first_name: "",
  image_path: "",
  lead_source: "",
  lead_creator: "",
  lead_created_at: "",
  responsible: "",
  campaign: "",
  whatsapp: "",
  email: "",
  phone: "",
  marital_status: "",
  birth_date: "",
  city: "",
  house_number: "",
  street: "",
  notes: "",
  id_candidate: "",
};

export interface Document {
  document_type: string;
  document_file: string;
  notes: string;
  id_candidate: string;
  id: string;
}

export const emptyDocument: Document = {
  document_type: "",
  document_file: "",
  notes: "",
  id_candidate: "",
  id: "",
};

export interface Documents {
  id_candidate: string;
  documents: Document[];
}

const emptyDocuments: Documents = { id_candidate: "", documents: [] };

export interface ContractDetailsData {
  date: string;
  verify_arrival: boolean;
  contract_notes: string;
  signed_contract: boolean;
  signature_date: string;
  notes: string;
  id_candidate: string;
}

const emptyContractDetails: ContractDetailsData = {
  date: "",
  verify_arrival: false,
  contract_notes: "",
  signed_contract: false,
  signature_date: "",
  notes: "",
  id_candidate: "",
};

export interface CandidateScheduleData {
  date: string;
  invited: boolean;
  arrival_time: string;
  symbols: string;
  cubes: string;
  automated_exam: string;
  interviewer_notes: string;
  status: string;
  comments: string;
  id_candidate: string;
}

const emptySchedule: CandidateScheduleData = {
  date: "",
  invited: false,
  arrival_time: "",
  symbols: "",
  cubes: "",
  automated_exam: "",
  interviewer_notes: "",
  status: "",
  comments: "",
  id_candidate: "",
};

export interface telphoneSortData {
  current_occupation: string;
  previous_jobs: string;
  average_salary_previous_jobs: string;
  military_service: string;
  why_interested: string;
  general_comments: string;
  english_skills: string;
  math_skills: string;
  programming_skills: string;
  call_date: string;
  caller: string;
  puzzle_solution: string;
  puzzle_solution_comments: string;
  concluding_comments: string;
  id_candidate: string;
}

const emptyTelephonSort: telphoneSortData = {
  current_occupation: "",
  previous_jobs: "",
  average_salary_previous_jobs: "",
  military_service: "",
  why_interested: "",
  general_comments: "",
  english_skills: "",
  math_skills: "",
  programming_skills: "",
  call_date: "",
  caller: "",
  puzzle_solution: "",
  puzzle_solution_comments: "",
  concluding_comments: "",
  id_candidate: "",
};
export interface Milestones {
  id_candidate: string;
  event_id: string;
  start_date: string;
  company_name: string;
  position: string;
  date: string;
  event_name: string;
  name: string;
}

const emptyMilestones: Milestones = {
  id_candidate: "",
  name: "",
  event_id: "",
  start_date: "",
  company_name: "",
  position: "",
  date: "",
  event_name: "",
};

export interface Interviews {
  event_id: number;
  company_name: string;
  event_name: string;
  name: string;
  company_id: number;
  position: string;
  date: string;
  text: string;
}

const emptyInterviews: Interviews = {
  name: "",
  event_id: -1,
  company_name: "",
  event_name: "",
  company_id: -1,
  position: "",
  date: "",
  text: "",
};

export interface allInfo {
  [key: string]: any;
  general: candidateInfoGeneral;
  documents: Documents;
  contract: any;
  schedule: CandidateScheduleData;
  telephon_sort: telphoneSortData;
  milestones: Milestones[];
  interviews: Interviews[];
}

export const emptyAllInfo: allInfo = {
  general: emptyInfoGeneral,
  documents: emptyDocuments,
  contract: emptyContractDetails,
  schedule: emptySchedule,
  telephon_sort: emptyTelephonSort,
  milestones: [emptyMilestones],
  interviews: [emptyInterviews],
};
