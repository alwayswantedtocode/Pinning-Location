import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newCustomer: null,
  loading: false,
  error: false,
};

export const Slice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customerEntered: (state, action) => {
      state.loading = false;
      state.newCustomer = action.payload;
    },

    // removeCustomer: (state) => {
    //   state.currentUser = null;
    //   state.loading = false;
    //   state.error = false;
    // },
  },
});

export const { customerEntered } = Slice.actions;

export default Slice.reducer;
