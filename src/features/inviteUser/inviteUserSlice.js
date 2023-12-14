import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    showInviteUserScreen: false,
    invitedStaffEmail: "",
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
          
    }
  })

  export const {
    addIviteUser,
    setInvitedStaffEmail

  } = inviteUserSlice.actions;

  export default inviteUserSlice.reducer;