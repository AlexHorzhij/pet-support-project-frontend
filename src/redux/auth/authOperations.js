import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  register,
  verify,
  resendVerification,
  login,
  logout,
  fetchCurrent,
} from '../../API/api';

export const registerUser = createAsyncThunk(
  'register',
  async (data, { rejectWithValue }) => {
    try {
      const user = await register(data);
      toast.success('Successfully registered!');
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

export const verifyUser = createAsyncThunk(
  'verify',
  async (data, { rejectWithValue }) => {
    try {
      const res = await verify(data);
      toast.success('Verification successful!');
      return res;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      console.log('Verification error', response.data.message);
      toast.error(`Oops! ${response.data.message}, please, try again`);
      return rejectWithValue(error);
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  'resendVerification',
  async (data, { rejectWithValue }) => {
    try {
      const res = await resendVerification(data);
      toast.success('Verification email sent');
      return res;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`Oops! ${response.data.message}`);
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
      toast.error('Oops! Logging out went wrong, please, try again');
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'current',
  async (token, { rejectWithValue, getState }) => {
    try {
      const response = await fetchCurrent(token);
      return response;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      await logout();
      return rejectWithValue(error);
    }
  }
);
