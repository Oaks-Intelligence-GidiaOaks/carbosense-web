import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showCreateDepartmentScreen: false,
  departmentData: null
};

export const createDepartmentSlice = createSlice({
  name: "createDepartment",
  initialState,
  reducers: {
    setDepartmentScreen: (state, action) => {
      return {
        ...state,
        showCreateDepartmentScreen: action.payload,
      };
    },

    setDepartmentData: (state, action) => {
      return {
        ...state,
        departmentData: action.payload
      }
    }
  },
});

export const { setDepartmentScreen, setDepartmentData } = createDepartmentSlice.actions;

export default createDepartmentSlice.reducer;
