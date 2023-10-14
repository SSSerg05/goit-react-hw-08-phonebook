import { createSlice } from "@reduxjs/toolkit";

import { registerUserThunk, loginUserThunk } from "./operations";

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
        state.error = null;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.authetification = true;
      })
      .addCase(registerUserThunk.rejected, handleRejected)
      // ==== Login ====
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.authetification = true;
      })
      .addCase(loginUserThunk.rejected, handleRejected)
      .addDefaultCase((state, action) => {})
});

export const authReducer = authSlice.reducer;
