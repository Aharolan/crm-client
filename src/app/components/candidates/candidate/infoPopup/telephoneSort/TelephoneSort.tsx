'use client';

import React from "react";
import * as Styles from "./TelphoneSort.Style";
import { defaultText } from "./TeleponeSort.const"
import { telphoneSortData } from "../candidateTypes";
import { general } from "../infoPopup.styles";


const TelephoneSort = (
    { data, setData }:
    {data: telphoneSortData, setData: (key: string, value: any)=> void}) => {

    return(
        <Styles.wraper>
                <Styles.sideText>
                    <p>מידע כללי:</p>
                    <p>חידה:</p>
                </Styles.sideText>
                <Styles.grid>
                    {defaultText.map((value, index) => (
                    <Styles.field key={index}>
                        <general.label>{value["text"]}</general.label>
                        {value.type === "text" &&
                            <general.input 
                            onChange={(e) => setData(value.field, e.target.value )}
                            value={data[value.field as keyof telphoneSortData]}
                            />
                        }
                        {value.type === "textarea" &&
                            <general.textarea 
                            onChange={(e) => setData(value.field, e.target.value )}
                            value={data[value.field as keyof telphoneSortData]}
                            />
                        }
                        {value.type === "date" && (
                            <general.input 
                            type = "date"
                            value={data[value.field as keyof telphoneSortData]}
                            onChange={(e) => setData(value.field, e.target.value)}
                            />)
                        }
                        {value.type === "select" && value.options &&
                            <general.select
                                onChange={(e) => setData(value.field, e.target.value )}
                                value={data[value.field as keyof telphoneSortData]}
                            >
                                <option value=''></option>
                                {...Object.entries(value.options).map(([key, value]) => (
                                    <option value={key}>{value}</option>
                                ))}
                            </general.select>
                        }
                    </Styles.field>  
                    ))}
                </Styles.grid>
        </Styles.wraper>
    
    )
}

export default TelephoneSort