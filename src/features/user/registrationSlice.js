import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registration: {
    org_name: "",
    org_email: "",
    org_industry: {},
    org_size: "",
  },
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    updateField: (state, payload) => {
      state.registration[payload.path] = payload.value;
    },
  },
});

export const { updateField } = registrationSlice.actions;

export default registrationSlice.reducer;
