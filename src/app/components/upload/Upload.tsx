import React, { ReactNode, useRef, useState } from "react";
import * as Styles from './Upload.styles';

const imgorpdf=["jpg", "jpeg", "png", "pdf"];

const validateFile = (content: any, fileName: string) => {
    if (content.length > 4 * 1024 * 1024) {
        return 'קובץ גדול מ 4mb';
    }
    let parts = fileName.split('.');
    let namesuffix=parts[parts.length-1]

    if (!imgorpdf.includes(namesuffix)) {
        return `סיומת קובץ ${namesuffix || '-לא קיים-'} אינה חוקית\nפורמטים חוקיים - ${imgorpdf.join(', ')}`;
    }
}

function Upload({onUpload, style_, accept, children}: {
    onUpload: (fileName: string)=> void, style_: Record<string,string>, accept?: string, children?: ReactNode
    }) {
    
    const inputRef = useRef<HTMLInputElement>(null)
    const handleFileUpload = async (event: any) => {

        let file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e: any) => {

                let content = e.target.result;
                
                const error_ = await validateFile(content, file.name);
                if (error_) {
                    alert(error_);
                    return;
                }

                onUpload(content);
            };
            reader.readAsDataURL(file);
        }
    };

    return (  
       <Styles.upload 
        style={style_}
        onClick={() => inputRef.current?.click()} >
            <input 
                type="file" 
                ref={inputRef}
                accept={accept || ''}
                style={{display: 'none'}}
                onChange={handleFileUpload}
                // in case of failed uploading, allow uploading the same file
                onClick={(e)=> { e.currentTarget.value = ''}}
            />{children}
        </Styles.upload>     
                
    );
}

export default Upload;


