export const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("/");
  const fullYear = `20${year}`;
  return new Date(`${fullYear}-${month}-${day}`);
};

export const sortInterviews = (
  interviews: Record<string, any>
): Record<string, any>[] => {
  return interviews.sort((a: Record<string, any>, b: Record<string, any>) => {
    const dateA = parseDate(a.date).getTime();
    const dateB = parseDate(b.date).getTime();
    return dateA - dateB;
  });
};

export const isInterviewHistorical = (
  interview: Record<string, any>
): boolean => {
  const currentDate = new Date();
  const interviewDate = parseDate(interview.date);
  return interviewDate < currentDate;
};
