import { createAsyncThunk } from '@reduxjs/toolkit';

import { register, login, logout, fetchCurrent } from '../../API/api';

export const registerUser = createAsyncThunk(
  'register', // з чим повинна співпадати ця строка?
  async (data, { rejectWithValue }) => {
    try {
      const user = await register(data);
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await login(data);
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const response = await fetchCurrent(auth.token);
      return response;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
