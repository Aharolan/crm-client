"use client";
import React, { useState, useEffect } from "react";
import ClassRow, { Class } from "./ClassesRow";
import * as Styles from "./classes.styles";
import Pagination from "../../pagination/Pagination";
import data from "@/services/classesService";

const ClassesTable = () => {
  const initialClass: Class = {
    id: "",
    className: "",
    campus: "",
    amountOfStudents: 0,
    StartDate: "",
    EndDate: "",
    status: "",
  };

  const [classList, setClassList] = useState<Class[]>([]);
  const [searchClassList, setSearchClassList] = useState<Class[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const fetchData = async () => {
    try {
      const response = data();
      setClassList(response);
      setSearchClassList(response);
    } catch (error) {
      console.error("Error fetching candidate data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemsPerPage = 5;

  const partialList = (list: Class[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const changeView = (onlyActive: boolean) => {
    let data: Class[] = [];
    data = onlyActive
      ? classList.filter((c) => c.status === "active")
      : classList;
    return data;
  };

  const renderClasses = () => {
    return partialList(changeView(showActiveOnly)).map((classItem, index) => (
      <ClassRow key={index} classesData={classItem} status={classItem.status} />
    ));
  };

  const addClass = () => {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Styles.container>
      <Styles.Row>
        <Styles.TableCaption>רשימת כיתות</Styles.TableCaption>

        <Styles.AddClassButton onClick={() => addClass()}>
          הוספת כיתה
        </Styles.AddClassButton>
      </Styles.Row>

      <Styles.TableHead>
        <Styles.ClassHeadField></Styles.ClassHeadField>
        <Styles.ClassHeadField>תאריך סיום</Styles.ClassHeadField>
        <Styles.ClassHeadField>תאריך התחלה</Styles.ClassHeadField>
        <Styles.ClassHeadField>כמות תלמידים</Styles.ClassHeadField>
        <Styles.ClassHeadField>קמפוס</Styles.ClassHeadField>
        <Styles.ClassHeadField>שם הכיתה</Styles.ClassHeadField>
      </Styles.TableHead>

      <Styles.Table>{renderClasses()}</Styles.Table>

      <Styles.Row>
        <Styles.changeViewButton
          onClick={() => setShowActiveOnly(!showActiveOnly)}
        >
          {showActiveOnly ? "הצג כיתות לא פעילות" : "הצג כיתות פעילות בלבד"}
        </Styles.changeViewButton>
      </Styles.Row>
      <Pagination
        totalItems={searchClassList.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </Styles.container>
  );
};

export default ClassesTable;
