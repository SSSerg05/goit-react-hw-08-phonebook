import { createSlice } from "@reduxjs/toolkit";

import { 
  requestContactsThunk,
  addContactThunk, 
  deleteContactThunk,
  toggleCompletedThunk,
  updateContactThunk, } from "./operations";

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
  showModal: false,
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
      // editContact/updateContact
      .addCase(updateContactThunk.pending, handlePending)
      .addCase(updateContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].name = action.payload.name;
        state.items[index].number = action.payload.number;
      })
      .addCase(updateContactThunk.rejected, handleRejected)      
      // select/unSelect contact
      .addCase(toggleCompletedThunk.pending, handlePending)
      .addCase(toggleCompletedThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // const index = state.items.findIndex(
        //   contact => contact.id === action.payload.id
        // );
        // state.items.splice(index, 1, action.payload);
        for (const contact of state.items) {
          if (contact.id === action.payload) {
            contact.selected = !contact.selected;
            break;
          }
        }
      })
      .addCase(toggleCompletedThunk.rejected, handleRejected)
      // default
      .addDefaultCase((state, action) => {})
});

export const contactsReducer = contactsSlice.reducer;

