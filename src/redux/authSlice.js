import { createSlice } from "@reduxjs/toolkit";

import { 
  registerUserThunk,
  loginUserThunk, 
  refreshUserThunk,
  logoutUserThunk, } from "./operations";

const handlePending = state => {
  state.loading = true;
  state.error = null;
  state.authetification = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authInitialState = { 
  userData: null,
  token: null,
  authetification: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
  },
  extraReducers: (builder) => 
    builder
      // ==== Registry ====
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.authetification = true;
      })
      .addCase(registerUserThunk.rejected, handleRejected)
      // ==== Login ====
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.authetification = true;
      })
      .addCase(refreshUserThunk.rejected, handleRejected)
      // ==== Refresh ====
      .addCase(refreshUserThunk.pending, handlePending)
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.authetification = true;
      })
      .addCase(loginUserThunk.rejected, handleRejected)
      // ==== Logout ====
      .addCase(logoutUserThunk.pending, handlePending)
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.authetification = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUserThunk.rejected, handleRejected)      
      // ==== default ====
      .addDefaultCase((state, action) => {})
});

export const authReducer = authSlice.reducer;
