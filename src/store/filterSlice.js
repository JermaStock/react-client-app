import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sortBy: "id",
    sortType: "ascend",
    query: "",
  },
  reducers: {
    filterClients(state, action) {
      state.query = action.payload;
    },
    sortClients(state, action) {
      state.sortBy = action.payload;
    },
    changeSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { filterClients, sortClients, changeSortType } =
  filterSlice.actions;
export default filterSlice.reducer;
