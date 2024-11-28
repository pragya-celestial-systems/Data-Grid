import { createContext, useContext, useState } from "react";

const rowContext = createContext();

export function RowProvider({ children }) {
  const [rowsToBeDeleted, setRowsToBeDeleted] = useState([]);
  const [areAllSelected, setAreAllSelected] = useState(false);

  return (
    <rowContext.Provider
      value={{
        rowsToBeDeleted,
        setRowsToBeDeleted,
        areAllSelected,
        setAreAllSelected
      }}
    >
      {children}
    </rowContext.Provider>
  );
}

export function useRowContext() {
  return useContext(rowContext);
}
