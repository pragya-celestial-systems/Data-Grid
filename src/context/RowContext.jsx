import { createContext, useContext, useState } from "react";

const rowContext = createContext();

export function RowProvider({ children }) {
  const [areAllSelected, setAreAllSelected] = useState([]);
  const [rowsToBeDeleted, setRowsToBeDeleted] = useState([]);

  return (
    <rowContext.Provider
      value={{
        areAllSelected,
        setAreAllSelected,
        rowsToBeDeleted,
        setRowsToBeDeleted,
      }}
    >
      {children}
    </rowContext.Provider>
  );
}

export function useRowContext() {
  return useContext(rowContext);
}
