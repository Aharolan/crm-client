"use client";
import React, { useState } from "react";
import Table from "./GenericTable/table";

const GraduatesTable = () => {
  return (
    <Table
      pageTableHeader="רשימת בוגרים"
      isStudents={"graduates"}
      tableHeaders={[
        { name: "סטטוס", sort: "status" },
        { name: "מחזור", sort: "class_name" },
        { name: "מייל" },
        { name: "נייד" },
        { name: "שם משפחה", sort: "last_name" },
        { name: "שם פרטי", sort: "first_name" },
      ]}
      tableNameToFetch="graduates"
    />
  );
};

export default GraduatesTable;
