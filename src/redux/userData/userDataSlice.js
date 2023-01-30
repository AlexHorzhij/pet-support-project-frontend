import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData, updateUser } from './userDataOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    city: null,
    picture: null,
  },
  isLoading: false,
  error: null,
};

export const fetchUserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
