import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { usePagination } from "../context/PaginationContext";
import { useSelector } from "react-redux";
import { useTableData } from "../context/tableData";

export default function TablePaginationDemo() {
  const { currentPage, setCurrentPage, rows, setRows, isFiltering } =
    usePagination();
  const data = useSelector((state) => state.tableData);
  const { tableData } = useTableData();

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRows(parseInt(event.target.value));
    setCurrentPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={isFiltering ? tableData.length : data.length}
      page={currentPage}
      onPageChange={handleChangePage}
      rowsPerPage={rows}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
