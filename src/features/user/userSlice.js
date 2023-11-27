import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      state.user = payload.payload;
    },
    setAccessToken: (state, payload) => {
      state.accessToken = payload.payload;
    },
    setRefreshToken: (state, payload) => {
      state.refreshToken = payload.payload;
    },
    removeUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, setAccessToken, setRefreshToken, removeUser } =
  userSlice.actions;

export default userSlice.reducer;
