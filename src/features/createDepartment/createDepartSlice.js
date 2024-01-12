import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

const departmentData = secureLocalStorage.getItem("DAT")

const initialState = {
  showCreateDepartmentScreen: false,
  departmentData: departmentData,
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
