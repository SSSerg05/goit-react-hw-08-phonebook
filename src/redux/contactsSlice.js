import { createSlice } from "@reduxjs/toolkit";

import { 
  requestContactsThunk,
  addContactThunk, 
  deleteContactThunk, 
  toggleCompletedThunk } from "./operations";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsInitialState = { 
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
  },
  extraReducers: (builder) => 
    builder
      // requestContacts (getAllContacts)
      .addCase(requestContactsThunk.pending, handlePending)
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(requestContactsThunk.rejected, handleRejected)
      // addContact
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContactThunk.rejected, handleRejected)
      // deleteContact
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContactThunk.rejected, handleRejected)
      // select/unSelect contact
      .addCase(toggleCompletedThunk.pending, handlePending)
      .addCase(toggleCompletedThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleCompletedThunk.rejected, handleRejected)
      .addDefaultCase((state, action) => {})
});

export const contactsReducer = contactsSlice.reducer;
