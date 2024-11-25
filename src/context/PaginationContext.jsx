import { createContext, useContext, useState } from "react";

const paginationContext = createContext();

export function PaginationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [rows, setRows] = useState(10);

  return (
    <paginationContext.Provider
      value={{ currentPage, setCurrentPage, rows, setRows }}
    >
      {children}
    </paginationContext.Provider>
  );
}

export function usePagination() {
  return useContext(paginationContext);
}
