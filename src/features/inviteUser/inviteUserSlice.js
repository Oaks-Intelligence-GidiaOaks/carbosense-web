import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showInviteUserScreen: false,
  invitedStaffEmail: "",
  invitedStaff: [],
};

export const inviteUserSlice = createSlice({
  name: "inviteUser",
  initialState,
  reducers: {
    addIviteUser: (state, action) => {
      return {
        ...state,
        showInviteUserScreen: action.payload,
      };
    },

    setInvitedStaffEmail: (state, action) => {
      return {
        ...state,
        invitedStaffEmail: action.payload,
      };
    },

    addInvitedStaff: (state, action) => {
      return {
        ...state,
        invitedStaff: [...state.invitedStaff, action.payload],
      };
    },
  },
});

export const { addIviteUser, setInvitedStaffEmail, addInvitedStaff  } = inviteUserSlice.actions;

export default inviteUserSlice.reducer;
