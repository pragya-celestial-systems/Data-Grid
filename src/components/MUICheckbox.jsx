import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useRowContext } from "../context/RowContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MUICheckbox() {
  const { rowsSelected, setRowsSelected } = useRowContext();
  const checkRef = React.useRef();

  function handleCheck() {
    const currentElement = checkRef.current;

    if (currentElement.firstElementChild.checked) {
      setRowsSelected((prevState) => [...prevState, currentElement]);
    } else {
      const filteredRowIndices = rowsSelected.filter(
        (element) => element !== currentElement
      );

      setRowsSelected(filteredRowIndices);
    }
  }

  return <Checkbox {...label} onChange={handleCheck} ref={checkRef} />;
}
