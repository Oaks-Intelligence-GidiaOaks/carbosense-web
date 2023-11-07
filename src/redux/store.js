import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import registrationReducer from "../features/user/registrationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    registration: registrationReducer,
  },
});
