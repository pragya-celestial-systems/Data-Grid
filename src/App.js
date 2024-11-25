import TablePaginationDemo from "./components/Pagination";
import Table from "./components/Table";
import { TableDataProvider } from "./context/tableData";
import { PaginationProvider } from "./context/PaginationContext";
import BasicTable from "./components/Table";

function App() {
  return (
    <TableDataProvider>
      <PaginationProvider>
        <BasicTable />
        <TablePaginationDemo />
      </PaginationProvider>
    </TableDataProvider>
  );
}

export default App;
