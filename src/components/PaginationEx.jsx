import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const PaginationEx = ({ currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  const pageRange = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2].filter(
    (pageNumber) => pageNumber > 0
  );

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className="font-semibold" href="#" onClick={handlePrevious} />
          </PaginationItem>
          {pageRange.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                isActive={currentPage === pageNumber}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="font-semibold" href="#" onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationEx;
