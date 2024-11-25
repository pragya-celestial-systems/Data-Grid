import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRowContext } from "../context/RowContext";
import { useTableData } from "../context/tableData";

const useButtonStyles = makeStyles({
  buttonContainer: {
    width: "100svw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "1rem",
    background: "whitesmoke",
    boxSizing: "border-box",
  },
});

function DeleteButton() {
  const classes = useButtonStyles();
  const { rowsSelected, setRowsSelected } = useRowContext();
  const { setTableData, tableData } = useTableData();

  function handleDeleteRow() {
    const confirm = window.confirm("Are you sure you want to delete the data?");

    if (!confirm) return;

    const updatedData = tableData.filter((data, index) => {
      const element = rowsSelected.find((el) => {
        const rowIndex = el.closest("tr").dataset.rowIndex;
        return rowIndex == index;
      });

      if (element) {
        element.closest("tr").remove();
      }

      if (!element) {
        return data;
      }
    });

    setTableData(updatedData);
    setRowsSelected([]);
  }

  console.log(rowsSelected);

  return (
    <div className={classes.buttonContainer}>
      <Button variant="contained" color="error" onClick={handleDeleteRow}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteButton;
