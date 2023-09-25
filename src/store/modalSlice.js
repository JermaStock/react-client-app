import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isActive: false,
    isClickOutsideModal: false,
    delModalVisible: false,
  },
  reducers: {
    changeModalVisible(state, action) {
      state.isActive = action.payload;
    },
    changeDeleteModalVisible(state, action) {
      state.delModalVisible = action.payload;
    },
    hadndleClickOutsideModal(state, action) {
      state.isClickOutsideModal = action.payload;
    },
  },
});

export const {
  changeModalVisible,
  changeDeleteModalVisible,
  hadndleClickOutsideModal,
} = modalSlice.actions;
export default modalSlice.reducer;
