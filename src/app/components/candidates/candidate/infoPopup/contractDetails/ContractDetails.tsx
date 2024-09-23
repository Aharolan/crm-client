'use client';
import React from 'react';
import * as Styles from './contractDetails.styles';
import { ContractDetailsData } from '../candidateTypes';
import { general } from '../infoPopup.styles';

const fieldProperties: {[key: string] : any}[] = [
    {field: 'date', text: 'זומן לתאריך', type: 'date'},
    {field: 'verify_arrival', text: 'וידוא הגעה:', type: 'checkbox'},
    {field: 'contract_notes', text: 'הערות על החוזה', type: 'textarea'},
    {field: 'signed_contract', text: 'חוזה חתום:', type: 'checkbox'},
    {field: 'signature_date', text: 'תאריך חתימת חוזה', type: 'date'},
    {text: 'צור כרטיס תלמיד', type: 'button'},
    {field: 'notes', text: 'הערות', type: 'textarea'}
  ]

  const ContractDetails = (
    {data, setData}:{
      data: ContractDetailsData, 
      setData: (key: string, value: any)=>void}
      ) => {  
        
    return ( 
  
      <Styles.container>
          {fieldProperties.map((field) => 
              field.type === 'checkbox' ? 
                <Styles.checkboxField>
                  <general.chckboxLabel> {field.text}</general.chckboxLabel> 
                  <general.checkbox 
                    type="checkbox"            
                    onChange={(e) => setData(field.field , e.target.checked )}
                    checked={data[field.field as keyof ContractDetailsData] as boolean}              
                  />
                </Styles.checkboxField> 
              : field.type === 'button' ?
                <Styles.buttonField>
                  {field.type === "button" &&
                  <Styles.studentCard>{field.text}</Styles.studentCard>  
                  } 
                </Styles.buttonField>  

              : <Styles.field>
                  <general.label> {field.text}</general.label>
                
                  {field.type === 'textarea' &&
                    <general.textarea
                      onChange={(e) => setData(field.field , e.target.value )}
                      value={data[field.field as keyof ContractDetailsData] as string}  
                    />
                  }
                  
                  {field.type === 'date' &&
                    <general.input
                      type='date'
                      onChange={(e) => setData(field.field , e.target.value )}
                      value={data[field.field as keyof ContractDetailsData]as string}  
                    />
                  }
              </Styles.field>
                
                )}    
           
      </Styles.container> 
  
    );
  };
  
  export default ContractDetails;
  