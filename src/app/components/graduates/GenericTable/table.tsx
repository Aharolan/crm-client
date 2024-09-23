"use client";
import React, { useState, useEffect } from "react";
import { getAll } from "@/services/baseService";
import Row from "./row";
import Pagination from "@/components/pagination/Pagination";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import { ClipLoader } from "react-spinners"; // Import the ClipLoader component
import * as Styles from "./table.Styles";

interface TableProps {
  pageTableHeader: string;
  isStudents?: string;
  tableHeaders: Array<{
    name: string;
    sort?: string;
  }>;
  addButton?: {
    name: string;
    button: React.ElementType;
    popup: React.ElementType;
    openPopup: () => void;
    isPopupOpen: string;
    updateTable: () => void;
  };

  tableNameToFetch: string;
  buttons?: Array<{
    name?: string;
    component: React.ElementType;
    isPopupOpen: string;
    popup: React.ElementType;
  }>;
}

const Table: React.FC<TableProps> = ({
  pageTableHeader,
  isStudents,
  tableHeaders,
  addButton,
  tableNameToFetch,
  buttons,
}) => {
  const [tableInfoList, setTableInfoList] = useState<Record<string, any>[]>([]);
  const [searchItems, setSearchItems] = useState<Record<string, any>[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [shouldTableUpdate, setShouldTableUpdate] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoaded(true);
      const response = await getAll(tableNameToFetch);
      const tableData = response?.data;
      if (tableData.length > 0) {
        setTableInfoList(tableData);
        setSearchItems(tableData);
        setIsLoaded(false);
        setIsDataAvailable(true);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.error(`Error fetching ${tableNameToFetch} data.`, error);
      setIsDataAvailable(false);
    }
  };

  useEffect(() => {
    !shouldTableUpdate ? fetchData() : setTimeout(() => fetchData(), 3000);
  }, [shouldTableUpdate]);

  const updateTable = () => {
    setShouldTableUpdate(true);
  };

  const handleSort = (columnName: string) => {
    if (sortBy === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
      setSortBy(columnName);
    }
  };

  const itemsPerPage = 14;

  const partialList = (list: Record<string, any>[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const renderTableHeaders = () => {
    return tableHeaders.map(
      (header: { name: string; sort?: string }, index) => (
        <Styles.TableHeadField key={index}>
          {header.name}
          {header.sort && (
            <Styles.SortButton
              onClick={() => {
                handleSort(header.sort ? header.sort : "");
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

  const filterRows = (search_: string) => {
    const result = tableInfoList.map((originalObj: Record<string, any>) => {
      return { ...originalObj };
    });

    const filteredResult = result.filter((obj) => {
      return Object.keys(obj).some(
        (key) => key !== "id" && `${obj[key]}`.includes(search_)
      );
    });

    setSearchItems(filteredResult);
    handlePageChange(1);
  };

  const renderRows = () => {
    let sortedList = [...searchItems];
    if (sortBy) {
      sortOrder === "asc"
        ? sortedList.sort((a: Record<string, any>, b: Record<string, any>) => {
            const aValue = a[sortBy] || "";
            const bValue = b[sortBy] || "";
            return aValue.localeCompare(bValue);
          })
        : sortedList.sort((a: Record<string, any>, b: Record<string, any>) => {
            const aValue = a[sortBy] || "";
            const bValue = b[sortBy] || "";
            return bValue.localeCompare(aValue);
          });
    }

    return partialList(sortedList).map((row: Record<string, any>) => (
      <Row
        key={row.id}
        data={row}
        isStudent={isStudents}
        statusColor={row.status}
        buttons={buttons}
        updateTable={updateTable}
      />
    ));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Styles.Container>
      <Styles.Row>
        <Styles.TableCaption>{pageTableHeader}</Styles.TableCaption>
        <Styles.SearchButton
          type="text"
          placeholder="&#128269;"
          onChange={(e) => {
            filterRows(e.target.value);
          }}
        />
        {addButton && (
          <addButton.button
            onClick={() => {
              addButton.openPopup();
            }}
          >
            {addButton.name}
          </addButton.button>
        )}
      </Styles.Row>

      {isDataAvailable ? (
        <Styles.Container>
          <Styles.TableHead>{renderTableHeaders()}</Styles.TableHead>
          {isLoaded ? (
            <Styles.TableInfoMassage>
              <ClipLoader color="#0b2d94" size={50} loading={isLoaded} />
            </Styles.TableInfoMassage>
          ) : (
            <Styles.Table>{renderRows()}</Styles.Table>
          )}
          {addButton && addButton.isPopupOpen === "showAddCustomer" && (
            <addButton.popup />
          )}

          {searchItems.length > itemsPerPage && (
            <Styles.PaginationContainer>
              <Pagination
                totalItems={searchItems.length}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </Styles.PaginationContainer>
          )}
        </Styles.Container>
      ) : (
        <Styles.Container>
          <Styles.TableInfoMassage>
            {"...אין נתונים להצגה"}
          </Styles.TableInfoMassage>
        </Styles.Container>
      )}
    </Styles.Container>
  );
};

export default Table;
