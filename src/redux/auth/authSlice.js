import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isLoadingUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user.email = payload.email;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = { email: null };
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isLoadingUser = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, state => {
        state.isLoadingUser = false;
        state.token ? (state.isLoggedIn = true) : (state.isLoggedIn = false);
      });
  },
});
