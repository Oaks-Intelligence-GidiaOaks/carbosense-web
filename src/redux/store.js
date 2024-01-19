import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import emissionReducer from "../features/emissions/emissionSlice";
import registrationReducer from "../features/user/registrationSlice";
import inviteUserReducer from "../features/inviteUser/inviteUserSlice";
import createDepartmentReducer from "../features/createDepartment/createDepartSlice";
import resetPasswordSlice from "../features/resetPassword/resetPasswordSlice";
import  createOrgSlice  from "../features/organization/organizationSlice";
import staffReducer  from "../features/staff/staffSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    registration: registrationReducer,
    emission: emissionReducer,
    inviteUser: inviteUserReducer,
    createDepartment: createDepartmentReducer,
    resetPassword: resetPasswordSlice,
    org: createOrgSlice,
    staff: staffReducer ,
  },
});
