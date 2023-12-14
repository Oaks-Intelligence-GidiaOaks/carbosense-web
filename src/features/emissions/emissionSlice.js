import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showEmissionModal: false,
  };

  export const emissionSlice = createSlice({
    name: "emission",
    initialState,
    reducers: {
        addEmission: (state, action) => {
            state.showEmissionModal = action.payload;
    },
    }
  })

  export const {
    addEmission
  } = emissionSlice.actions;

  export default emissionSlice.reducer;