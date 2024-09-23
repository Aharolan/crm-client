
import {downloadfile} from "@/services/fileService";
import * as Styles from './Upload.styles';
import React, { ReactNode } from 'react';



function DownloadButton({ fileName, style_, children }: { 
    fileName: (any), style_: Record<string,string>, children: ReactNode}) {

    const handleDownload = async () => {
        try {
            // this operation creats a new route in the server
            await downloadfile(fileName)
            window.open(`http://localhost:8081/${fileName}`, '_blank');

        } catch (error) {
            console.log(error);
        }
    };
            

    return (
            <Styles.download 
                style={style_}
                disabled={fileName === ''}
                onClick={handleDownload}>{children}
            </Styles.download>
    );
}

export default DownloadButton;

