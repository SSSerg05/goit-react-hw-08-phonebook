import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// https://mockapi.io
// https://6525265667cfb1e59ce6bb61.mockapi.io  - HW-07
// https://connections-api.herokuapp.com/       - HW-08
//axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const $instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});


// Auth
//====================

// записати токен
export const setToken = (token) => {
  $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

// очистити токен
export const clearToken = (token) => {
  $instance.defaults.headers['Authorization'] = "";
};

// отримати користувача + токен з серверу, після його реєстрації )
export const registerUserThunk = createAsyncThunk(
  "auth/register", 
  async (userData, thunkAPI) =>{
    try {

      const { data } = await $instance.post('/users/signup', userData);
      setToken(data.token)
      return data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

// login користувача
export const loginUserThunk = createAsyncThunk(
  "auth/login", 
  async (userData, thunkAPI) =>{
    try {

      const { data } = await $instance.post('/users/login', userData);
      setToken(data.token);
      return data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

// auto login user (refresh)
export const refreshUserThunk = createAsyncThunk(
  "auth/refreshUser", 
  async (_, thunkAPI) => {

    const state = thunkAPI.getState();
    const token = state.auth.token;

    try {

      setToken(token);
      const { data } = await $instance.get('/users/current');
      return data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

// logout користувача
export const logoutUserThunk = createAsyncThunk(
  "auth/logout", 
  async (_, thunkAPI) =>{
    try {

      const { data } = await $instance.post('/users/logout');
      clearToken();
      return data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)


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

// edit Contact
export const editContactThunk = createAsyncThunk(
  "contacts/editContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await $instance.patch(`/contacts/${contactId}`);
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// check filter
export const toggleCompletedThunk = createAsyncThunk(
  "contacts/toggleCompleted",
//   async (contact, thunkAPI) => {
//     try {
//       const response = await $instance.put(`/contacts/${contact.id}`, {
//         selected: !contact.selected,
//       });
//       return response.data;
//     } 
//     catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
);
