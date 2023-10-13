import { createSlice } from "@reduxjs/toolkit";

import { } from "./operations";

// const handlePending = state => {
//   state.loading = true;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

const authInitialState = { 
  loading: false,
  error: null,
  userData: null,
  token: null,
  authetification: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
  },
  // extraReducers: (builder) => 
  //   builder
      // .addCase(fetchContacts.pending, handlePending)
      // .addCase(fetchContacts.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // })
      // .addCase(fetchContacts.rejected, handleRejected)
      // .addCase(addContact.pending, handlePending)
      // .addCase(addContact.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.items.push(action.payload);
      // })
      // .addCase(addContact.rejected, handleRejected)
      // .addCase(deleteContact.pending, handlePending)
      // .addCase(deleteContact.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   const index = state.items.findIndex(
      //     contact => contact.id === action.payload.id
      //   );
      //   state.items.splice(index, 1);
      // })
      // .addCase(deleteContact.rejected, handleRejected)
      // .addCase(toggleCompleted.pending, handlePending)
      // .addCase(toggleCompleted.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   const index = state.items.findIndex(
      //     contact => contact.id === action.payload.id
      //   );
      //   state.items.splice(index, 1, action.payload);
      // })
      // .addCase(toggleCompleted.rejected, handleRejected)
      // .addDefaultCase((state, action) => {})
});

export const authReducer = authSlice.reducer;
