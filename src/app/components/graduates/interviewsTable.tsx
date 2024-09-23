"use client";
import React, { useState, useEffect } from "react";
import { get, getAll } from "@/services/baseService";
import Row from "./GenericTable/row";
import Pagination from "@/components/pagination/Pagination";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import { ClipLoader } from "react-spinners";
import * as Styles from "./GenericTable/table.Styles";
import {
  sortInterviews,
  isInterviewHistorical,
  parseDate,
} from "./InterviewHistoricalUtils";
import AddInterview from "./addInterview";

interface TableProps {
  buttons?: Array<{
    name?: string;
    component: React.ElementType;
    isPopupOpen: string;
    popup: React.ElementType;
  }>;
  id?: string;
}

const InterviewTable: React.FC<TableProps> = ({ buttons, id }) => {
  const [tableInfoList, setTableInfoList] = useState<Record<string, any>[]>([]);
  const [searchInterviews, setSearchInterviews] = useState<
    Record<string, any>[]
  >([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddInterview, setShowAddInterview] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isShowingHistorical, setIsShowingHistorical] = useState(false);
  const [companyName, setCompanyName] = useState<string>("");

  const fetchData = async () => {
    try {
      setIsLoaded(true);
      const response = id
        ? await get("interviews", id)
        : await getAll("interviews");
      const tableData = response.data ? response.data : response;
      if (tableData.length > 0) {
        setCompanyName(id ? tableData[0].companyName : "");
        const sortedInterviews = sortInterviews(tableData);
        setTableInfoList(sortedInterviews);
        setSearchInterviews(sortedInterviews);
        setIsLoaded(false);
        setIsDataAvailable(true);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.error(`Error fetching interviews data.`, error);
      setIsDataAvailable(false);
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

  const itemsPerPage = 13;

  const totalItems = isShowingHistorical
    ? searchInterviews.length
    : searchInterviews.filter((interview) => !isInterviewHistorical(interview))
        .length;

  const partialList = (list: Record<string, any>[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const renderTableHeaders = () => {
    const interviewHeaders = [
      { name: "" },
      { name: "משרה", sort: "position" },
      { name: "תאריך ראיון", sort: "date" },
      { name: "שם הלקוח", sort: "company_name" },
    ];
    return interviewHeaders.map(
      (header: { name: string; sort?: string }, index) => (
        <Styles.TableHeadField key={index}>
          {header.name}
          {header.sort && (
            <Styles.SortButton
              onClick={() => {
                handleSort(header.sort || "");
              }}
              asc={sortOrder === "asc"}
            >
              {sortBy === header.sort ? (
                sortOrder === "asc" ? (
                  <BiUpArrowAlt size={22} />
                ) : (
                  <BiDownArrowAlt size={22} />
                )
              ) : (
                <TbArrowsSort size={20} />
              )}
            </Styles.SortButton>
          )}
        </Styles.TableHeadField>
      )
    );
  };

  const filterInterviews = (search_: string) => {
    const result = tableInfoList.map((originalObj: Record<string, any>) => {
      return { ...originalObj };
    });

    const filteredResult = result.filter((obj) => {
      return Object.keys(obj).some(
        (key) => key !== "id" && `${obj[key]}`.includes(search_)
      );
    });

    setSearchInterviews(filteredResult);
    handlePageChange(1);
  };

  const renderRows = () => {
    const interviewsToRender = isShowingHistorical
      ? searchInterviews
      : searchInterviews.filter(
          (interview) => !isInterviewHistorical(interview)
        );

    let sortedList = [...interviewsToRender];
    if (sortBy) {
      sortOrder === "asc"
        ? sortedList.sort((a: Record<string, any>, b: Record<string, any>) => {
            const aValue = a[sortBy] || "";
            const bValue = b[sortBy] || "";
            if (sortBy === "date") {
              const dateA = new Date(parseDate(aValue) as any) as any;
              const dateB = new Date(parseDate(bValue) as any) as any;
              return dateA - dateB;
            }
            return aValue.localeCompare(bValue);
          })
        : sortedList.sort((a: Record<string, any>, b: Record<string, any>) => {
            const aValue = a[sortBy] || "";
            const bValue = b[sortBy] || "";
            if (sortBy === "date") {
              const dateA = new Date(parseDate(aValue) as any) as any;
              const dateB = new Date(parseDate(bValue) as any) as any;
              return dateB - dateA;
            }
            return bValue.localeCompare(aValue);
          });
    }

    return partialList(sortedList).map((row: Record<string, any>) => (
      <Row
        updateTable={() => {}}
        key={row.id}
        data={row}
        statusColor={isInterviewHistorical(row) ? "historical" : ""}
        buttons={buttons}
        showButton={!isInterviewHistorical(row)}
      />
    ));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowHistoricalInterviews = () => {
    setIsShowingHistorical(true);
    setCurrentPage(1);
    setSortOrder("asc");
    setSortBy(null);
  };

  const handleShowCurrentInterviews = () => {
    setIsShowingHistorical(false);
    setCurrentPage(1);
  };

  const closeAddInterview = () => {
    setShowAddInterview(false);
  };

  return (
    <Styles.Container>
      <Styles.Row>
        <Styles.TableCaption>
          {id ? `${companyName} ראיונות ` : "ראיונות"}
        </Styles.TableCaption>
        <Styles.SearchButton
          type="text"
          placeholder="&#128269;"
          onChange={(e) => {
            filterInterviews(e.target.value);
          }}
        />
        <Styles.AddButton onClick={ () => setShowAddInterview(true) }>הוסף ראיון</Styles.AddButton>
      </Styles.Row>

      {isDataAvailable ? (
        <Styles.Container>
          {showAddInterview &&
          <AddInterview onClose={closeAddInterview} onSave={()=> fetchData()}/>}
          <Styles.TableHead>{renderTableHeaders()}</Styles.TableHead>
          {isLoaded && (
            <Styles.TableInfoMassage>
              <ClipLoader color="#0b2d94" size={50} loading={isLoaded} />
            </Styles.TableInfoMassage>
          )}
          <Styles.Table>{renderRows()}</Styles.Table>

          {totalItems > 15 && (
            <Styles.PaginationContainer>
              <Pagination
                totalItems={totalItems}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </Styles.PaginationContainer>
          )}
          {isShowingHistorical && (
            <Styles.buttonUnderTable onClick={handleShowCurrentInterviews}>
              חזור לטבלה המקורית
            </Styles.buttonUnderTable>
          )}
          {!isShowingHistorical && (
            <Styles.buttonUnderTable onClick={handleShowHistoricalInterviews}>
              הצג ראיונות היסטוריים
            </Styles.buttonUnderTable>
          )}
        </Styles.Container>
      ) : (
        <Styles.Container>
          <Styles.TableInfoMassage>...אין נתונים להצגה</Styles.TableInfoMassage>
        </Styles.Container>
      )}
    </Styles.Container>
  );
};

export default InterviewTable;
