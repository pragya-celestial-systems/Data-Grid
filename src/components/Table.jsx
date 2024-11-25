import React, { useLayoutEffect, useState } from "react";
import users from "../database/users.data";
import TableHeading from "./TableHeading";
import Row from "./Row";

function Table() {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    setData(users);
  }, []);

  return (
    <table>
      <thead>
        <TableHeading headings={data[0]} />
      </thead>
      <tbody>
        {data.map((rowData, index) => (
          <Row data={rowData} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
