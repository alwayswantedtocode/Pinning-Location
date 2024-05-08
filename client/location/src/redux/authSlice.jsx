import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  token: null,
  loading: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.token = action.payload.token;
    },

    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
   
    setLogout: (state) => {
      state.currentUser = null;
      state.token = null;
      state.loading = false;
      state.error = false;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  setLogout,

} = authSlice.actions;

export default authSlice.reducer;
