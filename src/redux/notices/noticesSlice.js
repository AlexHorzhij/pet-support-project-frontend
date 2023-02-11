import { createSlice } from '@reduxjs/toolkit';

import {
  fetchNotices,
  fetchAuthNotices,
  removeNoticeFromUserById,
  addNewNotice,
  setFavorite,
  updateNotice,
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
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAuthNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAuthNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAuthNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeNoticeFromUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeNoticeFromUserById.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        const newNoticeList = state.items.filter(
          item => item._id !== payload._id
        );
        state.items = newNoticeList;
        state.isLoading = false;
      })
      .addCase(removeNoticeFromUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addNewNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addNewNotice.rejected, state => {
        state.isLoading = false;
      })
      .addCase(setFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(setFavorite.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          item => item._id === payload.result.notice
        );
        if (payload.categoryName === 'favorite') {
          state.items.splice(index, 1);
        } else {
          state.items[index].favorite = payload.favorite;
        }
        state.isLoading = false;
      })
      .addCase(setFavorite.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateNotice.pending, state => {
        state.isLoading = true
      })
      .addCase(updateNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          item => item._id === payload._id
        );
        state.items.splice(index, 1, payload)
      })
      .addCase(updateNotice.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload.error
      })
  },
});
