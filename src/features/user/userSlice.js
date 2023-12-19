import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

const user = secureLocalStorage.getItem("UCD");
const accessToken = secureLocalStorage.getItem("UTFA");
const refreshToken = secureLocalStorage.getItem("URT");

const initialState = {
  user: user,
  accessToken: accessToken,
  refreshToken: refreshToken,
  sessionTimedOut: false,
  accountActions: {
    editProfile: false,
    changeProfilePic: false,
    deleteAccount: false,
    changePassword: false,
    editOrg: false,
   
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    setSessionTimedOut: (state) => {
      state.sessionTimedOut = true;
    },
    clearSessionTimedOut: (state) => {
      state.sessionTimedOut = false;
    },
    editProfile: (state, action) => {
      state.accountActions.editProfile = action.payload;
    },
    changePassword: (state, action) => {
      state.accountActions.changePassword = action.payload;
    },
    deleteAccount: (state, action) => {
      state.accountActions.deleteAccount = action.payload;
    },
    editOrg: (state, action) => {
      state.accountActions.editOrg = action.payload;
    },
  

    resetAccountActions: (state) => {
      state.accountActions = {
        editProfile: false,
        changeProfilePic: false,
        deleteAccount: false,
        changePassword: false,
        editOrg: false,
        addEmission: false,
      };
    },
  },
});

export const {
  setUser,
  setAccessToken,
  setRefreshToken,
  removeUser,
  setSessionTimedOut,
  clearSessionTimedOut,
  editProfile,
  changePassword,
  deleteAccount,
  editOrg,
  resetAccountActions,
} = userSlice.actions;

export default userSlice.reducer;
