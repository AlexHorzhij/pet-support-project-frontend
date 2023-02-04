import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNoticesByCategory,
  removeNoticeFromUserById,
} from './noticesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        console.log('state', state);
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchNoticesByCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeNoticeFromUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeNoticeFromUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(removeNoticeFromUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
