import { createContext, useContext, useState } from "react";

const dataContext = createContext();

export function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <dataContext.Provider
      value={{ tableData, setTableData, filteredData, setFilteredData }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useTableData() {
  return useContext(dataContext);
}
