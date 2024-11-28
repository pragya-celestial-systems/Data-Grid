import { Checkbox, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import THeading from "./Theading";
import { useRowContext } from "../context/RowContext";

function TableHeading({ headings }) {
  const [keys, setKeys] = useState([]);
  const {setAreAllSelected, setRowsToBeDeleted} = useRowContext();

  useEffect(() => {
    if (headings) {
      const objectKeys = Object.keys(headings);
      setKeys(objectKeys);
    }
  }, [headings]);

  function handleCheckAll(e){
    const isChecked = e.target.checked;
    if(isChecked){
      setAreAllSelected(isChecked)
    }else{
      setAreAllSelected(isChecked);
      setRowsToBeDeleted([]);
    }
  }

  return (
    <TableRow>
      <Checkbox onChange={handleCheckAll}/>
      {keys.map((key, index) => (
        <THeading key={index} index={index} heading={key} columnKey={key} />
      ))}
    </TableRow>
  );
}

export default TableHeading;
