import React, { useEffect, useState } from "react";
import Column from "./Column";
import { Checkbox } from "@mui/material";
import { useRowContext } from "../context/RowContext";
import { makeStyles } from "@mui/styles";

const useRowStyles = makeStyles({
  tableRow: {
    "&:hover": {
      backgroundColor: "whitesmoke",
      cursor: "pointer",
      transition: "0.3s",
    },
  },
  activeRow: {
    background: "whitesmoke",
  },
});

function Row({ data }) {
  const classes = useRowStyles();
  const [rowData, setRowData] = useState([]);
  const { rowsToBeDeleted, setRowsToBeDeleted } = useRowContext();

  useEffect(() => {
    if (data) {
      const dataArray = Object.values(data);
      const updatedDataArray = dataArray.splice(0, dataArray.length - 1);
      setRowData(updatedDataArray);
    }
  }, [data]);

  function handleCheck(key) {
    if(rowsToBeDeleted.includes(key)){
      const updatedRows = rowsToBeDeleted.filter(unique_key => unique_key !== key);
      setRowsToBeDeleted(updatedRows);
    }else{
      setRowsToBeDeleted((prevState) => [...prevState, key]);
    }

    console.log(rowsToBeDeleted.includes(key));
  }

  return (
    <tr data-row-index={data.unique_key} className={classes.tableRow}>
      <Checkbox
        onChange={() => handleCheck(data.unique_key)}
        checked={rowsToBeDeleted.includes(data.unique_key)}
      />
      {rowData.map((value, index) => (
        <Column
          value={value}
          key={index}
          tableClass={
            rowsToBeDeleted.includes(data.unique_key) ? classes.activeRow : ""
          }
        />
      ))}
    </tr>
  );
}

export default Row;
