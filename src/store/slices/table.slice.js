import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table-slice",
  initialState: [],
  reducers: {
    removeData: (state, action) => {},
    setTableData: (state, action) => {
      return action.payload;
    },
  },
});

export const { removeData, setTableData } = tableSlice.actions;
export default tableSlice.reducer;
