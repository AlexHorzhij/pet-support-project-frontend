import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNoticesByCategory,
  removNoticefromUserById,
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
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchNoticesByCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removNoticefromUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(removNoticefromUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(removNoticefromUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
