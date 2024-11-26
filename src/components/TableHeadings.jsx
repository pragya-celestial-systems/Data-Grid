import { TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import THeading from "./Theading";

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
      <p></p>
      {keys.map((key, index) => (
        <THeading key={index} index={index} heading={key} columnKey={key} />
      ))}
    </TableRow>
  );
}

export default TableHeading;
