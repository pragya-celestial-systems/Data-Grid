import React, { useState } from "react";
import { Box, TableCell } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useTableData } from "../context/tableData";

const sortTypes = ["default", "ascending", "descending"];

function THeading({ index, heading, columnKey }) {
  const [sort, setSort] = useState(0);
  const { filteredData, setFilteredData } = useTableData();

  function handleSortColumn(e) {
    setSort((prevState) => (prevState + 1) % 3);
    const sortKey = Number(e.target.dataset.sort);
    const sortType = sortTypes[sortKey];
    const sortedData = [...filteredData];
    const columnData = filteredData.map((data) => data[columnKey]);
    let updatedData = [...filteredData];

    if (sortType === "default") {
      setFilteredData(filteredData);
    } else if (sortType === "ascending") {
      columnData.sort();
      updatedData.forEach((data, index) => {
        data[columnKey] = columnData[index];
      });

      console.log(updatedData);
      setFilteredData(updatedData);
    } else if (sortType === "descending") {
      const compare = (a, b) => {
        if (typeof a[columnKey] === "string") {
          return b[columnKey].localeCompare(a[columnKey]);
        }
        if (typeof a[columnKey] === "number") {
          return b[columnKey] - a[columnKey];
        }
        return 0;
      };
      setFilteredData(sortedData.sort(compare));
    }
  }

  return (
    <TableCell key={index}>
      <Box
        sx={{ display: "flex", cursor: "pointer" }}
        data-sort={sort}
        onClick={handleSortColumn}
      >
        <SwapVertIcon sx={{ color: "grey" }} />
        {heading}
      </Box>
    </TableCell>
  );
}

export default THeading;
