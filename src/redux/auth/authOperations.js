import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register, login, logout, fetchCurrent } from '../../API/api';

export const registerUser = createAsyncThunk(
  'register',
  async (data, { rejectWithValue }) => {
    try {
      const user = await register(data);
      toast.success(
        'Successfully registered! You can log in after confirming your email',
        { duration: 10000 }
      );
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`Oops! ${response.data.message}, please, try again`);
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await login(data);
      toast.success('Welcome!');
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      console.log(response.data.message);
      toast.error(`Oops! ${response.data.message}, please, try again`);
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      toast.success('Bye! See you later');
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error('Oops! Something went wrong, please, try again');
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
      await logout();
      toast.error('Oops! Something went wrong, please, login again');
      return rejectWithValue(error);
    }
  }
);
