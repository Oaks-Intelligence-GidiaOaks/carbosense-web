import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import emissionReducer from "../features/emissions/emissionSlice"
import registrationReducer from "../features/user/registrationSlice";
import inviteUserReducer from "../features/inviteUser/inviteUserSlice"
import createDepartmentReducer from "../features/createDepartment/createDepartSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    registration: registrationReducer,
    emission: emissionReducer,
    inviteUser: inviteUserReducer,
    createDepartment: createDepartmentReducer,
  },
});
