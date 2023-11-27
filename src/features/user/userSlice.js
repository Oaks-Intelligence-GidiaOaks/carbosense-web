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
    changePasswords: false,
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
} = userSlice.actions;

export default userSlice.reducer;
