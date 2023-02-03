import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friendsOperation';

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFriends.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.friends = payload;
      })
      .addCase(fetchFriends.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
