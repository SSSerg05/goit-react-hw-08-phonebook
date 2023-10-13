import { createSlice } from "@reduxjs/toolkit";

import { registerUserThunk } from "./operations";

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
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.authetification = true;
      })
      .addCase(registerUserThunk.rejected, handleRejected)
      
      .addDefaultCase((state, action) => {})
});

export const authReducer = authSlice.reducer;
