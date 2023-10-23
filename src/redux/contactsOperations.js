import { createAsyncThunk } from "@reduxjs/toolkit";

import { $instance } from "./constants";

// https://mockapi.io
// https://6525265667cfb1e59ce6bb61.mockapi.io  - HW-07
// https://connections-api.herokuapp.com/       - HW-08

// const $instance2 = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
// });

// Contacts
//====================
// get all list Contacts
export const requestContactsThunk = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await $instance.get("/contacts");
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// add Contact
export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    const {name, number, selected=false} = contact;
    try {
      const { data } = await $instance.post("/contacts", { name, number, selected });
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// delete Contact
export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await $instance.delete(`/contacts/${contactId}`);
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// edit/update Contact
export const updateContactThunk = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    const {id:contactId, name, number,} = contact;
    try {
      const { data } = await $instance.patch(`/contacts/${contactId}`, { name, number });
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// logout user -> clear Contacts 
export const clearContactsThunk = createAsyncThunk(
  "contacts/clearContacts",
  async (_, thunkAPI) => {
    try {
      const data = [];
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


