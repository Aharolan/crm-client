import React, { useState, useRef,useEffect } from "react";
import * as Styles from "./CandidateInfo.style";
import { candidateInfoGeneral } from "../candidateTypes";
import { admitionStatus, maritalStatus } from "../../candidateEnums";
import { getClassesOptions } from "@/services/classService";
import {general} from "../infoPopup.styles"
import { usersNames } from "@/services/usersService";


const CandidateInfo = ({ data, setData, errored }: 
  {data: candidateInfoGeneral, setData: (key: string, value: any) => void, errored: string[]}) => {

   

    const fileInput = useRef<HTMLInputElement>(null);

    const [names, setNames] = useState<Record<string, string>>({})
    useEffect(
      () => {usersNames().then(names => setNames(names))}, []
    )

    const boxLabels = [
      {field:"lead_source", text:"מקור הליד ", type:"text"},
      {field:"lead_creator", text:"יוצר הליד", type:"select", options: names},
      {field:"lead_created_at", text:"מועד יצירת הליד",type:"date"},
      {field:"image_path", text:"העלאת תמונה", type:"img"},
      {field:"responsible", text:"אחראי טיפול", type:"select", options: names},   
      {field:"campaign", text:"קמפיין", type:"text"},                      
      {field:"status", text:"סטטוס", type:"select", options: admitionStatus},
      {field:"relevant_class", text:"מתאים לכיתה", type:"select", options: getClassesOptions()},
      {field:"id_number", text:"ת.ז", type:"text"},
      {field:"last_name", text:"שם משפחה", type:"text"},
      {field:"first_name", text:"שם פרטי", type:"text"},
      {field:"whatsapp", text:"whatsapp", type:"text"},
      {field:"email", text:"מייל", type:"text"},                      
      {field:"phone", text:"נייד", type:"text"},
      {field:"marital_status", text:"מצב משפחתי", type:"select", options: maritalStatus},
      {field:"birth_date", text:"תאריך לידה", type:"date"},
      {field:"city", text:"עיר מגורים", type:"text"},
      {field:"house_number", text:"מספר בית", type:"text"},                      
      {field:"street", text:"רחוב", type:"text"},
      {field:"notes", text:"הערות", type:"textarea"}
    ];

    
    const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              if (typeof reader.result === 'string') {
                if (reader.result.length > 4 * 1024 * 1024) {
                  alert( 'קובץ גדול מ 4mb');
                  return
              }
                setData('image_path', reader.result)
              }
          };

          reader.readAsDataURL(file);
      }
  };     

  return (
    <Styles.wraper>
      <Styles.sideText>
          <p>פרסום:</p>
          <p>מידע כללי:</p>
      </Styles.sideText>
    <Styles.grid>
      {...boxLabels.map((field, index) => {
        return (

          field.type !== "img" ? 
        <general.fieldWrapper key={index} error={errored.includes(field.field)}>
          <general.label>{field["text"]}</general.label>
          {field.type === "text" && (
          <general.input
            value={data[field.field as keyof candidateInfoGeneral]}
            onChange={(e) => setData(field.field, e.target.value)}
          />)
          }
          {field.type === "textarea" && (
          <general.textarea
            value={data[field.field as keyof candidateInfoGeneral]}
            onChange={(e) => setData(field.field, e.target.value)}
          />)
          }
          {field.type === "date" && (
          <general.input 
          type = "date"
            value={data[field.field as keyof candidateInfoGeneral]}
            onChange={(e) => setData(field.field, e.target.value)}
          />)
          }
          {field.type === "select" && field.options &&(
            <general.select 
              value={[data[field.field as keyof candidateInfoGeneral]]}
              onChange={(e) => setData(field.field, e.target.value)}
            >
            <option value=""> </option>
            {...Object.entries(field.options).map(
              ([key, value]) => <option value={key}>{value}</option>
            )}
            </general.select>)
            }
        </general.fieldWrapper>

        : <Styles.imgWrapper key={index}>
        
          <input
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange} 
              accept=".png, .jpg, .jpeg, .svg"
              ref={fileInput}
          />
          {data.image_path ?
          <Styles.Image 
              src={data.image_path || ''} 
              onClick={()=> fileInput.current?.click()}
          />
          : <Styles.ImageText onClick={()=> fileInput.current?.click()}>העלאת תמונה</Styles.ImageText>}
        </Styles.imgWrapper>
      )
      })}
    </Styles.grid>
    </Styles.wraper>
    )
}

export default CandidateInfo

