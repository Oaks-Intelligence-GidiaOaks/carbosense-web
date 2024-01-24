import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffID: null,
  staffMember: null,
  showAddToDepartment: false,
  showMakeAdmin: false,
  showRemoveAdmin: false
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    updateStaff: (state, action) => {
      return {
        ...state,
        staffID: action.payload.staffID,
        staffMember: action.payload.staffMember,
      };
    },

    addToDepart: (state, action) => {
      state.showAddToDepartment = action.payload;
    },

    makeAdmin: (state, action) => {
      state.showMakeAdmin = action.payload;
    },
    removeAdmin: (state, action) => {
      state.showRemoveAdmin = action.payload;
    },
  },
});

export const { updateStaff, makeAdmin, addToDepart, removeAdmin } = staffSlice.actions;
export default staffSlice.reducer;
