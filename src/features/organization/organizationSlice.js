import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgData: null,
  deptData: null
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
    setDeptData: (state, action) => {
      return {
        ...state,
        deptData: action.payload,
      };
    },
  },
});

export const { setOrgData, setDeptData } = createOrgSlice.actions;

export default createOrgSlice.reducer;
