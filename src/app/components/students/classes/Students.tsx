"use client";
import React, { useState, useEffect } from "react";
import StudentsRow, { Student } from "./StudentsRow";
import * as Styles from "./Students.styles";
import Pagination from "../../pagination/Pagination";
import { TbArrowsSort } from "react-icons/tb";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import {getAllStudents,getStudentClass,isActiveNo} from "../../../services/studentService";

const TableStudents = (props: { classId?: string }) => {
  const initialStudent: Student = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    class: "",
    status: "",
    isActive:"",
  };
  const itemsPerPage = 7;
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const [searchStudentList, setSearchStudentList] = useState<Student[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      let dataStudent = [];
      if (props.classId) {
        dataStudent = await getStudentClass(props.classId);
      } else {
        dataStudent = await getAllStudents();
      }
      if (dataStudent[0]) {
        setStudentsList(dataStudent);
        setSearchStudentList(dataStudent);
      } else {
        console.log("No student data available.");
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = (columnName: string) => {
    if (sortBy === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnName);
      setSortOrder("asc");
    }
  };
  
  const partialList = (list: Student[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const renderStudents = () => {
    let sortedList = [...searchStudentList];
    if (sortBy) {
      sortedList = sortedList.sort((a, b) => {
        const columnA = a[sortBy as keyof Student] || "";
        const columnB = b[sortBy as keyof Student] || "";

        if (sortOrder === "asc") {
          return columnA.localeCompare(columnB);
        } else {
          return columnB.localeCompare(columnA);
        }
      });
    }

    return partialList(sortedList).map((student, index) => (
      <StudentsRow
        key={index}
        studentRow={student}
        setStudentsList={setStudentsList}
        setSearchStudentList={setSearchStudentList}
        studentsList={studentsList}
      />
    ));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
 return (
    <Styles.container>
      <Styles.Row>
        <Styles.TableCaption>
          {props.classId
            ? `רשימת תלמידים כיתה ${props.classId}`
            : "רשימת תלמידים"}
        </Styles.TableCaption>
        <Styles.AddStudentButton>הוסף תלמידים</Styles.AddStudentButton>
      </Styles.Row>
      <Styles.TableHead>
        <Styles.StudentHeadField></Styles.StudentHeadField>
        <Styles.StudentHeadField>מייל</Styles.StudentHeadField>
        <Styles.StudentHeadField>פלאפון </Styles.StudentHeadField>
        <Styles.StudentHeadField>
          שם משפחה
          <Styles.SortButton
            onClick={(e) => {
              handleSort("last_name");
            }}
          >
            {sortBy === "last_name" ? (
              sortOrder === "asc" ? (
                <BiUpArrowAlt size={22} />
              ) : (
                <BiDownArrowAlt size={22} />
              )
            ) : (
              <TbArrowsSort size={20} />
            )}
          </Styles.SortButton>
        </Styles.StudentHeadField>
        <Styles.StudentHeadField>
          שם פרטי
          <Styles.SortButton onClick={() => handleSort("first_name")}>
            {sortBy === "first_name" ? (
              sortOrder === "asc" ? (
                <BiUpArrowAlt size={22} />
              ) : (
                <BiDownArrowAlt size={22} />
              )
            ) : (
              <TbArrowsSort size={20} />
            )}
          </Styles.SortButton>
        </Styles.StudentHeadField>
        </Styles.TableHead>
      <Styles.Table>{renderStudents()}</Styles.Table>
      {props.classId && (
        <Styles.ArrowIcon
          onClick={() => {
            window.location.pathname = `/students/classes/${props.classId}`;
          }}
        />
      )}
   {searchStudentList.length > itemsPerPage ? (
  <Pagination 
        totalItems={searchStudentList.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      /> ) : null}  
    </Styles.container>
  );
};

export default TableStudents;
