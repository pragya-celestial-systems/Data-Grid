import TablePaginationDemo from "./components/Pagination";
import { TableDataProvider } from "./context/tableData";
import { PaginationProvider } from "./context/PaginationContext";
import { RowProvider } from "./context/RowContext";
import BasicTable from "./components/Table";

function App() {
  return (
    <TableDataProvider>
      <PaginationProvider>
        <RowProvider>
          <BasicTable />
          <TablePaginationDemo />
        </RowProvider>
      </PaginationProvider>
    </TableDataProvider>
  );
}

export default App;
