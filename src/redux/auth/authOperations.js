import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register, verify, login, logout, fetchCurrent } from '../../API/api';

export const registerUser = createAsyncThunk(
  'register',
  async (data, { rejectWithValue }) => {
    try {
      const user = await register(data);
      toast(
        t => (
          <div style={{ position: 'relative' }}>
            <p>
              Successfully registered! You can log in after
              <b> confirming your email</b>. Check your mailbox!
              <br />
              <Button
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-30px',
                  margin: '0',
                }}
                onClick={() => toast.dismiss(t.id)}
              >
                <CloseIcon />
              </Button>
            </p>
          </div>
        ),
        {
          duration: 30000,
        }
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

export const verifyUser = createAsyncThunk(
  'verify',
  async (data, { rejectWithValue }) => {
    try {
      console.log('Verification data-token', data);
      const res = await verify(data);
      console.log('Verification result', res);
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
      // toast.error('Oops! Something went wrong, please, login again');
      await logout();
      return rejectWithValue(error);
    }
  }
);
