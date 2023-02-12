import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  register,
  verify,
  resendVerification,
  login,
  sendResetEmail,
  resetPassword,
  logout,
  fetchCurrent,
  deleteAccount,
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
      toast.success('Verification email sent', {
        duration: 10000,
      });
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

export const sendResetPasswordEmail = createAsyncThunk(
  'emailReset',
  async (data, { rejectWithValue }) => {
    try {
      const res = await sendResetEmail(data);
      toast.success(
        'We sent you an email with further instructions. Check your mailbox',
        { duration: 10000 }
      );
      return res;
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

export const resetUserPassword = createAsyncThunk(
  'resetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const res = await resetPassword(data);
      toast.success('New password is set! Now you can login');
      return res;
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
  async (token, { rejectWithValue }) => {
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

export const deleteUser = createAsyncThunk(
  'deleteUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await deleteAccount();
      console.log(result);
      toast.success('Your account successfully deleted!');
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error('Oops! Deleting went wrong, please, try again');
      return rejectWithValue(error);
    }
  }
);
