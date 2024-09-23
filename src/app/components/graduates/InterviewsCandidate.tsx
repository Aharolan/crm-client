"use client";
import React, { useState, useEffect } from "react";
import { getAll } from "@/services/baseService";
import CandidateRow from "./CandidateRow";
import * as Styles from "./candidate.styles";
import Pagination from "../pagination/Pagination";
import * as Types from "./graduatesTypes";


const InterviewsCandidatesTable = () => {

  const [candidateList, setCandidateList] = useState<Types.interviewsCandidates[]>([]);
  const [filterCandidateList, setFilterCandidateList] = useState<Types.interviewsCandidates[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await getAll("interviewsCandidates");
      const data_candidate = response?.data;
      if (data_candidate) {
        setCandidateList(data_candidate);
        setFilterCandidateList(data_candidate);
        setLoading(false);
        setIsDataAvailable(true);
      } else {
        console.log("No candidate data available.");
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.error("Error fetching candidate data:", error);
      setIsDataAvailable(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemsPerPage = 5;

  const partialList = (list: Types.interviewsCandidates[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const renderCandidates = () => {
    let sortedList = [...filterCandidateList];
    return partialList(sortedList).map((candidate, index) => (
      <CandidateRow
        key={candidate.id}
        candidateData={candidate}
      />
    ));
  };

  const filterCandidates = (search_: string) => {
    const filtered = candidateList.filter((candidate) => {
      return Object.values(candidate).some((field) =>
        `${field}`.includes(search_)
      );
    });
    setFilterCandidateList(filtered);
    handlePageChange(1);
  };

  const addStudent = () => {
    console.log("addStudent was pressed");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Styles.container>
      <Styles.Row>
        <Styles.TableCaption>מועמדים לראיונות</Styles.TableCaption>
        <Styles.SearchButton
          type="text"
          placeholder="&#128269;"
          onChange={(e) => {
            filterCandidates(e.target.value);
          }}
        />

        <Styles.AddStudentButton onClick={() => addStudent()}>
          הוסף מועמד
        </Styles.AddStudentButton>
      </Styles.Row>
      <Styles.TableHead>
        <Styles.CandidateHeadField></Styles.CandidateHeadField>
        <Styles.CandidateHeadField>עיר מגורים</Styles.CandidateHeadField>
        <Styles.CandidateHeadField>כיתה </Styles.CandidateHeadField>
        <Styles.CandidateHeadField>שם התלמיד</Styles.CandidateHeadField>
      </Styles.TableHead>
      {isDataAvailable ? (
        loading ?
        <Styles.InfoMassage>loading...</Styles.InfoMassage> :
        <Styles.Table>{renderCandidates()}</Styles.Table>) :
        <Styles.InfoMassage>Data is not available</Styles.InfoMassage>
      };
      
      <Pagination
        totalItems={filterCandidateList.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </Styles.container>
  );
};

export default InterviewsCandidatesTable;
