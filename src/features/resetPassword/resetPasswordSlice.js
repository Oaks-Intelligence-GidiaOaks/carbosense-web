import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showResetPasswordDialog: false,
};

export const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setShowResetPasswordDialog: (state, action) => {
      return {
        ...state,
        showResetPasswordDialog: action.payload,
      };
    },
  },
});

export const {setShowResetPasswordDialog} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
