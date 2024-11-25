import { TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import MUICheckbox from "./MUICheckbox";

function TableHeading({ headings }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (headings) {
      const objectKeys = Object.keys(headings);
      setKeys(objectKeys);
    }
  }, [headings]);

  return (
    <TableRow>
      <MUICheckbox />
      {keys.map((key, index) => (
        <TableCell key={index}>{key}</TableCell>
      ))}
    </TableRow>
  );
}

export default TableHeading;
