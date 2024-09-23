import React from "react";
import {
  PaginationRightButton,
  PaginationContainer,
  PaginationLeftButton,
  PaginationText,
} from "./pagination.styles";


interface PaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      <PaginationLeftButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
      </PaginationLeftButton>

      <PaginationText>
        עמוד {currentPage} מתוך {totalPages}
      </PaginationText>

      <PaginationRightButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
      </PaginationRightButton>
    </PaginationContainer>
  );
};

export default Pagination;
