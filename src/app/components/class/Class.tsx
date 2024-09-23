'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './class.styles';
// import { useEffect } from 'react';
// import axios from 'axios';

interface classAttr {
    id: string,
    name: string,
}

export interface ClassData{
    id: string,
    name: string,
}

function Class({classId}: {classId: string}) {

    // useEffect(() => {
    //     axios.get('http://localhost:8081/api/data/users').then(res => console.log(res.data))
    // }, [])

    const myList: classAttr[] = [
    { id: 'students-list', name: "רשימת תלמידים" },
    { id: 'courses-list', name:  "רשימת קורסים" },
    { id: 'classGrades', name: " גיליון ציונים כיתתי" },
    ];

    const router = useRouter();
    const handleClick = (attrId: string) => {
        router.push('/classes/' + classId + '/' + attrId);
        }
    
    return (
        <styles.Container>
            {myList.map((attr) => (
            <styles.Button key={attr.id} onClick={() => handleClick(attr.id)}>{attr.name}</styles.Button>
        ))}
        </styles.Container>

    );
}

export default Class