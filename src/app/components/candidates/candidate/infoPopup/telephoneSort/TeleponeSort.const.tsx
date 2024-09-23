
const whoDidTheCallOptions: {[key: string]: string} = {id: 'מישהו', id1: 'עוד מישהו'}
const militaryStatusOptions: {[key: string]: string} = {id: 'פטור', id1: 'עשה', id2: 'דחוי בני"ש', id3: 'נפשי', id4: 'אחר'}
											
const defaultText = [{field:"current_occupation", text:"מה עושה היום", type:"text"},
                    {field:"previous_jobs", text:"עבודות קודמות", type:"text"},
                    {field:"average_salary_previous_jobs", text:"שכר ממוצע בעבודה קודמת", type:"text"},
                    {field:"military_service", text:"שירות צבאי", type:"select", options: militaryStatusOptions},
                    {field:"why_interested", text:"מדוע מתעניין", type:"text"},
                    {field:"general_comments", text:"הערות כלליות", type:"text"},
                    {field:"english_skills", text:"ידע באנגלית", type:"text"},
                    {field:"math_skills", text:"ידע במתמטיקה", type:"text"},
                    {field:"programming_skills", text:"ידע בתכנות", type:"text"},
                    {field:"call_date", text:"תאריך ביצוע השיחה", type:"date"},
                    {field:"caller", text:"בוצע על ידי", type:"select", options: whoDidTheCallOptions},
                    {field:"puzzle_solution", text:"פתרון החידה", type:"text"},
                    {field:"puzzle_solution_comments", text:"הערות על פתרון החידה", type:"text"},
                    {field:"concluding_comments", text:"הערות-סיכום", type:"textarea"}
                ]



export { defaultText, whoDidTheCallOptions };

