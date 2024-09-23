'use client';
import React, { useState, useEffect } from 'react';
import CourseRow , {Course} from './CourseRow';
import * as Styles from './Courses.styles'
import Pagination from "../../pagination/Pagination"; 
import {getClassCourses, getCourses} from '@/services/coursesService'

const CoursesList = (props: {classId?: string}) => {

    const [courseList, setCourseList] = useState<Course[]>([]);
    const [currentPage, setCurrentPage] = useState(1);  

  
    const fetchData = () => {
        try {   
        let data_courses = null
        if (props.classId) {
            data_courses = getClassCourses(props.classId)}
        else {
            data_courses = getCourses()}
                 
        if (data_courses) {
        setCourseList(data_courses);
        } 
        else {
        console.log('No courses data available.');
        }
        } catch (error) {
            console.error('Error fetching courses data:', error);
        }
        };
    
    useEffect(() => {fetchData(); }, []); 

    const itemsPerPage = 5;

    const prtialList = (list: Course[]) =>{
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
        return currentItems
    }
 
    const onDelete = (id: string) => {
        setCourseList([...courseList.filter(course => course.id !== id)])
    }

    const renderCourses = () => {
        return prtialList(courseList).map((course, index) => (
        <CourseRow deleteData={onDelete} key={index} courseData={course} fetchData={fetchData}/>
        ));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
    
    return (
    <Styles.container>

    <Styles.Row>
        <Styles.TableCaption>רשימת קורסים</Styles.TableCaption>

        <Styles.AddStudentButton 
        onClick={() => console.log("אין הוספת קורס כרגע")}>הוסף קורס
        </Styles.AddStudentButton>
    </Styles.Row>

        <Styles.TableHead>
        <Styles.CourseHeadField></Styles.CourseHeadField>
        <Styles.CourseHeadField>משך הקורס</Styles.CourseHeadField>
        <Styles.CourseHeadField>קטגוריה</Styles.CourseHeadField>
        <Styles.CourseHeadField>שם הקורס</Styles.CourseHeadField>
        </Styles.TableHead>

    <Styles.Table>
        {renderCourses()}
    </Styles.Table>

    <Pagination
      totalItems={courseList.length}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
    />
    {props.classId && 
       <Styles.ArrowIcon 
       onClick={() => {window.location.pathname = `/students/classes/${props.classId}`;}} /> 
    }

    </Styles.container>
)};

export default CoursesList;
