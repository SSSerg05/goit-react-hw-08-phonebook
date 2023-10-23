import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// https://mockapi.io
// https://6525265667cfb1e59ce6bb61.mockapi.io  - HW-07
// https://connections-api.herokuapp.com/       - HW-08

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
      toast.success('Yahoo!!! You registred');
      return data;

    } catch (e) {
      toast.error('Sorry. Cannot restration this email');
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
      toast.error('Sorry. Wrong login data');
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

    // Якщо не має токену вийти, не роблячи рефреш
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

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
