import React, { useEffect } from "react";
import users from "../database/users.data";
import TableHeading from "./TableHeading";
import Row from "./Row";
import { useTableData } from "../context/tableData";
import { usePagination } from "../context/PaginationContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import DeleteButton from "./DeleteButton";
import { useRowContext } from "../context/RowContext";

export default function BasicTable() {
  const { filteredData, setFilteredData, setTableData, tableData } =
    useTableData();
  const { currentPage, rows } = usePagination();
  const { rowsSelected } = useRowContext();

  useEffect(() => {
    setTableData(users);
  }, []);

  useEffect(() => {
    if (tableData) {
      setFilteredData(
        tableData.slice(currentPage * 10, currentPage * 10 + rows)
      );
    }
  }, [currentPage, rows, tableData]);

  return (
    <>
      {rowsSelected.length > 0 && <DeleteButton />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableHeading headings={filteredData[0]} />
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <Row key={index} data={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
