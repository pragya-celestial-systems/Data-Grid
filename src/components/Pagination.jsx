import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { usePagination } from "../context/PaginationContext";
import { useTableData } from "../context/tableData";

export default function TablePaginationDemo() {
  const { currentPage, setCurrentPage, rows, setRows } = usePagination();
  const { tableData } = useTableData();

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRows(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={tableData.length}
      page={currentPage}
      onPageChange={handleChangePage}
      rowsPerPage={rows}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
