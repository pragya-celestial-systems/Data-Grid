import React, { useEffect, useState } from "react";

function TableHeading({ headings }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (headings) {
      const objectKeys = Object.keys(headings);
      setKeys(objectKeys);
    }
  }, [headings]);

  return <>{keys && keys.map((key, index) => <th key={index}>{key}</th>)}</>;
}

export default TableHeading;
