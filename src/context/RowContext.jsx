import { createContext, useContext, useState } from "react";

const rowContext = createContext();

export function RowProvider({ children }) {
  const [rowsSelected, setRowsSelected] = useState([]);

  return (
    <rowContext.Provider value={{ rowsSelected, setRowsSelected }}>
      {children}
    </rowContext.Provider>
  );
}

export function useRowContext() {
  return useContext(rowContext);
}
