import { TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import THeading from "./Theading";

function TableHeading({ headings }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (headings) {
      const objectKeys = Object.keys(headings);
      const updatedObjectKeys = objectKeys.splice(0, objectKeys.length - 1);
      setKeys(updatedObjectKeys);
    }
  }, [headings]);

  return (
    <TableRow>
      <p></p>
      {keys.map((key, index) => (
        <THeading key={index} index={index} heading={key} columnKey={key} />
      ))}
    </TableRow>
  );
}

export default TableHeading;
