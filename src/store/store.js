import { configureStore } from "@reduxjs/toolkit";
import tableReducers from "./slices/table.slice";

const store = configureStore({
  reducer: {
    tableData: tableReducers,
  },
});

export default store;
