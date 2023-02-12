import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  verifyUser,
  resendVerificationEmail,
  loginUser,
  logoutUser,
  fetchCurrentUser,
  deleteUser,
} from './authOperations';

const initialState = {
  userEmail: null,
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
      .addCase(verifyUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(verifyUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(resendVerificationEmail.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resendVerificationEmail.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(resendVerificationEmail.rejected, (state, { payload }) => {
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
        state.userEmail = payload.email;
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
        state.userEmail = null;
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
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoadingUser = false;
        state.userEmail = payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userEmail = null;
        state.token = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
