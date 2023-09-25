import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    opened: false,
    dirty: false,
    isFormClosedByBlur: false,
  },
  reducers: {
    changeFormOpening(state, action) {
      state.opened = action.payload.opened;
    },
    changeFormDirtiness(state, action) {
      state.dirty = action.payload.dirty;
    },
    handleFormClosingByBlur(state, action) {
      state.isFormClosedByBlur = action.payload.isFormClosedByBlur;
    },
    resetFormHandler(state) {
      state.dirty = false;
      state.opened = false;
      state.isFormClosedByBlur = false;
    },
  },
});

export const {
  changeFormOpening,
  changeFormDirtiness,
  resetFormHandler,
  handleFormClosingByBlur,
} = formSlice.actions;
export default formSlice.reducer;
