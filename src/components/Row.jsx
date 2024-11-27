import React, { useEffect, useState } from "react";
import Column from "./Column";
import { Checkbox } from "@mui/material";
import { useRowContext } from "../context/RowContext";

function Row({ data }) {
  const [rowData, setRowData] = useState([]);
  const { rowsToBeDeleted, setRowsToBeDeleted } = useRowContext();

  useEffect(() => {
    if (data) {
      const dataArray = Object.values(data);
      setRowData(dataArray);
    }
  }, [data]);

  function handleCheck(key) {
    setRowsToBeDeleted((prevState) => [...prevState, key]);
  }

  return (
    <tr data-row-index={data.unique_key}>
      <Checkbox
        onChange={() => handleCheck(data.unique_key)}
        checked={rowsToBeDeleted.includes(data.unique_key)}
      />
      {rowData.map((value, index) => (
        <Column value={value} key={index} />
      ))}
    </tr>
  );
}

export default Row;
