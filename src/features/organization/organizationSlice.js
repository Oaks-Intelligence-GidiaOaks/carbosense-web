import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgData: null,
};

export const createOrgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    setOrgData: (state, action) => {
      return {
        ...state,
        orgData: action.payload,
      };
    },
  },
});

export const { setOrgData } = createOrgSlice.actions;

export default createOrgSlice.reducer;
