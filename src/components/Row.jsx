import React, { useEffect, useState } from "react";
import Column from "./Column";
import MUICheckbox from "./MUICheckbox";

function Row({ data, index }) {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (data) {
      const dataArray = Object.values(data);
      setRowData(dataArray);
    }
  }, [data]);

  return (
    <tr data-row-index={index}>
      <MUICheckbox />
      {rowData.map((value, index) => (
        <Column value={value} key={index} />
      ))}
    </tr>
  );
}

export default Row;
