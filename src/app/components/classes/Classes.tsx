'use client'

import { useRouter } from 'next/navigation';
import * as Styles from "./classes.styles"
import { ClassData } from '../class/Class';




function Classes() {

    const myList: ClassData[] = [
        { id: '1', name: "כיתה 1" },
        { id: '2', name: "כיתה 2" },
        { id: '3', name: "כיתה 3" },
      ];

    const router = useRouter();

    const handleClick = (classId: string) => {
        router.push('/classes/' + classId);
        }

    return (
        <Styles.Container>
        {myList.map((class_) => (
            <Styles.Button key={class_.id} onClick={() => handleClick(class_.id)}>{class_.name}</Styles.Button>
        ))}
        </Styles.Container>
    );
}

export default Classes
  