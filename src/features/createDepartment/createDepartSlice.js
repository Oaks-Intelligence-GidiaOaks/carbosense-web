import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCreateDepartmentScreen: false,
}

export const createDepartmentSlice = createSlice({
    name: "createDepartment",
    initialState,
    reducers: {
        setDepartmentScreen: (state, action) => {
            return {
                ...state,
                showCreateDepartmentScreen: action.payload,
            }
        }
    }
})


export const {setDepartmentScreen} = createDepartmentSlice.actions;

export default createDepartmentSlice.reducer;