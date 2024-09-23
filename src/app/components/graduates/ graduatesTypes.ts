export interface Graduate {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  relevantClass: string;
  status: string;
}

export interface Interview {
  id?: string;
  companyName: string;
  interviewDate: string;
  job: string;
}
