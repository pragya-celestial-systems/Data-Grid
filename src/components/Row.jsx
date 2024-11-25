import React, { useEffect, useState } from "react";
import Column from "./Column";

function Row({ data }) {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (data) {
      const dataArray = Object.values(data);
      setRowData(dataArray);
    }
  }, [data]);

  return (
    <tr>
      {rowData.map((value, index) => (
        <Column value={value} key={index} />
      ))}
    </tr>
  );
}

export default Row;
