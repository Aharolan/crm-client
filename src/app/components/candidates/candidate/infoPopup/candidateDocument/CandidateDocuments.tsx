'use client';
import React from 'react';
import * as Styles from './candidateDocuments.styles'
import Upload from '@/components/upload/Upload';
import DownloadButton from '@/components/upload/DownloadButton';
import { deleteFile } from '@/services/fileService';
import { Document, Documents, emptyDocument } from '../candidateTypes';
import { general } from '../infoPopup.styles';


const CandidateDocuments = ({data, setData, errored}:
    {data: Documents, setData: (key: string, value: any) => void, errored: string[]}
    ) => {
    
    const _data = data['documents']

    const updateDocumentField = (key:string,value: string, index: number) => {
        _data[index][key as keyof Document] = value
        setData('documents', _data)
    }

    const isEmptyRow = (row: Document) => {
        const relevant = ['document_type', 'document_file', 'notes']
        return Object.entries(row).every(([key, value]) => !relevant.includes(`${key}`) || !value)
    }

    let hasEmptyRow = _data.some(row => isEmptyRow(row))


    const removeRow = (index: number) => {
        _data[index].document_file && deleteFile(_data[index].document_file);
        _data.splice(index, 1)
        setData('documents', _data)
    }

     
    let _style = {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        border: '0.7px solid black',
        borderRadius: "12px",
        height: "95%",
        width: "50%",
        fontSize: "0.7vw",
    }
    
    return (    
    <Styles.wrapper>        
        <Styles.rowsContainer>
        {_data.map((document,index )=>(
            <Styles.row key={index}>
                <Styles.title error={errored[index]?.includes('document_type')}>
                    <general.label>   
                     כותרת מסמך:
                    </general.label> 
                    <general.input  
                        value={document.document_type} 
                        onChange={(e) => updateDocumentField('document_type', e.target.value, index)}
                        />  
                </Styles.title>
                <Styles.document  error={errored[index]?.includes('document_file')} > 
                    <DownloadButton 
                        style_={_style} 
                        fileName = {document.id ? `${data.id_candidate}/${document.id}.pdf` : ''}
                        >הורד קובץ מקורי</DownloadButton> 
                    <Upload 
                        style_={_style} 
                        onUpload={(x: string) => updateDocumentField('document_file', x, index)}
                        accept='.pdf'
                        >
                        {document.document_file ? 'החלף קובץ' : 'העלה קובץ'}
                    </Upload>

                </Styles.document>
                <Styles.comment>
                    <general.label>   
                        הערות
                    </general.label> 
                    <general.input 
                        value={document.notes}  
                        onChange={(e) => updateDocumentField('notes', e.target.value, index )}
                        />   
                </Styles.comment>
                <Styles.remove onClick={() => removeRow(index)}>x</Styles.remove>
            </Styles.row>
        ))}
        </Styles.rowsContainer>
         <Styles.button 
            onClick={() => {setData('documents', [..._data, {...emptyDocument, id_candidate: data.id_candidate}])}} 
            disabled={hasEmptyRow}
            >
            {_data.length > 0 ? "העלה קובץ נוסף" : "העלה קובץ"}
        </Styles.button>
    </Styles.wrapper>   
     
       )
}
export default CandidateDocuments