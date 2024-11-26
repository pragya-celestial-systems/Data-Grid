import { createContext, useContext, useState } from "react";

const rowContext = createContext();

export function RowProvider({ children }) {
  const [rowsSelected, setRowsSelected] = useState([]);
  const [rowsToBeDeleted, setRowsToBeDeleted] = useState([]);

  return (
    <rowContext.Provider
      value={{
        rowsSelected,
        setRowsSelected,
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
