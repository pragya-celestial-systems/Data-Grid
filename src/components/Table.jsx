import React, { useEffect, useState } from "react";
import users from "../database/users.data";
import TableHeading from "./TableHeading";
import Row from "./Row";
import { useTableData } from "../context/tableData";
import { usePagination } from "../context/PaginationContext";

// function Table() {
//   const {filteredData, setFilteredData} = useTableData();
//   const {currentPage} = usePagination();

//   useEffect(() => {
//     setFilteredData(users)
//   }, [])

//   useEffect(() => {
//     setFilteredData(users.slice(currentPage * 10, currentPage * 10 + 10))
//   }, [currentPage])

//   console.log(filteredData);

//   return (
//     <table>
//       <thead>
//         <TableHeading headings={filteredData[0]} />
//       </thead>
//       <tbody>
//         {filteredData && filteredData.map((rowData, index) => (
//           <Row data={rowData} key={index} />
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default Table;
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

export default function BasicTable() {
  const { filteredData, setFilteredData } = useTableData();
  const { currentPage, rows } = usePagination();

  useEffect(() => {
    setFilteredData(users);
  }, []);

  useEffect(() => {
    setFilteredData(users.slice(currentPage * 10, currentPage * 10 + rows));
  }, [currentPage, rows]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableHeading headings={filteredData[0]} />
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <Row data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
